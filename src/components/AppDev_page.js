import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Import your images here
import aiCompanion1 from '../images/talkie/talkie1.png';
import aiCompanion2 from '../images/talkie/talkie4.png';
import aiCompanion3 from '../images/talkie/talkie3.png';
import aiCompanion4 from '../images/talkie/talkie2.png';
import webApp1 from '../images/talkie/talkie2.png';
import webApp2 from '../images/talkie/talkie2.png';
import mobileApp1 from '../images/talkie/talkie2.png';
import mobileApp2 from '../images/talkie/talkie2.png';

function WebAppDevelopment() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      title: "Imagineer AI",
      description: "This innovative app allows users to create and interact with fictional characters using advanced AI models (ChatGPT/Claude). It demonstrates my proficiency in working with Large Language Models (LLMs), implementing image generation AI, creating immersive user experiences, and developing complex, feature-rich applications. With super easy character generation, chat history memory.",
      images: [aiCompanion1, aiCompanion2, aiCompanion3, aiCompanion4],
      link: "./App_pages/imagineer_ai", // Add a link property for the Imagineer AI project
    },
    {
      title: "Floop - Music Player",
      description: "Will finish section soon., Interactive user friendly app that lets you record, listen to and upload music files. Key takeaways became comfortable with using firebase storage.",
      images: [webApp1, webApp2],
    },
    {
      title: "Mobile App Development",
      description: "A cross-platform mobile application that demonstrates my ability to create seamless user experiences on both iOS and Android. This project highlights my skills in mobile UI/UX design and efficient code architecture.",
      images: [mobileApp1, mobileApp2],
    }
  ];

  const allImages = projects.flatMap(project => project.images);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % allImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + allImages.length) % allImages.length);
  };

  return (
    <div className="webapp-project-page">
      <h1 className="webapp-title">Web/App Development</h1>
      <div className="webapp-content">
        <div className="webapp-text-content">
          <p className="webapp-intro">
            My web and app development projects showcase a range of skills and technologies, 
            with a particular focus on AI integration and user experience.
          </p>
    
          <section className="webapp-projects-section">
            <h2 className="webapp-section-title">Featured Projects</h2>
            
            {projects.map((project, index) => (
              <div key={index} className="webapp-project">
                {/* Use Link here to make the title clickable */}
                <h3 className="webapp-project-title">
                  {project.link ? (
                    <Link to={project.link}>{project.title}</Link>
                  ) : (
                    project.title
                  )}
                </h3>
                <p className="webapp-project-description">{project.description}</p>
              </div>
            ))}
          </section>

          <section className="skills-section">
            <h2>Skills Developed:</h2>
            <ul>
              <li>Full-stack web development</li>
              <li>Mobile app development</li>
              <li>AI integration in applications</li>
              <li>User interface and experience design</li>
              <li>Scalable architecture design</li>
            </ul>
          </section>

          <Link to="/" className="back-link">Back to Main Page</Link>
        </div>
        <div className="webapp-image-content">
          <div className="webapp-slideshow">
            <img 
              src={allImages[currentImageIndex]}
              alt={`Project screenshot ${currentImageIndex + 1}`}
              className="webapp-project-image"
            />
            <button onClick={prevImage} className="webapp-slideshow-button prev">&lt;</button>
            <button onClick={nextImage} className="webapp-slideshow-button next">&gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebAppDevelopment;
