import React from 'react';
import { Link } from 'react-router-dom';

function GardenOfZen() {
  return (
    <div className="game-detail-page">
      <h1 className="game-detail-title">Garden of Zen (VR)</h1>
      
      <div className="game-detail-content">
        <p>STILL WRITING ...</p>
        <p>
          Garden of Zen is a unique VR therapy game that combines an aesthetic atmosphere 
          with advanced AI interaction. Users can speak with an AI therapist while engaging 
          with cute dragon characters in a serene virtual environment.
        </p>
        
        <h2>Development Process</h2>
        <p>
          Creating Garden of Zen was an exercise in integrating multiple complex systems. 
          It required implementing AI voice recognition and generation, creating an immersive 
          VR environment, and designing engaging gameplay elements.
        </p>
        
        <h2>Key Takeaways</h2>
        <ul>
          <li>Mastering AI models like Whisper and Claude for voice interaction</li>
          <li>Implementing efficient memory storage for large-scale application use</li>
          <li>Balancing therapeutic elements with engaging gameplay in VR</li>
          <li>Designing systems capable of supporting a large user base</li>
        </ul>
      </div>
      
      <Link to="/game-development" className="back-link">Back to Game Development</Link>
    </div>
  );
}

export default GardenOfZen;