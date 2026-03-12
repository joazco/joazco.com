import HeadNext from "next/head";
import { useEffect } from "react";
import { useHeader } from "../scripts";
import useScroll from "../scripts/useScroll";

const Head = () => {
  const initHeader = useHeader();
  const initScroll = useScroll();
  const siteUrl = "https://joazco.com/";
  const title = "Joazco | Web, Mobile and Video Game Development";
  const description =
    "Born from Jordan Azoulay's passion and expertise, Joazco brings its skills to life for your web, mobile, and video game projects.";

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
        content="web development, mobile app development, video game development, joazco"
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
      <meta name="copyright" content="Copyright © 2021 joazco.com" />
      <meta
        property="og:image"
        content="https://firebasestorage.googleapis.com/v0/b/joazco-1fd73.appspot.com/o/logo.png?alt=media&token=1f8ac1c5-7a8e-41c6-a624-d3f0fcf01bef"
      />

      <link
        rel="icon"
        href="https://firebasestorage.googleapis.com/v0/b/joazco-1fd73.appspot.com/o/favicon.ico?alt=media&token=3548ef6e-8dd7-47b2-aaf6-5d27d3c242f0"
      />
      <link
        rel="icon"
        href="https://firebasestorage.googleapis.com/v0/b/joazco-1fd73.appspot.com/o/favicon.svg?alt=media&token=8254d33e-4665-45c5-8f5d-1a3fa9eb9675"
        type="image/svg+xml"
      />
      <link
        rel="shortcut icon"
        href="https://firebasestorage.googleapis.com/v0/b/joazco-1fd73.appspot.com/o/favicon.ico?alt=media&token=3548ef6e-8dd7-47b2-aaf6-5d27d3c242f0"
      />
      <link
        rel="shortcut icon"
        href="https://firebasestorage.googleapis.com/v0/b/joazco-1fd73.appspot.com/o/favicon.svg?alt=media&token=8254d33e-4665-45c5-8f5d-1a3fa9eb9675"
        type="image/svg+xml"
      />
      <meta
        name="viewport"
        content="viewport-fit=cover, width=device-width, initial-scale=1"
      />
      <meta name="theme-color" content="#34495e" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Joazco",
            url: siteUrl,
            logo: "https://firebasestorage.googleapis.com/v0/b/joazco-1fd73.appspot.com/o/logo.png?alt=media&token=1f8ac1c5-7a8e-41c6-a624-d3f0fcf01bef",
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
      {/* <script src="https://firebasestorage.googleapis.com/v0/b/joazco-1fd73.appspot.com/o/scripts%2Fcontact.js?alt=media&token=a6b0648d-c1cc-4cb3-b3fc-a372bbd60ad8"></script>
      <script src="https://firebasestorage.googleapis.com/v0/b/joazco-1fd73.appspot.com/o/scripts%2Fheader.js?alt=media&token=fd58509f-5e61-4d7b-8057-787e7ef9b7c9"></script>
      <script src="https://firebasestorage.googleapis.com/v0/b/joazco-1fd73.appspot.com/o/scripts%2Fscroll.js?alt=media&token=472fc365-9bbe-4619-8c4f-ca89e80bbd85"></script> */}
      {/* <script src="https://firebasestorage.googleapis.com/v0/b/joazco-1fd73.appspot.com/o/scripts%2Fscript.js?alt=media&token=3ef84ccf-286a-440a-9850-f00512d65489"></script> */}
      {/* <script>
        $(function (){" "}
        {setTimeout(() => {
          console.log("i'm here");
          SCROLL.init();
          HEADER.init();
          CONTACT.init();
          AOS.init();
        }, 3000)}
        );
      </script> */}
    </HeadNext>
  );
};

export default Head;
