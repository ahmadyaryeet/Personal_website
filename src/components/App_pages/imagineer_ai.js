import React from 'react';
import { Link } from 'react-router-dom';

// Import the images for Imagineer AI
import aiCompanion1 from '../../images/talkie/talkie1.png';
import aiCompanion2 from '../../images/talkie/talkie4.png';
import aiCompanion3 from '../../images/talkie/talkie3.png';
import aiCompanion4 from '../../images/talkie/talkie2.png';

function ImagineerAIPage() {
  return (
    <div className="project-page imagineer-ai">
      <h1>Imagineer AI</h1>
      <p>
        Imagineer AI is an innovative app that allows users to create and interact with fictional characters using advanced AI models (ChatGPT/Claude).
        The project demonstrates my expertise in Large Language Models (LLMs), image generation AI, and immersive user experience design.
      </p>

      <p>One of the main features I focused on when developing this app was to make it incredibly easy and simple to use in addition to amking it asthetically pleasing.</p>


      <div className="project-page imagineer-ai">
        <img src={aiCompanion1} alt="Imagineer AI Screenshot 1" />
        <img src={aiCompanion2} alt="Imagineer AI Screenshot 2" />
        <img src={aiCompanion3} alt="Imagineer AI Screenshot 3" />
        <img src={aiCompanion4} alt="Imagineer AI Screenshot 4" />
      </div>
      <Link to="/web-app-development" className="back-link">Back to Web/App Development</Link>
    </div>
  );
}

export default ImagineerAIPage;
