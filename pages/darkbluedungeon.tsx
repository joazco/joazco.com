import HeadNext from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Typewriter } from 'react-simple-typewriter';

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
    </HeadNext>
  );
};

const DarkBlueDungeon = () => {
 useEffect(() => {
    AOS.init({
      once: true, // ne s'active qu'une fois
    });
  }, []);
  return (
    
    <>
      <Head></Head>
    <main className="darkbluedungeon-main">

  {/* HEADER */}
  <header className="dbd-header">
   <div className="dbd-head">
    <div className="dbd-logo">
      <img src="https://firebasestorage.googleapis.com/v0/b/joazco-1fd73.appspot.com/o/Dark%20Blue%20Dungeon%2Fheader-logo.png?alt=media&token=10fb4496-b872-4517-a418-83c3ad72eaa5" alt="Dark Blue Dungeon logo" />
    </div>
    <div className="dbd-buttons">
      <a href="#" className="dbd-btn dbd-btn-white">Download</a>
      <a href="#" className="dbd-btn">Watch Trailer</a>
    </div>
    </div>
    <div className="dbd-about">
      <div className="dbd-about-container">
      <div className="dbd-about-mockup">
      <img src="https://firebasestorage.googleapis.com/v0/b/joazco-1fd73.appspot.com/o/Dark%20Blue%20Dungeon%2Fmockup%20about.png?alt=media&token=6639d806-f3ec-4927-8594-3a456315faa8" alt="Game Mockup" />
     </div>
      <div className="dbd-about-text">
      <h2>About the game</h2>
      <p>
        Dark Blue Dungeon is a text-based turn-based combat RPG. A dangerous quest is waiting for you,
        in which only your choices will allow you to open up a path to the final battle.
        Many ordeals will punctuate your road: combats, riddles, mini-games. Your main asset will be your thinking.
      </p>
      </div>
      </div>
   </div>
  </header>

  {/* ABOUT THE GAME */}


  {/* GAMEPLAY FEATURES */}
  <section className="dbd-gameplay">
            <img className="dbd-gameplay-charac human"    data-aos="fade-right"
    data-aos-duration="1000" src="https://firebasestorage.googleapis.com/v0/b/joazco-1fd73.appspot.com/o/Dark%20Blue%20Dungeon%2Fhuman%20(1)%201.png?alt=media&token=821da498-893c-4830-b940-3957684a9dd1" alt="Preparation screen" />
        <img className="dbd-gameplay-charac manboar"    data-aos="fade-left"
    data-aos-duration="1000"src="https://firebasestorage.googleapis.com/v0/b/joazco-1fd73.appspot.com/o/Dark%20Blue%20Dungeon%2Fmanboar%201.png?alt=media&token=e1074e75-71c5-440a-9db5-dd94dc4d8773" alt="Preparation screen" />

<div className="dbd-gameplay-container">
    <h2>Gameplay Features</h2>
    <div className="dbd-feature-cards">
      <div className="feature">
        <h3>Be prepared</h3>
        <img className="feature-mockup" src="https://firebasestorage.googleapis.com/v0/b/joazco-1fd73.appspot.com/o/Dark%20Blue%20Dungeon%2FBePrepared.png?alt=media&token=59add72d-6bd3-4ba1-9a1f-ae34193d3dd6" alt="Preparation screen" />
      </div>
      <div className="feature">
        <h3>Explore</h3>
        <img className="feature-mockup" src="https://firebasestorage.googleapis.com/v0/b/joazco-1fd73.appspot.com/o/Dark%20Blue%20Dungeon%2FExplore.png?alt=media&token=8c2d4c93-5b07-4bcf-9e9d-6fc8a7a49949" alt="Exploration screen" />
      </div>
      <div className="feature">
        <h3>Fight</h3>
        <img className="feature-mockup" src="https://firebasestorage.googleapis.com/v0/b/joazco-1fd73.appspot.com/o/Dark%20Blue%20Dungeon%2FFight.png?alt=media&token=aebf180b-16b1-4125-9067-3d6271d4f55d" alt="Combat screen" />
      </div>
    </div>
    <div className="dbd-store-links">
       <a href="#"><img src="https://firebasestorage.googleapis.com/v0/b/joazco-1fd73.appspot.com/o/Dark%20Blue%20Dungeon%2FAPP%20STORE%20button.png?alt=media&token=49e96624-ebdf-4891-95c8-3f67b2fb4512" alt="App Store" /></a>
      <a href="#"><img src="https://firebasestorage.googleapis.com/v0/b/joazco-1fd73.appspot.com/o/Dark%20Blue%20Dungeon%2FGOOGLE%20PLAY%20button.png?alt=media&token=a85bc237-797a-4535-a3b2-8f28c5d9186f" alt="Google Play" /></a>
    </div>

    
    {/* ALSO AVAILABLE ON STEAM */}
  <div className="dbd-steam">
    <h2>Also available on Steam</h2>
    <div className="steam-mockup">
      <img src="https://firebasestorage.googleapis.com/v0/b/joazco-1fd73.appspot.com/o/Dark%20Blue%20Dungeon%2FScreen.png?alt=media&token=341157ad-6778-4634-875a-29b2ed7d2e04" alt="Steam mockup" />
    </div>
    <div className="steam-btn">
      <a href="#"><img src="https://firebasestorage.googleapis.com/v0/b/joazco-1fd73.appspot.com/o/Dark%20Blue%20Dungeon%2FSTEAM%20button.png?alt=media&token=c8070be8-82c3-4f5e-be29-84e019eaa006" alt="Steam Button" /></a>
    </div>
  </div>

  {/* PLOT */}
  <div className="dbd-plot">
    <h2>PLOT</h2>
   <p className="dbd-plot-text typing-text">
      <Typewriter
        words={[
          `Two rival kingdoms' fragile peace shatters when legendary amulets are discovered.

The smallest kingdom, seemingly doomed, turns the tide by harnessing the amulets' mysterious power. It triumphs, and its king becomes world ruler — until betrayal leads to his fall.

The amulets vanish. Who stole them? Adventurers embark on a perilous quest: will they meet a futile death or claim ultimate power? An enigmatic figure gives you a mission: defeat the dragon that took his dungeon.`
        ]}
        cursor
        typeSpeed={30}
        cursorStyle="|"
      />
    </p>
  </div>

  {/* DOWNLOAD */}
  <div className="dbd-download">
    <h2>Download</h2>
    <div className="dbd-store-links">
      <img src="https://firebasestorage.googleapis.com/v0/b/joazco-1fd73.appspot.com/o/Dark%20Blue%20Dungeon%2FGOOGLE%20PLAY%20button.png?alt=media&token=a85bc237-797a-4535-a3b2-8f28c5d9186f" alt="Google Play" />
      <img src="https://firebasestorage.googleapis.com/v0/b/joazco-1fd73.appspot.com/o/Dark%20Blue%20Dungeon%2FAPP%20STORE%20button.png?alt=media&token=49e96624-ebdf-4891-95c8-3f67b2fb4512" alt="App Store" />
      <img src="https://firebasestorage.googleapis.com/v0/b/joazco-1fd73.appspot.com/o/Dark%20Blue%20Dungeon%2FSTEAM%20button.png?alt=media&token=c8070be8-82c3-4f5e-be29-84e019eaa006" alt="Steam" />
    </div>
  </div>

  {/* TERMS */}
  <div className="dbd-terms">
    <p>Commitment of confidentiality</p>
    <p>
      The Dark Blue Dungeon application does not itself store or collect any personal data.
      However, the application uses Google AdMob (a third-party advertising service),
      which may collect certain information from your device (such as advertising ID or IP address)
      to display ads. For more information on how AdMob processes data, please consult
      <a href="https://policies.google.com/privacy"> Google’s Privacy Policy</a>.
    </p>
    <p>
      The collected information is not shared with any other recipient by us. If, after contacting our legal
      department at <a href="mailto:contact@joazco.com">contact@joazco.com</a>,
      you believe your rights are not respected, you may lodge a complaint with the CNIL (France).
    </p>
  </div>
  </div>
  </section>

  


  {/* FOOTER */}
  <footer className="dbd-footer">
    <div className="footer-icons">
      <img src="/path/to/icon-facebook.svg" alt="Facebook" />
      <img src="/path/to/icon-twitter.svg" alt="Twitter" />
      <img src="/path/to/icon-instagram.svg" alt="Instagram" />
    </div>
    <div className="footer-copy">
      <p>© Joazco. All rights reserved. 2025</p>
    </div>
  </footer>

</main>

    </>
  );
};

export default DarkBlueDungeon;
