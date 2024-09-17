import React from 'react';
import { Link } from 'react-router-dom';

function PlaribusPokerAI() {
  return (
    <div className="project-page">
      <h1>Plaribus Poker AI</h1>
      <a href="https://ai.meta.com/blog/pluribus-first-ai-to-beat-pros-in-6-player-poker/" target="_blank">Meta's initial paper</a>
      
      <p>
      - Pluribus Poker AI is an advanced system built to dominate 6-player poker, consistently beating top human players.<br></br>
      - It’s a major breakthrough in game theory and machine learning, going beyond what AI had achieved in games like chess and Go, as it is a 6 player hidden information game instead of 2.<br></br>
      - I was motivated to recreate Pluribus after reading Meta’s paper on its impressive breakthroughs.<br></br>
      - The first breakthrough: Pluribus doesn't rely on an exact Nash equilibria Algorthim, as that would be computationally unfeasable, instead using new strategies to approach Nash Equilibrium.<br></br>
      - The second breakthrough: Pluribus was incredibly efficient to train, costing less than $150 and running on a 64-core server with under 512 GB of RAM, no GPUs.<br></br>
      - It took Meta only 8 days to train Pluribus, which made it seem possible for someone like me to try building my own version.<br></br>
      - Unfortunately, Meta didn’t release the original code to prevent misuse for online gambling, so I had to find an basic open-source alternative.<br></br>
      - I ended up using an open-source project with basic poker fundamentals, like a poker table and some rough early strategy implementations.<br></br>
      - I needed a powerful server to train the AI, which led me to learn Amazon EC2 and set up a 128-core instance with 512 GB of RAM.<br></br>
      - I wrote the code in Python, As the benefit of writing it in a systems level language like C would have been insignificant.<br></br>
      </p>
      <h2>Abstraction</h2>


      <p>Before I can begin writing the code to train the bot I need to first solve the promblem of Abstraction when it comes to poker hands. In no-limit Texas Hold'em, there are far too many possible decision points to handle individually as doing this would be computationally unfeasable, so Pluribus uses abstraction to simplify the game. It employs two types of abstraction: action and information abstraction. Action abstraction reduces the number of bet sizes the AI considers, grouping similar bets together (like treating bets of $200 and $201 as the same). Information abstraction groups similar hands, such as a 9-high and 10-high straight, into the same category. This drastically reduces complexity, allowing Pluribus to form strategies more efficiently while still responding dynamically to "off-tree" actions from opponents. Now actually implementing this code is a little more difficult.</p>
      
      <p>
        • The script uses Monte Carlo simulation to estimate hand strengths.<br></br>

        • It has separate functions for simulating hands at the river, turn, and flop stages.<br></br>

        • For each stage, it simulates multiple possible outcomes and compares the strength of the hand against randomly drawn opponent hands.<br></br>

        • The script uses clustering to group similar hand strengths together, which helps in reducing the complexity of the calculations.<br></br>

        • It uses parallel processing to speed up the calculations.<br></br>

        • The script uses concepts like Earth Mover's Distance (EMD) to measure the similarity between hand strength distributions.<br></br>

        • The calculations are computationally intensive, so the script uses parallel processing (with the Rayon library).<br></br>

        • Created roughly 50 clusters for each street(flop, turn, river).<br></br>
      </p>
      <p>Once I had created the necessary files for Abstraction it was on to promblem 2, Training.</p>

      <h2>Training</h2>
      <h3>Nash Equilibrium</h3>
      <p> As mentioned earlier it is unfeasable to compute a nash equilibrium for a 6 player game, however it could be approached using self play algorithims and Real time search during the game. </p>

      <h3>Blueprint Stratergy</h3>
      <p>A blueprint strategy in poker AI is a pre-computed, approximate solution to the game that serves as a starting point for real-time decision-making. It's created by solving a simplified version of the game using abstraction techniques, providing a baseline plan that the AI can then adjust during actual gameplay to exploit opponents or adapt to specific situations.</p>

      <h3>Monte Carlo Counter Factual Regret</h3>
      <p>Will finish section soon....</p>

      <h2>Key Features:</h2>
      <ul>
        <li>Capable of beating world's strongest players in 6-player poker</li>
        <li>Trained and tested on an Amazon EC2 machine with 128 cores and 512GB of RAM</li>
        <li>Implemented in Python</li>
        <li>Utilizes advanced game theory and machine learning algorithms</li>
      </ul>
      <h2>Technical Details:</h2>
      <p>
        The AI was developed using a combination of counterfactual regret minimization (CFR) and deep learning techniques. 
        It required extensive computational resources to train and optimize its strategy across the vast game tree of 6-player poker.
      </p>
      <Link to="/">Back to Main Page</Link>
    </div>
  );
}

export default PlaribusPokerAI;