"use client";

import { useState } from "react";
import { cn } from "@/lib/utils/cn";

export default function Tabs({
  tabs = [],
  defaultTab,
}) {
  const [activeTab, setActiveTab] = useState(
    defaultTab || tabs[0]?.id
  );

  const active = tabs.find(
    (tab) => tab.id === activeTab
  );

  return (
    <div>
      <div
        role="tablist"
        aria-label="Content tabs"
        className="flex gap-1 overflow-x-auto border-b border-zinc-800"
      >
        {tabs.map((tab) => {
          const selected = tab.id === activeTab;

          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`tabpanel-${tab.id}`}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "shrink-0 border-b-2 px-4 py-3 text-sm transition-colors",
                selected
                  ? "border-white text-white"
                  : "border-transparent text-zinc-500 hover:text-zinc-300"
              )}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {active && (
        <div
          id={`tabpanel-${active.id}`}
          role="tabpanel"
          tabIndex={0}
          className="pt-6 outline-none"
        >
          {active.content}
        </div>
      )}
    </div>
  );
}