import React from 'react';
import { Link } from 'react-router-dom';
import ahmadImage from '../images/ahmad_final.jpg';

function MainPage() {
  return (
    <div className="App">
      <div className="main-content">
        <header>
          <h1>Ahmad Saroya</h1>
          <p>Hi im currently an undergraduate Maths student at Oxford </p>
        </header>

        <main>
          
          <section className="education">
            <h2>Work Experience</h2>
            <ul>
              <li>GCHQ internship - Did a 4- week internship where I trained a Neural network to summarise incoming threats into a few words, and classify them into one of 72 catogories. During the internship I was introduced to a variety of new concepts, such as Jaccard Distance, MLP's and Word embeddings to name a few.</li>
              <li>J.P. Morgan Insight week - I worked as a summer Intern in the Asset Management Line of Business at JPM, where I gained a insight into the how asset managment actually works.</li>
              <li>UKMT Summer School - Due to my high performance in the UKMT maths challenge, I was invited to the British Mathematics Olympiad and UKMT National Math Summer School. During the 2- week long summer school, I received curated classes from some incredible mathematicians in a variety of interesting math topics, from the 4-colour theorem to the pigeon-hole principle.</li>
            </ul>
          </section>

          <section className="projects">
            <h2>Projects</h2>
            <ul>
              <li><Link to="/plaribus-poker-ai"><strong>Plaribus Poker AI</strong></Link>: Recreated Meta's strongest Ai poker bot, capable of beating the worlds best players at 6 player poker . I used an amazon EC2 machine with 128 cores and 512GB of RAM, to train and test the AI in real poker games. I used Python to write the code for the Poker AI  .</li>
              <li><Link to="/web-app-development"><strong>Web/App Development</strong></Link>: Created a large number of apps, including a AI character app, which provided users with an immersive experiance where they could speak to and create any fictional character.Through projects like this I have become very experianced with dealing with ai models from LLM's to image generation. In addition to growing skilled at building larger, more intricate applications.</li>
              <li><Link to="/game-development"><strong>Game Development</strong></Link>: I have many years of experiance in game development, where I have published and developed a large variety of games.Ive created From large scale open-world survival games, to cozy,aesthetic, experiance based games. </li>
            </ul>
          </section>

        

          <section className="notable-achievements">
            <h2>Notable Achievements</h2>
            <ul>
              <li><strong>Math Competitions Champion</strong>: Placed in the top 0.0014% in the UKMT Senior Maths Challenge, invited to British Mathematics Olympiad and UKMT National Math Summer School.</li>
              <li><strong>National Charity Ambassador</strong>: Helped create a local charity for disadvantaged students, later partnering with the Social Mobility Foundation as an ambassador.</li>
            </ul>
          </section>

          <section className="about-me">
            <h2>About Me</h2>
            <p>
                I'm an aspiring stand-up comedian, who enjoys reading books.
                <a href="https://www.goodreads.com/user/show/105851678-ahmad-saroya">Here's My Library</a>
            </p>

            <p className="email-container">
              Email: <a href="mailto:saroyaahmad@gmail.com" className="email-link">saroyaahmad@gmail.com</a>
            </p>

          </section>
        </main>
      </div>
      <div className="image-placeholder" style={{marginLeft: '80px' }}>
        <img src={ahmadImage} alt="Ahmad Saroya" className="profile-image" />
      </div>
    </div>
  );
}

export default MainPage;