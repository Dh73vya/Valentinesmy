import { useState } from "react";
import "./App.css";
import familyImg from "./assets/family.jpg";
import usImg from "./assets/us.jpg";

function App() {
  const [giftOpened, setGiftOpened] = useState(false);
const [noPosition, setNoPosition] = useState({ top: "60%", left: "55%" });

  const [noMessage, setNoMessage] = useState("");


  // const moveNoButton = () => {
  //   setNoPosition({
  //     top: `${Math.random() * 70}%`,
  //     left: `${Math.random() * 70}%`,
  //   });
  // };
 const moveNoButton = () => {
  setNoMessage("❤️ Only YES is allowed 😌"); // message shown above No
  setNoPosition({
    top: `${Math.random() * 70 + 10}%`,  // +10% to avoid going too top
    left: `${Math.random() * 70 + 10}%`, // +10% to avoid going off-screen
  });

  setTimeout(() => setNoMessage(""), 2000); // hide message after 2s
};



  return (
    <div className="container">
      {/* Floating Hearts */}
      <div className="hearts">
        {[...Array(15)].map((_, i) => (
          <span
            key={i}
            className="heart"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          >
            ❤️
          </span>
        ))}
      </div>

      {!giftOpened ? (
        <div className="valentine-card">
          <h2>My dear Husband 💖</h2>
          <h1>Will You Be My Valentine? ❤️</h1>

          <div className="buttons">
            <button className="yes-btn" onClick={() => setGiftOpened(true)}>
              Yes 💕
            </button>
          </div>

         <div
  style={{
    position: "relative", // parent must be relative
    width: "100%",
    height: "150px",      // give some space for movement
  }}
>
  <button
    className="no-btn"
    style={{
      position: "absolute",  // MUST be absolute
      top: noPosition.top,
      left: noPosition.left,
      transition: "top 0.3s ease, left 0.3s ease",
    }}
    onMouseEnter={moveNoButton} // moves when mouse hovers
    onClick={moveNoButton}       // moves if clicked
  >
    No 🙈
  </button>

  {noMessage && (
    <span
      style={{
        position: "absolute",
        top: "-25px",
        left: "50%",
        transform: "translateX(-50%)",
        background: "#f8e8eb",
        color: "#b76e79",
        padding: "4px 10px",
        borderRadius: "12px",
        fontSize: "12px",
        fontWeight: "600",
        pointerEvents: "none",
        whiteSpace: "nowrap",
      }}
    >
      {noMessage}
    </span>
  )}
</div>


        </div>
      ) : (
        <div className="gift-section">
          <h1> We Waiting  for You ❤️</h1>

          <div className="photos">
            <div>
              <h3>Our Family</h3>
              <img src={familyImg} alt="Family" />
            </div>

            <div>
              <h3>Our Love</h3>
             <img src={usImg} alt="Us" />
            </div>
          </div>

         <p className="message">
  I miss you so much, Pa. I don’t even know how to express it, but today I felt I had to tell you. <br /><br />
   Maybe I made many mistakes, but they only happened because I was possessive and I love you deeply. Papa loves you so much too — you are her superhero. <br /><br />
   You are our Thanos… strong,protective, and powerful. ❤️  
  I’m truly sorry for everything. I love you more than words can ever say. 💕
</p>

        </div>
      )}


      
    </div>



  );

  
}

export default App;
