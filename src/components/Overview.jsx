import React, { useState } from 'react';

// Navigation data
const navigationItems = [
  { id: 1, label: 'Overview', isActive: true },
  { id: 2, label: 'Fundamentals', isActive: false },
  { id: 3, label: 'News Insights', isActive: false },
  { id: 4, label: 'Sentiments', isActive: false },
  { id: 5, label: 'Team', isActive: false },
  { id: 6, label: 'Technicals', isActive: false },
  { id: 7, label: 'Tokenomics', isActive: false },
];

// NavigationItem Component
function NavigationItem({ label, isActive, onClick, id }) {
  return (
    <button
      className={`gap-1.5 self-stretch my-auto whitespace-nowrap min-h-[70px] ${
        isActive ? 'font-semibold text-blue-700 border-blue-600 border-b-[3px] min-h-[48px]' : ''
      }`}
      role="tab"
      aria-selected={isActive}
      aria-controls={`panel-${id}`}
      id={`tab-${id}`}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick();
        }
      }}
    >
      {label}
    </button>
  );
}

// Navigation Component
export default function Navigation() {
  const [activeItems, setActiveItems] = useState(navigationItems);

  const handleItemClick = (clickedId) => {
    setActiveItems(
      activeItems.map((item) => ({
        ...item,
        isActive: item.id === clickedId,
      }))
    );
  };

  return (
    <nav
      className="flex flex-wrap gap-8 items-center mt-5 w-full h-12 text-base font-medium tracking-normal border-b border-solid border-b-slate-300 max-w-[881px] text-zinc-700 max-md:max-w-full"
      role="tablist"
      aria-label="Navigation tabs"
    >
      {activeItems.map((item) => (
        <NavigationItem
          key={item.id}
          id={item.id}
          label={item.label}
          isActive={item.isActive}
          onClick={() => handleItemClick(item.id)}
        />
      ))}
    </nav>
  );
}
