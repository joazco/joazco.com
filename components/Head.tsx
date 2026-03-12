import HeadNext from "next/head";
import { useEffect } from "react";
import { useHeader } from "../scripts";
import useScroll from "../scripts/useScroll";

const Head = () => {
  const initHeader = useHeader();
  const initScroll = useScroll();
  const siteUrl = "https://joazco.com/";
  const title = "Joazco | Freelance Web, Mobile and Game Developer";
  const description =
    "Joazco helps companies design web products, mobile apps, and game projects. Based in the South of France (PACA).";

  useEffect(() => {
    initHeader();
    initScroll();
  }, []);

  return (
    <HeadNext>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="freelance developer, web development, mobile app development, game development, PACA, Joazco"
      />
      <meta name="author" content="https://joazco.com" />
      <link rel="canonical" href={siteUrl} />

      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="Joazco" />
      <meta property="og:locale" content="en_US" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content="https://firebasestorage.googleapis.com/v0/b/joazco-1fd73.appspot.com/o/logo.png?alt=media&token=1f8ac1c5-7a8e-41c6-a624-d3f0fcf01bef"
      />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <meta name="copyright" content="Copyright © 2026 joazco.com" />
      <meta
        property="og:image"
        content="https://firebasestorage.googleapis.com/v0/b/joazco-1fd73.appspot.com/o/logo.png?alt=media&token=1f8ac1c5-7a8e-41c6-a624-d3f0fcf01bef"
      />

      <link
        rel="icon"
        href="https://firebasestorage.googleapis.com/v0/b/joazco-1fd73.appspot.com/o/favicon.ico?alt=media&token=3548ef6e-8dd7-47b2-aaf6-5d27d3c242f0"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#0b1324" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Joazco",
            url: siteUrl,
            address: {
              "@type": "PostalAddress",
              addressRegion: "PACA",
              addressCountry: "FR",
            },
            sameAs: [
              "https://www.linkedin.com/in/jordan-azoulay/",
              "https://x.com/Joazco",
              "https://www.tiktok.com/@joazco_official",
            ],
          }),
        }}
      />

      <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css"
        integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <script src="https://firebasestorage.googleapis.com/v0/b/joazco-1fd73.appspot.com/o/jquery-3.6.0.min.js?alt=media&token=4300d217-bc88-46f5-a036-0ce7328fab83"></script>
      <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    </HeadNext>
  );
};

export default Head;
