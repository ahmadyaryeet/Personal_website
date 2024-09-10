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
        </p>
        
        <h2>Development Process</h2>
        <p>
          Creating Archer's Ascent taught me valuable lessons about developing large-scale projects 
          with multiple interacting components. As my first VR game, it also challenged me to quickly 
          adapt to new software paradigms specific to virtual reality development.
        </p>
        
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