import * as React from "react";

export function NavigationItem({ label, minHeight }) {
  return (
    <div 
      className="gap-1.5 self-stretch my-auto bg-white"
      style={{ minHeight }}
      role="button"
      tabIndex={0}
    >
      {label}
    </div>
  );
}