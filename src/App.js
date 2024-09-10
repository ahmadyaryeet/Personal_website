import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/Main_page';
import PlaribusPokerAI from './components/Plaribus_page';
import WebAppDevelopment from './components/AppDev_page';
import GameDevelopment from './components/GameDev_page';
import ArchersAscent from './components/Games/ArchersAscent_page';
import GardenOfZen from './components/Games/Garden_page';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/plaribus-poker-ai" element={<PlaribusPokerAI />} />
        <Route path="/web-app-development" element={<WebAppDevelopment />} />
        <Route path="/game-development" element={<GameDevelopment />} />
        <Route path="/Games/ArchersAscent_page" element={<ArchersAscent />} />
        <Route path="/Games/Garden_page" element={<GardenOfZen />} />
      </Routes>
    </Router>
  );
}

export default App;