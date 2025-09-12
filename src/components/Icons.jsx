import React from 'react';

// Sidebar Icons
export const PromotionsIcon = ({ className }) => (<svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path></svg>);
export const AffiliateIcon = ({ className }) => (<svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>);
export const VipClubIcon = ({ className }) => (<svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.293 2.293a1 1 0 010 1.414L10 12l5.707 5.707a1 1 0 010 1.414L15 21m-4-8v4m-2-2h4m5 3l2.293 2.293a1 1 0 010 1.414L10 12l5.707 5.707a1 1 0 010 1.414L15 21"></path></svg>);
export const SupportIcon = ({ className }) => (<svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>);
export const GlobeIcon = ({ className }) => (<svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h8a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.7 9a9 9 0 1110.4 0M12 21a9 9 0 01-9-9h18a9 9 0 01-9 9z"></path></svg>);

// UI Icons
export const GoogleIcon = ({ className }) => (<svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.28,4.73 12.19,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.19,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.19,22C17.6,22 21.5,18.33 21.5,12.33C21.5,11.76 21.45,11.43 21.35,11.1Z" /></svg>);
export const FacebookIcon = ({ className }) => (<svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 22V14.89H7.9V12.06H10.44V9.85C10.44 7.32 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.89H13.56V22C18.34 21.21 22 17.06 22 12.06C22 6.53 17.5 2.04 12 2.04Z" /></svg>);
export const TwitchIcon = ({ className }) => (<svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M11.57,4.31L7.06,7.85V18.3H9.94V22l2.87-3.7H16L21.43,14V4.31H11.57M20,13.23l-3.14,3.14H13l-2.87,3.74v-3.74H7.81V8.6l3.76-3.54H20v8.17M16.29,9.41h-1.43V13h1.43V9.41m-4.29,0H10.57V13h1.43V9.41Z" /></svg>);
export const SearchIcon = ({ className }) => (<svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>);
export const ChevronDownIcon = ({ className }) => (<svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>);
export const ChevronLeftIcon = ({ className }) => (<svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>);
export const ChevronRightIcon = ({ className }) => (<svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>);

// Game Icons
export const StakeCoinIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="currentColor">
    <defs>
      <linearGradient id="stakeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="currentColor" stopOpacity="0.8"/>
        <stop offset="100%" stopColor="currentColor" stopOpacity="1"/>
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="50" fill="url(#stakeGradient)"/>
    <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.3"/>
    <text x="50" y="58" textAnchor="middle" fontSize="24" fontWeight="bold" fill="currentColor" opacity="0.9">S</text>
  </svg>
);

export const BitcoinIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.93 16.48c.32.25.47.67.32.91s-.51.34-1.03.22c-1.3-.3-2.61-.59-3.92-.87a.84.84 0 0 1-.65-1.04c.1-.36.42-.6.78-.62c1.4-.08 2.8-.16 4.2-.23c.31 0 .6-.07.8-.33c.2-.26.2-.62 0-.88c-1.12-1.4-2.24-2.8-3.36-4.2a.75.75 0 0 1 .86-1.2c1.4.98 2.8 1.96 4.2 2.94c.36.25.75.25 1.11 0c.32-.22.45-.6.31-.95s-.5-.54-1-.54c-1.53 0-3.06 0-4.59 0c-.39 0-.62-.23-.62-.62V3c0-.39.23-.62.62-.62h2.04c.39 0 .62.23.62.62v2.04c0 .39-.23.62-.62.62c-.93 0-1.86 0-2.79 0c-.39 0-.62-.23-.62-.62v7.35c0 .39.23-.62.62-.62c.93 0 1.86 0 2.79 0c.39 0 .62.23.62.62v2.04c0 .39-.23-.62-.62-.62h-2.04c-.39 0-.62-.23-.62-.62V17c0-2.04.01-4.08.01-6.12c0-.4-.23-.63-.63-.63H9.42c-.39 0-.62-.23-.62-.62v8.28c0 .39.23-.62.62-.62h2.46c.4 0 .63-.23.63-.63v-2.46c0-.4.23-.63.63-.63h.82c1.3.28 2.6.57 3.9.86Zm-3.1-1.86v-3.72h1.86c-1.24 1.24-2.48 2.48-3.72 3.72h1.86Z"/>
  </svg>
);