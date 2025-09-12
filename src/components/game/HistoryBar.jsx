import React from 'react';
import { StakeCoinIcon } from '../Icons';

const HistoryBar = ({ history }) => {
  return (
    <div className="bg-stake-panel rounded-lg p-4 border border-stake-border shadow-professional">
      <div className="flex justify-between items-center mb-3">
        <span className="text-sm font-bold text-stake-text-primary uppercase tracking-wide">Recent Results</span>
        <span className="text-xs text-stake-text-muted">{history.filter(h => h).length} games</span>
      </div>
      <div className="flex space-x-2 overflow-x-auto pb-2">
        {history.map((result, i) => (
          <div key={i} className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200 ${!result ? 'bg-stake-black border border-stake-border' : result === 'heads' ? 'bg-stake-heads-orange shadow-glow-orange' : 'bg-stake-black border-2 border-stake-blue shadow-glow-blue'}`}>
            {result === 'heads' && <span className="text-white font-bold text-sm">H</span>}
            {result === 'tails' && <StakeCoinIcon className="w-5 h-5 text-stake-blue" />}
            {!result && <div className="w-3 h-3 rounded-full bg-stake-text-muted"></div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryBar;