import HeadNext from "next/head";
import Image from "next/image";

const Head = () => {
  return (
    <HeadNext>
      <title>Dark Blue Dungeon</title>
      <meta
        name="description"
        content="Dark Blue Dungeon is a text-based turn-based combat RPG. A dangerous quest is waiting for you, in which only your choices will allow you to open up a path to the final battle. Many ordeals will punctuate your road : combats, riddles, mini-games. Your main asset will be your thinking."
      />
      <meta name="keywords" content="" />
      <meta name="author" content="https://joazco.com" />

      <meta property="og:title" content="Joazco" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://joazco.com/" />
      <meta
        property="og:description"
        content="Dark Blue Dungeon is a text-based turn-based combat RPG. A dangerous quest is waiting for you, in which only your choices will allow you to open up a path to the final battle. Many ordeals will punctuate your road : combats, riddles, mini-games. Your main asset will be your thinking."
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
      <meta name="theme-color" content="#00468b" />

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
      <main className="darkbluedungeon-main">
        <div className="darkbluedungeon-container">
          <div>
            <img
              src={
                "https://firebasestorage.googleapis.com/v0/b/joazco-1fd73.appspot.com/o/images%2FBANNIERE-TWITTER.png?alt=media&token=e5fd95c2-35b2-4f34-9b47-4a7cc006463f"
              }
            />
          </div>
          <div>
            <h1>Dark Blue Dungeon</h1>
          </div>
          <div>
            <h2>Commitment of confidentiality</h2>
          </div>
          <div>
            <p>
              The data on the DarkBlue Dungeon application is not saved. The
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
