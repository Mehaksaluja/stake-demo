import React from 'react';

const Header = () => {
  return (
    <header className="h-20 bg-stake-panel text-stake-text-secondary p-4 flex justify-between items-center sticky top-0 z-10 border-b border-stake-border shadow-professional">
      <div className="flex items-center">
        <button className="lg:hidden text-2xl p-2 rounded-lg hover:bg-stake-border/40 transition-colors">
          ☰
        </button>
        <nav className="hidden md:flex items-center bg-stake-black p-1 rounded-lg ml-4 border border-stake-border">
          <a href="#" className="px-6 py-2 rounded-md bg-gradient-to-r from-stake-blue to-blue-600 shadow-lg font-bold text-white text-sm">
            Casino
          </a>
          <a href="#" className="px-6 py-2 rounded-md hover:bg-stake-border/40 transition-colors font-semibold text-sm">
            Sports
          </a>
        </nav>
      </div>
      <div className="flex items-center space-x-3">
        <button className="px-6 py-2 rounded-lg bg-transparent hover:bg-stake-border/40 transition-colors font-bold text-sm border border-stake-border">
          Login
        </button>
        <button className="px-6 py-2 rounded-lg bg-gradient-to-r from-stake-blue to-blue-600 hover:brightness-110 transition-all duration-200 font-bold text-sm text-white shadow-lg transform hover:scale-105">
          Register
        </button>
      </div>
    </header>
  );
};

export default Header;