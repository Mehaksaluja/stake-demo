import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Lobby from './components/Lobby';
import CoinTossGame from './components/game/CoinTossGame';

function App() {
  const [view, setView] = useState('lobby');

  if (view === 'game') {
    return <CoinTossGame setView={setView} />;
  }

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-grow">
        <Header />
        <Lobby setView={setView} />
      </main>
    </div>
  );
}

export default App;