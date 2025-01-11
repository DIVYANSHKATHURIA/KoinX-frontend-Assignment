import * as React from "react";
import { NavigationItem } from "./NavigationItem";
import { navigationItems } from "./NavigationData";

export function Navigation() {
  return (
    <nav className="flex items-center justify-between w-full px-14 py-2 bg-white border-b border-solid border-b-zinc-200 shadow-sm max-md:px-5">
      {/* Logo */}
      <div className="flex items-center">
        <img
          loading="lazy"
          src="../assets/title.svg"
          className="w-24 object-contain"
          alt="Company Logo"
        />
      </div>

      {/* Navigation Items Container */}
      <div className="flex items-center gap-6">
        {navigationItems.map((item) => (
          <NavigationItem
            key={item.id}
            label={<span className="font-bold text-base">{item.label}</span>}
          />
        ))}

        {/* Get Started Button */}
        <button
          className="px-6 py-3 ml-5 text-white font-semibold rounded-lg bg-[linear-gradient(82deg,#2870EA_8.72%,#1B4AEF_85.01%)]"
          type="button"
        >
          Get Started
        </button>
      </div>
    </nav>
  );
}