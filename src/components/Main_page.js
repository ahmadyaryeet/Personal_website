import React from 'react';

function MainPage() {
  return (
    <div className="App">
      <div className="main-content">
        <header>
          <h1>Ahmad Saroya</h1>
          <p>Hi im currently an undergraduate Maths and Computer science student at Oxford </p>
        </header>

        <main>
          <section className="projects">
            <h2>Projects</h2>
            <ul>
              <li>Plaribus Poker AI: Recreated the worlds strongest Ai poker bot, capable of beating the worlds strongest players at 6 player poker . I used an amazon EC2 machine with 128 cores and 512GB of RAM, to train and test the AI in real poker games. I used Python to write the code for the Poker AI  .</li>
              <li>Web/App Development: Created a large number of apps, including a AI companionship app, which provided users with an immersive experiance where they could speak to and create any fictional character.Through projects like this I have become very experianced with dealing with ai models from LLM's to image generation. In addition to growing skilled at building larger, more intricate applications.</li>
              <li>Game Development: Ive created and published a variety of games, including  .</li>
            </ul>
          </section>

          <section className="education">
            <h2>Work Experiance</h2>
            <ul>
              <li>GCHQ internship - Trained a Neural network to summarise incoming threats into a few words, and classify them into one of 72 catogories.</li>
            </ul>
          </section>

          <section className="about-me">
            <h2>About Me</h2>
            <p>
              I'm an aspiring stand- up comedian, who enjoys reading books.
            </p>
          </section>
        </main>
      </div>
      <div className="image-placeholder">
        {/* You can add your image here */}
        {/* For example: <img src="your-image-url.jpg" alt="Ahmad Saroya" /> */}
      </div>
    </div>
  );
}

export default MainPage;