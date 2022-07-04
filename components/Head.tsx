import HeadNext from "next/head";
import { useEffect } from "react";
import { useHeader } from "../scripts";
import useScroll from "../scripts/useScroll";

const Head = () => {
  const initHeader = useHeader();
  const initScroll = useScroll();

  useEffect(() => {
    initHeader();
    initScroll();
  }, []);

  return (
    <HeadNext>
      <title>Joazco</title>
      <meta
        name="description"
        content="Née de la passion et de l’expertise de Jordan Azoulay, l’entreprise Joazco vous offre ses talents pour concrétiser vos projets de sites web et d’applications mobiles."
      />
      <meta name="keywords" content="" />
      <meta name="author" content="https://joazco.com" />

      <meta property="og:title" content="Joazco" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://joazco.com/" />
      <meta
        property="og:description"
        content="Née de la passion et de l’expertise de Jordan Azoulay, l’entreprise Joazco vous offre ses talents pour concrétiser vos projets de sites web et d’applications mobiles."
      />
      <meta name="robots" content="all" />
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
        content="viewport-fit=cover, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      <meta name="theme-color" content="#34495e" />

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
