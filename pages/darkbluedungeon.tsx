import HeadNext from "next/head";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Typewriter } from 'react-simple-typewriter';

const Head = () => {


  
  return (
  <HeadNext>
      <title>Dark Blue Dungeon | Text-Based Turn-Based RPG</title>
      <meta
        name="description"
        content="Dark Blue Dungeon is a thrilling text-based RPG. Embark on a dangerous quest, face combats, solve riddles, and overcome mini-games with strategy and thinking."
      />
      <meta
        name="keywords"
        content="Dark Blue Dungeon, RPG, text-based RPG, turn-based combat, mobile RPG, strategy game, adventure game"
      />
      <meta name="author" content="https://joazco.com" />
      <meta property="og:title" content="Dark Blue Dungeon" />
      <meta property="og:description" content="Dark Blue Dungeon is a thrilling text-based RPG. Embark on a dangerous quest, face combats, solve riddles, and overcome mini-games with strategy and thinking." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://joazco.com/" />
      <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/joazco-1fd73.appspot.com/o/logo.png?alt=media" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#00468b" />
      <link rel="icon" href="https://firebasestorage.googleapis.com/v0/b/joazco-1fd73.appspot.com/o/favicon.ico?alt=media" />
      <link rel="shortcut icon" href="https://firebasestorage.googleapis.com/v0/b/joazco-1fd73.appspot.com/o/favicon.ico?alt=media" />
    </HeadNext>
  );
};

