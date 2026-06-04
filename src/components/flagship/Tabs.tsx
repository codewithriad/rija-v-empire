"use client";

import TabButton from "./TabButton";
import type { ServiceTab } from "@/lib/servicesData";

interface TabsProps {
  tabs: ServiceTab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export default function Tabs({ tabs, activeTab, onTabChange }: TabsProps) {
  return (
    <div className="flex justify-center">
      <div
        className="inline-flex items-center gap-1 rounded-2xl border border-white/[0.06] p-1.5 backdrop-blur-xl sm:gap-2 sm:p-2"
        style={{
          background:
            "linear-gradient(135deg, rgba(15,15,25,0.7), rgba(10,10,18,0.85))",
          boxShadow:
            "0 4px 24px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.04)",
        }}
        role="tablist"
        aria-label="Service categories"
      >
        {tabs.map((tab) => (
          <TabButton
            key={tab.id}
            tab={tab}
            isActive={activeTab === tab.id}
            onClick={() => onTabChange(tab.id)}
          />
        ))}
      </div>
    </div>
  );
}
