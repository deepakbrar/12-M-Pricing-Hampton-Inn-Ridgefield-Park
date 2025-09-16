
import React from 'react';

export const CalendarIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18M-4.5 12h22.5" />
  </svg>
);

export const UsersIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-4.684v.005c.178.62.356 1.254.528 1.888a3.494 3.494 0 01-.342 1.95s.345.056.639.124m-11.54-4.28a9.347 9.347 0 011.08-3.64m0 0a9.347 9.347 0 013.64-1.08m-3.64 1.08a9.347 9.347 0 00-1.08 3.64m3.64-1.08a9.347 9.347 0 003.64 1.08m-9.75-3.64a9.347 9.347 0 011.08-3.64M3 12a9.347 9.347 0 013.64-1.08m0 0a9.347 9.347 0 011.08 3.64m-3.64-1.08a9.347 9.347 0 00-1.08 3.64m9.75 3.64a9.347 9.347 0 01-1.08 3.64m0 0a9.347 9.347 0 01-3.64 1.08m3.64-1.08a9.347 9.347 0 001.08-3.64m-3.64 1.08a9.347 9.347 0 00-3.64-1.08" />
  </svg>
);

export const InfoIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
  </svg>
);
