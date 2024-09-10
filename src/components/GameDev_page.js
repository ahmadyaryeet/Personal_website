import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import archer1 from '../images/Archers_ascent/archer1.png';
import archer2 from '../images/Archers_ascent/archer2.jpg';
import silicon1 from '../images/Silicon_soul/Silicon_soul3.png';
import silicon2 from '../images/Silicon_soul/Silicon_soul2.png';
import silicon3 from '../images/Silicon_soul/Silicon_soul.png';

function GameDevelopment() {
  const [currentArcherImageIndex, setCurrentArcherImageIndex] = useState(0);
  const [currentSiliconImageIndex, setCurrentSiliconImageIndex] = useState(0);
  const archerImages = [archer1, archer2];
  const siliconImages = [silicon1, silicon2, silicon3];

  const nextImage = (setIndex, images) => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = (setIndex, images) => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleImageError = (e) => {
    console.error("Error loading image:", e.target.src);
    e.target.src = '../images/Archers_ascent/archer2.jpg'; // Provide a fallback image
  };

  return (
    <div className="project-page game-development">
      <h1>Game Development</h1>
      <p className="intro">
        Game development has been a passionate pursuit of mine, allowing me to combine 
        creativity with technical skills to create engaging interactive experiences. Below are some of my favourite games I've developed.
      </p>

      <section className="games-section">
        <h2 className="section-title">Developed Games</h2>
        
        <div className="game game-with-slideshow">
          <div className="game-content">
            <Link to="/Games/ArchersAscent_page" className="game-title">
              <h3>Archers Ascent (VR) - Click to learn more</h3>
            </Link>
            <p className="game-description">
              Archer's Ascent was one of the first games I published on the meta quest store. It was a zombie survival game where you're an archer and try to see how long you can survive. The biggest takeaway from producing this game was learning how to create large scale projects with multiple components interacting with each other. In addition, it taught me how to adapt very quickly to new software styles as this was the first VR game I built.
            </p>
            <a 
              href="https://www.meta.com/en-gb/experiences/archers-ascent/24124462733835786/"
              target="_blank"
              rel="noopener noreferrer"
              className="game-link"
            >
              View on Meta Quest Store
            </a>
          </div>
          <div className="slideshow">
            <img 
              src={archerImages[currentArcherImageIndex]}
              alt={`Archers Ascent screenshot ${currentArcherImageIndex + 1}`}
              onError={handleImageError}
            />
            <button onClick={() => prevImage(setCurrentArcherImageIndex, archerImages)} className="slideshow-button prev">&lt;</button>
            <button onClick={() => nextImage(setCurrentArcherImageIndex, archerImages)} className="slideshow-button next">&gt;</button>
          </div>
        </div>

        <div className="game game-with-slideshow">
          <div className="game-content">
            <Link to="/Games/Garden_page" className="game-title">
              <h3>Garden of Zen (VR) - Click to learn more</h3>
            </Link>
            <p className="game-description">
              "The next game I wanted to produce, was a incorporation of all my varied skills. From creating an aesthetic atmosphere, to having Ai voice detection and output, Garden of zen was a therapy game where users could talk to a AI therapist whilst playing with some cute dragons. I mastered the skill of using Ai models from whisper, to claude, in addition of learning about memory storage and how to build an app suitable for a large customer base.  "
            </p>
          </div>
          <div className="slideshow">
            <img 
              src={siliconImages[currentSiliconImageIndex]}
              alt={`Garden of Zen screenshot ${currentSiliconImageIndex + 1}`}
              onError={handleImageError}
            />
            <button onClick={() => prevImage(setCurrentSiliconImageIndex, siliconImages)} className="slideshow-button prev">&lt;</button>
            <button onClick={() => nextImage(setCurrentSiliconImageIndex, siliconImages)} className="slideshow-button next">&gt;</button>
          </div>
        </div>

        <div className="game">
          <h3 className="game-title">The Last Ronen - Click to learn more</h3>
          <p className="game-description">
            This was another VR game I made. It was far more technically difficult, as it involved some complex vector maths to get realistic swordplay involved. The key concept I gained from developing this game was "something to do with maybe automated enemies, to efficiency/ object creation"
          </p>
        </div>
      </section>

      <Link to="/" className="back-link">Back to Main Page</Link>
    </div>
  );
}

export default GameDevelopment;