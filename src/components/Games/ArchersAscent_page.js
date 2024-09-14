import React from 'react';
import { Link } from 'react-router-dom';

function ArchersAscent() {
  return (
    <div className="game-detail-page">
      <h1 className="game-detail-title">Archers Ascent (VR)</h1>
      
      <div className="game-detail-content">
        <p>STILL WRITING ...</p>
        <p>
          Archer's Ascent was one of the first games I published on the Meta Quest store. 
          It's a zombie survival game where you play as an archer trying to survive as long as possible.
          You are given special powerups which you can use as the round progresses in addition to health orbs. The power-ups give the arrows special abilities such as an explosion, lighting and many more.
        </p>
        
        <h2>Development Process</h2>
        <p>
          It is incredibly difficult and time consuming to create objects to use in unity. Therefore I imported most of the objects I needed to use, from a variety of sources. However I did create the more unique objects myself in blender such as the bow, arrow, special effects when the arrow interacts with objects.
          Once I had imported all the relevant objects/elements I thought would be usefull I moved on to world building.
        </p>

        <h3>World Building</h3>
        <p>As there were few viable options online I used a mixture of youtube tutorials and trial and error, to create my own terrain using unity's in built tools. I ended up creating a deserted army base, located on mars, as the setting for my game.</p>
        
        <h3>Scripts</h3>
        I created over 150 + scripts for all the elements to interact with each other correctly, mainly the Player, enemies, round detecter, so forth. In the process I learnt about getting very comfortable with kinematics, unity's physics system, projectile motion involving a large amount of calculus.

        <h2>Key Takeaways</h2>
        <ul>
          <li>Managing complex interactions in a VR environment</li>
          <li>Optimizing performance for VR platforms</li>
          <li>Designing intuitive VR user interfaces</li>
        </ul>
      </div>
      
      <Link to="/game-development" className="back-link">Back to Game Development</Link>
    </div>
  );
}

export default ArchersAscent;