import HeadNext from "next/head";
import Image from "next/image";

const Head = () => {
  return (
    <HeadNext>
      <title>Comic Space Game</title>
      <meta
        name="description"
        content="Dive into the heart of space in Comic Space Game, an interactive comic universe blending visual novel storytelling with real-time combat and mini-games."
      />
      <meta name="keywords" content="" />
      <meta name="author" content="https://joazco.com" />

      <meta property="og:title" content="Joazco" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://joazco.com/" />
      <meta
        property="og:description"
        content="Dive into the heart of space in Comic Space Game, an interactive comic universe blending visual novel storytelling with real-time combat and mini-games."
      />
      <meta name="robots" content="all" />
      <meta name="copyright" content="Copyright © 2021 joazco.com" />

      <meta
        name="viewport"
        content="viewport-fit=cover, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      <meta name="theme-color" content="#31284F" />

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

const DarkBlueDungeon = () => {
  return (
    <>
      <Head></Head>
      <main className="darkbluedungeon-main comic-space-game">
        <div className="darkbluedungeon-container">
          <div>
            <img
              src={
                "https://firebasestorage.googleapis.com/v0/b/joazco-1fd73.appspot.com/o/Comic%20Space%20Game%2FComic%20Space%20Game%20home.png?alt=media&token=c229c3d3-8d51-4bd4-9147-eca8b1b42fc7"
              }
            />
          </div>
          <div>
            <h1>Comic Space Game</h1>
          </div>
          <div>
            <h2>Commitment of confidentiality</h2>
          </div>
          <div>
            <p>
              The data on the Comic Space Game application is not saved. The
              collected information will not be communicated to any recipient.
              If after having contacted our legal department, at the address
              jazoulay@joazco.com, you note that your rights " Informatic and
              Liberties " are not respected, you will be able to address a
              complaint to the National Commission of Data processing and
              Liberties or CNIL, 3 Places de Fontenoy, 75007 Paris. Note: The
              information marked with asterisks is mandatory and must be
              provided. This information is necessary for the provision of
              services or the conclusion of the contract.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default DarkBlueDungeon;
