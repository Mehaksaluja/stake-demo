import React, { useState, useEffect } from 'react';
import ControlsPanel from './ControlsPanel';
import GameArea from './GameArea';
import HistoryBar from './HistoryBar';

const CoinTossGame = ({ setView }) => {
  const [betAmount, setBetAmount] = useState(0.00000000);
  const [selectedSide, setSelectedSide] = useState(null);
  const [isFlipping, setIsFlipping] = useState(false);
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState(Array(20).fill(null));
  const [balance, setBalance] = useState(1.00000000);
  const [lastWin, setLastWin] = useState(null);
  const [multiplier, setMultiplier] = useState(1.98);
  const [profit, setProfit] = useState(0);

  // Calculate profit based on bet amount and multiplier
  useEffect(() => {
    setProfit(betAmount * multiplier);
  }, [betAmount, multiplier]);

  const handleBet = () => {
    if (!selectedSide || isFlipping || betAmount <= 0 || betAmount > balance) return;
    
    setIsFlipping(true);
    setResult(null);
    setLastWin(null);

    // Deduct bet amount from balance
    setBalance(prev => prev - betAmount);

    // Generate genuine random result
    setTimeout(() => {
      // Use crypto.getRandomValues for better randomness
      const randomArray = new Uint32Array(1);
      crypto.getRandomValues(randomArray);
      const randomValue = randomArray[0] / (0xffffffff + 1);
      const coinFlipResult = randomValue < 0.5 ? 'heads' : 'tails';
      
      setResult(coinFlipResult);
      setHistory(prev => [coinFlipResult, ...prev.slice(0, 19)]);
      
      // Check if player won
      const won = coinFlipResult === selectedSide;
      if (won) {
        const winAmount = betAmount * multiplier;
        setBalance(prev => prev + winAmount);
        setLastWin(winAmount);
      }
      
      setIsFlipping(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-stake-black text-white flex flex-col lg:flex-row">
      <ControlsPanel
        betAmount={betAmount}
        setBetAmount={setBetAmount}
        selectedSide={selectedSide}
        setSelectedSide={setSelectedSide}
        onBet={handleBet}
        isFlipping={isFlipping}
        balance={balance}
        multiplier={multiplier}
        profit={profit}
        lastWin={lastWin}
      />
      <div className="flex-grow flex flex-col p-4">
        <div className="border-b border-stake-border pb-4 mb-4">
          <button onClick={() => setView('lobby')} className="font-semibold text-stake-text-secondary hover:text-white transition">
            &larr; Back to Games
          </button>
        </div>
        <div className="flex-grow flex flex-col justify-between">
          <GameArea isFlipping={isFlipping} result={result} selectedSide={selectedSide} />
          <HistoryBar history={history} />
        </div>
      </div>
    </div>
  );
};

export default CoinTossGame;