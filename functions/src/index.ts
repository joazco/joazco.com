import {
  defineBoolean,
  defineInt,
  defineSecret,
  defineString,
} from "firebase-functions/params";
import { setGlobalOptions } from "firebase-functions/v2";
import { onRequest } from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import nodemailer from "nodemailer";

setGlobalOptions({ maxInstances: 10 });

const smtpHost = defineString("SMTP_HOST", { default: "smtp.gmail.com" });
const smtpPort = defineInt("SMTP_PORT", { default: 587 });
const smtpSecure = defineBoolean("SMTP_SECURE", { default: false });
const smtpUser = defineString("SMTP_USER", { default: "jazoulay@joazco.com" });
const smtpPassword = defineSecret("SMTP_PASSWORD");
const sendMailApiKey = defineSecret("SEND_MAIL_API_KEY");
const smtpFrom = defineString("SMTP_FROM", { default: "jazoulay@joazco.com" });
const mailTo = defineString("MAIL_TO", {
  default: "jazoulay@joazco.com,celentano.s@gmail.com",
});

type MailPayload = {
  name: string;
  subject: string;
  gift: string;
  deliveryMethode: string;
  information: string;
};

const getString = (value: unknown): string => {
  if (Array.isArray(value)) {
    return getString(value[0]);
  }

  if (typeof value !== "string") {
    return "";
  }

  return value.trim();
};

const getPayload = (
  body: unknown,
  query: Record<string, unknown>,
): MailPayload => {
  const data =
    typeof body === "object" && body !== null
      ? (body as Record<string, unknown>)
      : {};

  return {
    name: getString(data.name ?? data.nom ?? query.name ?? query.nom),
    subject: getString(
      data.subject ??
        query.subject ??
        data.gift ??
        data.cadeau ??
        query.gift ??
        query.cadeau,
    ),
    gift: getString(data.gift ?? data.cadeau ?? query.gift ?? query.cadeau),
    deliveryMethode: getString(
      data.deliveryMethode ??
        data.deliveryMethod ??
        data.methodeLivraison ??
        query.deliveryMethode ??
        query.deliveryMethod ??
        query.methodeLivraison,
    ),
    information: getString(data.information ?? query.information),
  };
};

const escapeHtml = (value: string): string =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

export const sendMail = onRequest(
  {
    cors: ["https://liste-de-naissance-b2b53.web.app"],
    invoker: "public",
    secrets: [smtpPassword, sendMailApiKey],
  },
  async (request, response): Promise<void> => {
    if (request.method === "OPTIONS") {
      response.status(204).send("");
      return;
    }

    if (request.method !== "GET" && request.method !== "POST") {
      response.set("Allow", "GET, POST, OPTIONS");
      response.status(405).json({ error: "Method not allowed" });
      return;
    }

    if (request.header("x-api-key") !== sendMailApiKey.value()) {
      response.status(401).json({ error: "Unauthorized" });
      return;
    }

    const payload = getPayload(request.body, request.query);

    const personName = payload.name;
    const giftName = payload.gift || payload.subject;

    if (!personName || !giftName || !payload.deliveryMethode) {
      response
        .status(400)
        .json({ error: "name, gift and deliveryMethode are required" });
      return;
    }

    const message = `${personName} vous offre le cadeau ${giftName} dans votre liste de naissance par ${payload.deliveryMethode}`;

    const transporter = nodemailer.createTransport({
      host: smtpHost.value(),
      port: smtpPort.value(),
      secure: smtpSecure.value(),
      auth: {
        user: smtpUser.value(),
        pass: smtpPassword.value(),
      },
    });

    try {
      await transporter.sendMail({
        from: smtpFrom.value(),
        to: mailTo.value(),
        subject: `[joazco.com] ${giftName}`,
        text: payload.information
          ? `${message}\n\n${payload.information}`
          : message,
        html: [
          `<p>${escapeHtml(message)}</p>`,
          payload.information
            ? `<p>${escapeHtml(payload.information).replace(/\n/g, "<br>")}</p>`
            : "",
        ].join(""),
      });

      response.status(200).json({ success: true });
    } catch (error) {
      logger.error("Unable to send contact email", error);
      response.status(500).json({ error: "Unable to send email" });
    }
  },
);
