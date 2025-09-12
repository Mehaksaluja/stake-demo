import React from 'react';
import {
  PromotionsIcon, AffiliateIcon, VipClubIcon, SupportIcon, GlobeIcon
} from './Icons';

const Sidebar = () => {
  const menuItems = [
    { name: 'Promotions', icon: <PromotionsIcon className="w-5 h-5" /> },
    { name: 'Affiliate', icon: <AffiliateIcon className="w-5 h-5" /> },
    { name: 'VIP Club', icon: <VipClubIcon className="w-5 h-5" /> },
    // Add more items here if you need
  ];

  return (
    <aside className="w-60 bg-stake-panel text-stake-text-secondary p-4 flex-col hidden lg:flex h-screen sticky top-0 border-r border-stake-border shadow-professional">
      {/* Logo */}
      <div className="text-3xl font-black text-stake-text-primary mb-10 px-2">
        <span className="bg-gradient-to-r from-stake-blue to-stake-heads-orange bg-clip-text text-transparent">
          STAKE
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex-grow">
        <ul>
          {menuItems.map((item) => (
            <li key={item.name}>
              <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-stake-border/40 hover:text-stake-text-primary transition-all duration-200 group">
                <div className="group-hover:scale-110 transition-transform duration-200">
                  {item.icon}
                </div>
                <span className="font-semibold text-sm">{item.name}</span>
              </a>
            </li>
          ))}

          {/* A divider for sections */}
          <div className="my-6 border-t border-stake-border"></div>

          <li>
            <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-stake-border/40 hover:text-stake-text-primary transition-all duration-200 group">
              <div className="group-hover:scale-110 transition-transform duration-200">
                <SupportIcon className="w-5 h-5" />
              </div>
              <span className="font-semibold text-sm">Live Support</span>
            </a>
          </li>

        </ul>
      </nav>

      {/* Language Selector */}
      <div>
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-stake-border/40 hover:text-stake-text-primary transition-all duration-200 group border border-stake-border">
          <div className="group-hover:scale-110 transition-transform duration-200">
            <GlobeIcon className="w-5 h-5" />
          </div>
          <span className="font-semibold text-sm">Language: English</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;