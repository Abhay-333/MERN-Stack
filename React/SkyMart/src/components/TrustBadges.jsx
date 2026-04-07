import React from "react";
import { Zap, ShieldCheck, Tag } from "lucide-react";

// Data array jisse items add/remove karna asaan ho
const badges = [
  {
    id: 1,
    icon: Zap,
    iconColor: "text-[#ccff00]", // Neon Yellow
    title: "Fast Delivery",
    description: "Same-day on select items",
  },
  {
    id: 2,
    icon: ShieldCheck,
    iconColor: "text-blue-400", // Blue
    title: "Secure Payments",
    description: "100% encrypted checkout",
  },
  {
    id: 3,
    icon: Tag,
    iconColor: "text-[#00ff88]", // Green
    title: "Best Prices",
    description: "Price-match guarantee",
  },
];

export default function TrustBadges() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {badges.map((badge) => {
          const IconComponent = badge.icon;
          return (
            <div
              key={badge.id}
              className="bg-[#121212] border border-neutral-800 rounded-2xl p-5 flex items-center gap-5 hover:border-neutral-700 transition-colors"
            >
              <div className="flex-shrink-0">
                <IconComponent size={24} className={badge.iconColor} />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm mb-0.5">
                  {badge.title}
                </h4>
                <p className="text-neutral-500 text-xs">{badge.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
