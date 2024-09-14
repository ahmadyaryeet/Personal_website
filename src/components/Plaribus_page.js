import React from 'react';
import { Link } from 'react-router-dom';

function PlaribusPokerAI() {
  return (
    <div className="project-page">
      <h1>Plaribus Poker AI</h1>
      <p>
        The Plaribus Poker AI is a cutting-edge artificial intelligence system designed to excel at 6-player poker, beating the best human players. 
        It represents a significant achievement in the field of game theory and machine learning.

        Much of my motivation to recreate Pluribus stemmed from reading Meta's breakthrough paper on it, linked <a href="https://ai.meta.com/blog/pluribus-first-ai-to-beat-pros-in-6-player-poker/" target="_blank" rel="noopener noreferrer">here</a>. They managed to make two major breakthroughs: the first being creating an AI capable of playing six-player poker at a superhuman level, a game far more complex than previous AI benchmarks like chess or Go. Traditionally, AI strategies in two-player zero-sum games, like chess, are based on computing a Nash equilibrium, which guarantees that the AI won't lose no matter what the opponent does. However, in a game with more than two players, computing a Nash equilibrium becomes impractical because it's computationally infeasible and inefficient. As a result, Pluribus had to rely on different algorithmic approaches that allowed it to defeat human players without needing to compute exact Nash equilibria. The second breakthrough was achieving this with astonishing efficiency. Unlike previous AI projects, which required massive computational resources costing millions, Pluribus was trained in just eight days using a 64-core server with less than 512 GB of RAM and no GPUs. The entire training cost less than $150. This efficiency made it feasible for someone like me to consider recreating the system myself.      </p>
      
      <p>With Plaribus there are three main problems each of which I will expand on below. Abstraction, Training and Real Time Search</p>

      <p>Once I had gained a strong fundamental understanding of the algorithims used to train Plaribus, I looked online for a viable open source version as I reasoned it would probably be easier to build upon someones work then start from scratch. Alas sadly the initial plaribus team didnt release any of the code they used for their algorithim, due to the fact it could be easily exploited to create hundreds of Poker AI bots causing major promblems for the online betting community. There was very few usuable open source versions available so i ended just picking one with some of the basic fundamentals built, e.g a poker table to play against the bot and some rough attempts to implement the appropriate stratergies.</p>
      <p>The next step was finding the appropriate server instance to run and train this bot. This led me to learn all about Amazon's EC2 services and how to work on a server instead of my local machine. The spefics I required to train my bot was 512 gb of CPU ram, 128 cores. Suprisingly this bot didnt require any GPU's to train. Once I had the appropriate server instance set up I chose to use python to write the code for plaribus, admitedly a systems level language such as C would have been slightly more efficient, though the difference would be insignificant.</p>

      <h2>Abstraction</h2>


      <p>Before I can begin writing the code to train the bot I need to first solve the promblem of Abstraction when it comes to poker hands. In no-limit Texas Hold'em, there are far too many possible decision points to handle individually as doing this would be computationally unfeasable, so Pluribus uses abstraction to simplify the game. It employs two types of abstraction: action and information abstraction. Action abstraction reduces the number of bet sizes the AI considers, grouping similar bets together (like treating bets of $200 and $201 as the same). Information abstraction groups similar hands, such as a 9-high and 10-high straight, into the same category. This drastically reduces complexity, allowing Pluribus to form strategies more efficiently while still responding dynamically to "off-tree" actions from opponents. Now in practice coding this is a little more difficult.</p>
      
      <p>
        • The script uses Monte Carlo simulation to estimate hand strengths.

        • It has separate functions for simulating hands at the river, turn, and flop stages.

        • For each stage, it simulates multiple possible outcomes and compares the strength of the hand against randomly drawn opponent hands.

        • The script uses clustering to group similar hand strengths together, which helps in reducing the complexity of the calculations.

        • It uses parallel processing to speed up the calculations.

        • The script uses concepts like Earth Mover's Distance (EMD) to measure the similarity between hand strength distributions.

        • The calculations are computationally intensive, so the script uses parallel processing (with the Rayon library).

        • It uses progress bars to manage and display the progress of long-running calculations.
      </p>
      <h3>Action Abstraction</h3>
      <p>In implementing action abstraction, I focused on reducing the complexity of betting decisions while maintaining strategic diversity. The core of this approach involves simulating hand strengths for each street (flop, turn, river) and then clustering these results using K-means. K-means is an algorithm that partitions data into K groups, where each data point belongs to the cluster with the nearest mean. By limiting the number of clusters, I effectively grouped similar betting scenarios together, significantly reducing the number of distinct situations the AI needs to consider. For example, on the river, I simulated hand strengths for all possible card combinations, then used K-means to group these into 50 clusters. This process was repeated for the turn and flop, with each street's clusters informing the next. This hierarchical clustering approach allows the AI to make decisions efficiently across all stages of the game, balancing computational feasibility with strategic depth. The use of K-means ensures that the grouped scenarios are truly similar in terms of hand strength, providing a solid foundation for the AI's decision-making process. I used 50 groups for each street(flop, turn, river)</p>
      
      <h3>Information Abstraction</h3>
      <p>For information abstraction, I focused on grouping similar poker hands together to reduce the overall complexity of the game state. This process begins with the creation of a deck and initial card combinations, representing all possible starting hands. For each street (flop, turn, river), I simulated multiple scenarios to estimate the strength of each hand. These strength estimates were then clustered using K-means, grouping hands with similar potential outcomes. For instance, on the flop, I simulated thousands of possible turn and river cards for each hand, then grouped these hands into 50 clusters based on their similar average outcomes. This process was repeated for the turn and river, with each street's abstraction building upon the previous one. By abstracting information in this way, the AI can reason about groups of similar hands rather than individual card combinations, dramatically reducing the complexity of the game tree while preserving important strategic distinctions. This approach allows the AI to make nuanced decisions without the computational burden of considering every possible hand individually.</p>
      <p>I faced many promblems other then implementing the theoretical algorithims, one being as I was working on a smaller time frame, due to budget constraints, even If i let the server run for a week the highest amount of clusters I could create were 50 for each street. Compared to the 200 the team used. In addition I had to find a way to compress the algorithim to using only 8 bits per card compared to the 16 used by the team. As using 16 would have required too much RAM.</p>
      <p>It would have taken me a long time to figure out how exactly to format all these files in the appropriate way to be used by the AI bot during training, however fortunatly the open source version had some basic Abstraction file formats which I could use saving me a lot of time. </p>
      
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