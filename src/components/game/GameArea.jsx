import React from 'react';
import { StakeCoinIcon } from '../Icons';

const InitialCoinDisplay = () => (
  <div className="relative">
    {/* Outer ring with pulse animation */}
    <div className="w-80 h-80 rounded-full border-4 border-stake-heads-orange/30 flex items-center justify-center animate-ring-pulse">
      {/* Inner ring */}
      <div className="w-64 h-64 rounded-full border-4 border-stake-heads-orange flex items-center justify-center bg-stake-panel shadow-2xl">
        <div className="text-center">
          <div className="text-stake-text-muted text-xl font-bold mb-2">Place Your Bet</div>
          <div className="text-stake-text-secondary text-sm">Choose Heads or Tails</div>
        </div>
      </div>
    </div>
    <div className="absolute -top-4 -right-4 w-8 h-8 bg-stake-blue rounded-full flex items-center justify-center">
      <span className="text-white text-xs font-bold">?</span>
    </div>
  </div>
);

const HeadsCoin = ({ won }) => (
  <div className="relative">
    {/* Outer ring */}
    <div className={`w-80 h-80 rounded-full border-4 flex items-center justify-center ${won ? 'border-green-400/50 shadow-green-400/30' : 'border-stake-heads-orange/30'}`}>
      {/* Inner coin */}
      <div className={`w-64 h-64 rounded-full flex items-center justify-center shadow-2xl bg-gradient-to-br from-stake-heads-orange to-orange-600 border-4 ${won ? 'border-green-400 shadow-green-400/50' : 'border-stake-heads-orange'}`}>
        <span className="text-9xl font-black text-white" style={{ textShadow: '4px 4px 8px rgba(0,0,0,0.6)' }}>H</span>
      </div>
    </div>
    {won && (
      <div className="absolute -top-4 -right-4 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
        <span className="text-white text-lg font-bold">✓</span>
      </div>
    )}
  </div>
);

const TailsCoin = ({ won }) => (
  <div className="relative">
    {/* Outer ring */}
    <div className={`w-80 h-80 rounded-full border-4 flex items-center justify-center ${won ? 'border-green-400/50 shadow-green-400/30' : 'border-stake-blue/30'}`}>
      {/* Inner coin */}
      <div className={`w-64 h-64 rounded-full flex items-center justify-center shadow-2xl bg-gradient-to-br from-stake-black to-gray-800 border-4 ${won ? 'border-green-400 shadow-green-400/50' : 'border-stake-blue'}`}>
        <StakeCoinIcon className="w-56 h-56 text-stake-blue" />
      </div>
    </div>
    {won && (
      <div className="absolute -top-4 -right-4 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
        <span className="text-white text-lg font-bold">✓</span>
      </div>
    )}
  </div>
);

const CoinAnimation = ({ selectedSide }) => (
  <div className="relative">
    {/* Outer ring with subtle pulse effect */}
    <div className="w-80 h-80 rounded-full border-4 border-stake-heads-orange/50 flex items-center justify-center animate-ring-pulse shadow-glow-orange">
      {/* Inner coin container */}
      <div className="w-64 h-64 perspective-1000">
        <div className="w-full h-full relative preserve-3d animate-coin-flip">
          {/* Heads side */}
          <div className="absolute w-full h-full backface-hidden rounded-full bg-gradient-to-br from-stake-heads-orange to-orange-600 flex items-center justify-center border-4 border-stake-heads-orange shadow-2xl">
            <span className="text-9xl font-black text-white" style={{ textShadow: '4px 4px 8px rgba(0,0,0,0.6)' }}>H</span>
          </div>
          {/* Tails side */}
          <div className="absolute w-full h-full backface-hidden rounded-full flex items-center justify-center transform-rotate-y-180 bg-gradient-to-br from-stake-black to-gray-800 border-4 border-stake-blue shadow-2xl">
            <StakeCoinIcon className="w-56 h-56 text-stake-blue" />
          </div>
        </div>
      </div>
    </div>
    {/* Pulsing lightning bolt */}
    <div className="absolute -top-4 -right-4 w-8 h-8 bg-stake-blue rounded-full flex items-center justify-center animate-pulse">
      <span className="text-white text-xs font-bold">⚡</span>
    </div>
    {/* Additional sparkles */}
    <div className="absolute top-2 left-2 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
    <div className="absolute bottom-2 right-2 w-3 h-3 bg-stake-heads-orange rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
    <div className="absolute top-1/2 left-2 w-2 h-2 bg-stake-blue rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
  </div>
);

const GameArea = ({ isFlipping, result, selectedSide }) => {
  const won = result === selectedSide;
  
  return (
    <div className="flex-grow p-4 flex flex-col items-center justify-center">
      <div className="relative">
        {isFlipping ? (
          <CoinAnimation selectedSide={selectedSide} />
        ) : result === 'heads' ? (
          <HeadsCoin won={won} />
        ) : result === 'tails' ? (
          <TailsCoin won={won} />
        ) : (
          <InitialCoinDisplay />
        )}
        
        {/* Result indicator */}
        {result && !isFlipping && (
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
            <div className={`px-4 py-2 rounded-full text-sm font-bold ${won ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
              {won ? 'WIN!' : 'LOSE'}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameArea;