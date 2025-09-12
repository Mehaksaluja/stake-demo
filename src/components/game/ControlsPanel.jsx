import React from 'react';
import { BitcoinIcon, StakeCoinIcon } from '../Icons';

const ControlsPanel = ({ betAmount, setBetAmount, selectedSide, setSelectedSide, onBet, isFlipping, balance, multiplier, profit, lastWin }) => {
  return (
    <div className="w-full lg:w-[380px] bg-stake-panel p-4 flex-shrink-0 flex flex-col">
      {/* Balance Display */}
      <div className="bg-stake-black rounded-md p-3 mb-4 border border-stake-border">
        <div className="flex justify-between items-center">
          <span className="text-xs text-stake-text-secondary font-semibold">Balance</span>
          <div className="flex items-center">
            <BitcoinIcon className="w-4 h-4 mr-1 text-yellow-500" />
            <span className="text-stake-text-primary font-bold">{balance.toFixed(8)}</span>
          </div>
        </div>
        {lastWin && (
          <div className="mt-2 text-center">
            <span className="text-green-400 font-bold text-sm">+{lastWin.toFixed(8)} BTC</span>
          </div>
        )}
      </div>

      {/* Manual/Auto Tabs */}
      <div className="flex bg-stake-black rounded-md p-1 mb-4">
        <button className="w-1/2 py-2 text-center rounded-md font-semibold text-stake-text-primary bg-stake-border text-sm">
          Manual
        </button>
        <button className="w-1/2 py-2 text-center rounded-md font-semibold text-stake-text-secondary hover:text-white text-sm transition">
          Auto
        </button>
      </div>

      <div className="flex-grow">
        {/* Bet Amount */}
        <div className="mb-4">
          <label className="text-xs text-stake-text-secondary font-semibold">Bet Amount</label>
          <div className="flex items-center bg-stake-black rounded-md mt-1 border border-stake-border focus-within:border-stake-blue transition-colors">
            <BitcoinIcon className="w-5 h-5 mx-2 text-yellow-500" />
            <input
              type="number"
              step="0.00000001"
              min="0"
              max={balance}
              value={betAmount.toFixed(8)}
              onChange={(e) => setBetAmount(parseFloat(e.target.value) || 0)}
              className="w-full bg-transparent p-2.5 outline-none text-stake-text-primary font-semibold"
            />
            <button onClick={() => setBetAmount(betAmount / 2)} className="px-3 py-1 text-stake-text-secondary hover:text-white text-sm">½</button>
            <button onClick={() => setBetAmount(betAmount * 2)} className="px-3 py-1 text-stake-text-secondary hover:text-white mr-1 text-sm">2×</button>
          </div>
        </div>

        {/* Profit/Multiplier Display */}
        <div className="bg-stake-black rounded-md p-3 mb-4 border border-stake-border">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs text-stake-text-secondary font-semibold">Multiplier</span>
            <span className="text-stake-text-primary font-bold">{multiplier.toFixed(2)}x</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs text-stake-text-secondary font-semibold">Profit on Win</span>
            <div className="flex items-center">
              <BitcoinIcon className="w-4 h-4 mr-1 text-yellow-500" />
              <span className="text-stake-text-primary font-bold">{profit.toFixed(8)}</span>
            </div>
          </div>
        </div>

        {/* Side Selection */}
        <div className="mb-4">
          <label className="text-xs text-stake-text-secondary font-semibold mb-2 block">Choose Side</label>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setSelectedSide('heads')}
              className={`py-4 rounded-lg font-bold flex items-center justify-center transition-all duration-200 border-2 text-sm ${selectedSide === 'heads' ? 'border-stake-heads-orange bg-stake-heads-orange/10 text-white shadow-lg' : 'border-stake-border bg-stake-black hover:bg-stake-border/30 text-stake-text-secondary hover:text-white'}`}
            >
              <div className="flex flex-col items-center">
                <div className="w-6 h-6 rounded-full bg-stake-heads-orange mb-1"></div>
                <span>Heads</span>
              </div>
            </button>
            <button
              onClick={() => setSelectedSide('tails')}
              className={`py-4 rounded-lg font-bold flex items-center justify-center transition-all duration-200 border-2 text-sm ${selectedSide === 'tails' ? 'border-stake-blue bg-stake-blue/10 text-white shadow-lg' : 'border-stake-border bg-stake-black hover:bg-stake-border/30 text-stake-text-secondary hover:text-white'}`}
            >
              <div className="flex flex-col items-center">
                <StakeCoinIcon className="w-6 h-6 text-stake-blue mb-1" />
                <span>Tails</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Bet Button */}
      <button
        onClick={onBet}
        disabled={!selectedSide || isFlipping || betAmount <= 0 || betAmount > balance}
        className="w-full py-4 bg-gradient-to-r from-green-500 to-green-600 text-black font-bold rounded-lg text-lg transition-all duration-200 disabled:bg-stake-text-muted disabled:cursor-not-allowed hover:brightness-110 transform active:scale-95 shadow-lg"
      >
        {isFlipping ? 'Flipping...' : !selectedSide ? 'Select a Side' : betAmount <= 0 ? 'Enter Bet Amount' : betAmount > balance ? 'Insufficient Balance' : 'Place Bet'}
      </button>
    </div>
  );
};

export default ControlsPanel;
