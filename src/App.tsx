import { useState } from "react";
import "./App.css";
import familyImg from "./assets/family.jpg";
import usImg from "./assets/us.jpg";

function App() {
  const [giftOpened, setGiftOpened] = useState(false);
  const [noPosition, setNoPosition] = useState({ top: "60%", left: "55%" });

  const moveNoButton = () => {
    setNoPosition({
      top: `${Math.random() * 70}%`,
      left: `${Math.random() * 70}%`,
    });
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

          <button
            className="no-btn"
            style={noPosition}
            onMouseEnter={moveNoButton}
            onClick={moveNoButton}
          >
            No 🙈
          </button>
        </div>
      ) : (
        <div className="gift-section">
          <h1>🎁 Surprise for You ❤️</h1>

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

  You are our Thanos… strong, protective, and powerful. ❤️  
  I’m truly sorry for everything. I love you more than words can ever say. 💕
</p>

        </div>
      )}
    </div>
  );
}

export default App;