const DarkBlueDungeon = () => {
  const [isTrailerOpen, setTrailerOpen] = useState(false);

  useEffect(() => {
    AOS.init({ once: true });
    AOS.refresh();
    document.body.classList.add("darkbluedungeon-page");
    return () => {
      document.body.classList.remove("darkbluedungeon-page");
    };
  }, []);


  return (
    
    <>
  <Head></Head>
  <main className="darkbluedungeon-main">
  {/* HEADER */}
  <header className="dbd-header">
   <div className="dbd-head">
    <div className="dbd-logo">
      <h1 className="sr-only">Dark Blue Dungeon - Text-based turn-based combat RPG</h1>
      <img data-aos="fade" data-aos-duration="2000" src="https://firebasestorage.googleapis.com/v0/b/joazco-1fd73.appspot.com/o/Dark%20Blue%20Dungeon%2Fheader-logo.png?alt=media&token=10fb4496-b872-4517-a418-83c3ad72eaa5" alt="Dark Blue Dungeon logo" />
    </div>
    <div className="dbd-buttons">
      <a data-aos="fade-right" data-aos-duration="1000" href="#dbd-download" className="dbd-btn dbd-btn-white">Download</a>
   <button
                data-aos="fade-left"
                data-aos-duration="1000"
                onClick={() => setTrailerOpen(true)}
                className="dbd-btn"
              >
                Watch Trailer
              </button>    </div>
    </div>
    <div className="dbd-about">
      <div className="dbd-about-container">
      <div className="dbd-about-mockup">
      <img src="https://firebasestorage.googleapis.com/v0/b/joazco-1fd73.appspot.com/o/Dark%20Blue%20Dungeon%2FAboutgame.png?alt=media&token=a36554fb-42ca-4111-a4bc-4ec5744a09c4" alt="Game Mockup" />
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

  {/* === MODAL TRAILER === */}
        {isTrailerOpen && (
          <div className="modal-overlay" onClick={() => setTrailerOpen(false)}>
            <div
              className="modal-content"
              onClick={(e) => e.stopPropagation()} // empêche de fermer en cliquant dans la vidéo
            >
              <button className="modal-close" onClick={() => setTrailerOpen(false)}>
                ✕
              </button>
              <div className="video-container">
                <iframe
                width="100%"
                height="100%"  
                loading="lazy"
                 src="https://www.youtube.com/embed/pAa7P52w9yk?autoplay=1"
                title="Dark Blue Dungeon Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              </div>
            </div>
          </div>
        )}
  {/* GAMEPLAY FEATURES */}
  <section className="dbd-gameplay">
            <img className="dbd-gameplay-charac human"    data-aos="fade-right"
    data-aos-duration="1000" src="https://firebasestorage.googleapis.com/v0/b/joazco-1fd73.appspot.com/o/Dark%20Blue%20Dungeon%2FCHEVALIER.gif?alt=media&token=45e2265f-ac75-4d86-8d70-33e105874566" alt="Preparation screen" />
        <img className="dbd-gameplay-charac manboar"    data-aos="fade-left"
    data-aos-duration="1000"src="https://firebasestorage.googleapis.com/v0/b/joazco-1fd73.appspot.com/o/Dark%20Blue%20Dungeon%2FORC.gif?alt=media&token=c0605bdf-fb24-4e70-bcd7-f1f14a6aa97a" alt="Preparation screen" />

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
       <a target="_blank" rel="noopener noreferrer"  href="https://apps.apple.com/au/app/dark-blue-dungeon/id1604755796"><img src="https://firebasestorage.googleapis.com/v0/b/joazco-1fd73.appspot.com/o/Dark%20Blue%20Dungeon%2FAPP%20STORE%20button.png?alt=media&token=49e96624-ebdf-4891-95c8-3f67b2fb4512" alt="App Store" /></a>
      <a target="_blank" rel="noopener noreferrer"  href="https://play.google.com/store/apps/details?id=com.joazco.darkbluedonjon&hl=fr"><img src="https://firebasestorage.googleapis.com/v0/b/joazco-1fd73.appspot.com/o/Dark%20Blue%20Dungeon%2FGOOGLE%20PLAY%20button.png?alt=media&token=a85bc237-797a-4535-a3b2-8f28c5d9186f" alt="Google Play" /></a>
    </div>

    
    {/* ALSO AVAILABLE ON STEAM */}
  <div className="dbd-steam">
    <h2>Also available on Steam</h2>
    <div className="steam-mockup">
      <img src="https://firebasestorage.googleapis.com/v0/b/joazco-1fd73.appspot.com/o/Dark%20Blue%20Dungeon%2FScreen.png?alt=media&token=341157ad-6778-4634-875a-29b2ed7d2e04" alt="Steam mockup" />
    </div>
    <div className="steam-btn">
      <a href="https://store.steampowered.com/app/3119460/Dark_Blue_Dungeon/" target="_blank"><img src="https://firebasestorage.googleapis.com/v0/b/joazco-1fd73.appspot.com/o/Dark%20Blue%20Dungeon%2FSTEAM%20button.png?alt=media&token=c8070be8-82c3-4f5e-be29-84e019eaa006" alt="Steam Button" /></a>
    </div>
  </div>
     <img className="dbd-gameplay-charac nebe"    data-aos="fade-left"
    data-aos-duration="1000"src="https://firebasestorage.googleapis.com/v0/b/joazco-1fd73.appspot.com/o/Dark%20Blue%20Dungeon%2FNEBE.gif?alt=media&token=e506d6ed-32ff-4fe8-a0af-0f998e2a7fc5" alt="Preparation screen" />

  {/* PLOT */}
  <div className="dbd-plot">
    <h2>Plot</h2>
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
  <div className="dbd-download" id="dbd-download">
    <h2>Download</h2>
    <div className="dbd-store-links">
            <a target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.joazco.darkbluedonjon&hl=fr"><img src="https://firebasestorage.googleapis.com/v0/b/joazco-1fd73.appspot.com/o/Dark%20Blue%20Dungeon%2FGOOGLE%20PLAY%20button.png?alt=media&token=a85bc237-797a-4535-a3b2-8f28c5d9186f" alt="Google Play" /></a>
            <a target="_blank" rel="noopener noreferrer" href="https://apps.apple.com/au/app/dark-blue-dungeon/id1604755796"><img src="https://firebasestorage.googleapis.com/v0/b/joazco-1fd73.appspot.com/o/Dark%20Blue%20Dungeon%2FAPP%20STORE%20button.png?alt=media&token=49e96624-ebdf-4891-95c8-3f67b2fb4512" alt="App Store" /></a>
            <a target="_blank" rel="noopener noreferrer" href="https://store.steampowered.com/app/3119460/Dark_Blue_Dungeon/"><img src="https://firebasestorage.googleapis.com/v0/b/joazco-1fd73.appspot.com/o/Dark%20Blue%20Dungeon%2FSTEAM%20button.png?alt=media&token=c8070be8-82c3-4f5e-be29-84e019eaa006" alt="Steam" /></a>
    </div>
  </div>

  {/* TERMS */}
  <div className="dbd-terms">
    <p><a href="#confidentiality">Commitment of confidentiality</a></p>
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
      <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/H8b36mdzgn"><img src="https://firebasestorage.googleapis.com/v0/b/joazco-1fd73.appspot.com/o/Dark%20Blue%20Dungeon%2Fdiscord.png?alt=media&token=47ea2ee0-cf97-4f62-9702-b97a4ec9bd47" alt="Discord" /></a>
      <a target="_blank" rel="noopener noreferrer" href="https://x.com/DarkblueDungeon"><img src="https://firebasestorage.googleapis.com/v0/b/joazco-1fd73.appspot.com/o/Dark%20Blue%20Dungeon%2Fx.png?alt=media&token=bb180ab8-196b-4875-bb42-cb0e88f13d83" alt="X" /></a>
      <a target="_blank" rel="noopener noreferrer" href="https://open.spotify.com/intl-fr/artist/3kW59ZhiqZDr482PHNJbAh"><img src="https://firebasestorage.googleapis.com/v0/b/joazco-1fd73.appspot.com/o/Dark%20Blue%20Dungeon%2Fspotify.png?alt=media&token=1d2127b0-e15f-443f-bfb7-69871a480dae" alt="spotify" /></a>
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
