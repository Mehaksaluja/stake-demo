import React from 'react';
import {
  GoogleIcon, FacebookIcon, TwitchIcon, SearchIcon, ChevronDownIcon,
  ChevronLeftIcon, ChevronRightIcon
} from './Icons';

const Lobby = ({ setView }) => {
  return (
    <div className="p-4 md:p-8">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center gap-8 mb-12">
        {/* Left Side: CTA */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl md:text-6xl font-black text-stake-text-primary leading-tight mb-4">
            World's Largest Online
            <br />
            <span className="bg-gradient-to-r from-stake-blue to-stake-heads-orange bg-clip-text text-transparent">
              Casino & Sportsbook
            </span>
          </h1>
          <p className="text-stake-text-secondary text-lg mb-8 leading-relaxed">
            Experience the thrill of professional gaming with instant deposits, 
            lightning-fast withdrawals, and provably fair games.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-stake-blue to-blue-600 hover:brightness-110 transition-all duration-200 font-bold text-white shadow-lg transform hover:scale-105">
              Register Now
            </button>
            <div className="flex items-center gap-2 text-stake-text-muted text-sm">
              <span>Or sign up with</span>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-3">
            <button className="w-12 h-12 bg-stake-panel rounded-lg flex items-center justify-center text-stake-text-secondary hover:bg-stake-border hover:text-white transition-all duration-200 border border-stake-border">
              <GoogleIcon className="w-6 h-6" />
            </button>
            <button className="w-12 h-12 bg-stake-panel rounded-lg flex items-center justify-center text-stake-text-secondary hover:bg-stake-border hover:text-white transition-all duration-200 border border-stake-border">
              <FacebookIcon className="w-6 h-6" />
            </button>
            <button className="w-12 h-12 bg-stake-panel rounded-lg flex items-center justify-center text-stake-text-secondary hover:bg-stake-border hover:text-white transition-all duration-200 border border-stake-border">
              <TwitchIcon className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Right Side: Image Showcase */}
        <div className="w-full lg:w-1/2 h-80 relative mt-12 lg:mt-0">
          {/* Back Image */}
          <div className="absolute inset-0 bg-gradient-to-br from-stake-panel to-stake-black rounded-xl overflow-hidden shadow-professional transform -translate-x-6 -translate-y-6 lg:-translate-x-12 lg:-translate-y-12 border border-stake-border">
            <div className="w-full h-full bg-gradient-to-br from-stake-blue/20 to-stake-heads-orange/20 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">🎰</div>
                <h3 className="text-2xl font-bold mb-2">Casino</h3>
                <span className="text-sm text-stake-text-secondary flex items-center justify-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-stake-green-dot animate-pulse"></div> 
                  35,725 Playing
                </span>
              </div>
            </div>
          </div>
          {/* Front Image */}
          <div className="absolute inset-0 bg-gradient-to-br from-stake-panel to-stake-black rounded-xl overflow-hidden shadow-professional border-2 border-stake-border">
            <div className="w-full h-full bg-gradient-to-br from-stake-heads-orange/20 to-stake-blue/20 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">⚽</div>
                <h3 className="text-2xl font-bold mb-2">Sports</h3>
                <span className="text-sm text-stake-text-secondary flex items-center justify-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-stake-green-dot animate-pulse"></div> 
                  7,031 Playing
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative mb-12">
        <div className="absolute inset-y-0 left-0 flex items-center">
          <button className="flex items-center gap-2 pl-6 pr-4 py-3 text-stake-text-primary font-semibold text-sm bg-stake-black rounded-l-full border border-stake-border border-r-0 hover:bg-stake-border/50 transition-colors">
            Casino <ChevronDownIcon className="w-4 h-4 text-stake-text-muted" />
          </button>
        </div>
        <SearchIcon className="absolute left-40 top-1/2 -translate-y-1/2 w-5 h-5 text-stake-text-muted" />
        <input
          type="text"
          placeholder="Search your game..."
          className="w-full bg-stake-panel border border-stake-border rounded-full py-4 pl-48 pr-6 text-white placeholder-stake-text-muted focus:outline-none focus:ring-2 focus:ring-stake-blue focus:border-stake-blue transition-all duration-200 shadow-professional"
        />
      </div>

      {/* Trending Games */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-white">Trending Games</h2>
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 rounded-full bg-stake-panel hover:bg-stake-border flex items-center justify-center text-stake-text-muted hover:text-white transition-all duration-200 border border-stake-border">
              <ChevronLeftIcon className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 rounded-full bg-stake-panel hover:bg-stake-border flex items-center justify-center text-stake-text-muted hover:text-white transition-all duration-200 border border-stake-border">
              <ChevronRightIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {/* Coin Toss Game Card */}
          <div
            className="bg-stake-panel rounded-xl overflow-hidden cursor-pointer group border border-stake-border hover:border-stake-blue transition-all duration-300 shadow-professional hover:shadow-glow-blue transform hover:scale-105"
            onClick={() => setView('game')}
          >
            <div className="relative">
              <div className="absolute top-3 left-3 w-8 h-8 bg-gradient-to-br from-stake-heads-orange to-orange-600 rounded-lg flex items-center justify-center font-bold text-white text-sm shadow-lg z-10">
                🪙
              </div>
              <div className="w-full h-32 bg-gradient-to-br from-stake-heads-orange/20 to-stake-blue/20 flex items-center justify-center">
                <div className="text-4xl">🪙</div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-white truncate text-sm mb-1">Coin Toss</h3>
              <p className="text-xs text-stake-text-muted mb-2">Stake Originals</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-stake-green-dot animate-pulse"></div>
                  <span className="text-xs text-stake-text-secondary">421 playing</span>
                </div>
                <div className="text-xs text-stake-text-muted">1.98x</div>
              </div>
            </div>
          </div>

          {/* Additional Game Cards */}
          <div className="bg-stake-panel rounded-xl overflow-hidden cursor-pointer group border border-stake-border hover:border-stake-blue transition-all duration-300 shadow-professional hover:shadow-glow-blue transform hover:scale-105">
            <div className="relative">
              <div className="absolute top-3 left-3 w-8 h-8 bg-gradient-to-br from-stake-blue to-blue-600 rounded-lg flex items-center justify-center font-bold text-white text-sm shadow-lg z-10">
                🎲
              </div>
              <div className="w-full h-32 bg-gradient-to-br from-stake-blue/20 to-stake-heads-orange/20 flex items-center justify-center">
                <div className="text-4xl">🎲</div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-white truncate text-sm mb-1">Dice</h3>
              <p className="text-xs text-stake-text-muted mb-2">Stake Originals</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-stake-green-dot animate-pulse"></div>
                  <span className="text-xs text-stake-text-secondary">892 playing</span>
                </div>
                <div className="text-xs text-stake-text-muted">1.99x</div>
              </div>
            </div>
          </div>

          <div className="bg-stake-panel rounded-xl overflow-hidden cursor-pointer group border border-stake-border hover:border-stake-blue transition-all duration-300 shadow-professional hover:shadow-glow-blue transform hover:scale-105">
            <div className="relative">
              <div className="absolute top-3 left-3 w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center font-bold text-white text-sm shadow-lg z-10">
                🎰
              </div>
              <div className="w-full h-32 bg-gradient-to-br from-green-500/20 to-stake-blue/20 flex items-center justify-center">
                <div className="text-4xl">🎰</div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-white truncate text-sm mb-1">Slots</h3>
              <p className="text-xs text-stake-text-muted mb-2">Pragmatic Play</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-stake-green-dot animate-pulse"></div>
                  <span className="text-xs text-stake-text-secondary">1.2k playing</span>
                </div>
                <div className="text-xs text-stake-text-muted">96.5%</div>
              </div>
            </div>
          </div>

          <div className="bg-stake-panel rounded-xl overflow-hidden cursor-pointer group border border-stake-border hover:border-stake-blue transition-all duration-300 shadow-professional hover:shadow-glow-blue transform hover:scale-105">
            <div className="relative">
              <div className="absolute top-3 left-3 w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center font-bold text-white text-sm shadow-lg z-10">
                🃏
              </div>
              <div className="w-full h-32 bg-gradient-to-br from-purple-500/20 to-stake-blue/20 flex items-center justify-center">
                <div className="text-4xl">🃏</div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-white truncate text-sm mb-1">Blackjack</h3>
              <p className="text-xs text-stake-text-muted mb-2">Evolution</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-stake-green-dot animate-pulse"></div>
                  <span className="text-xs text-stake-text-secondary">567 playing</span>
                </div>
                <div className="text-xs text-stake-text-muted">99.2%</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Lobby;

