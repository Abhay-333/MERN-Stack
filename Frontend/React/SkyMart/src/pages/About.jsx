import {
  ArrowRight,
  Zap,
  Package,
  Users,
  Star,
  Truck,
  ShieldCheck,
  Heart,
} from "lucide-react";
import { useNavigate } from "react-router";

export default function About() {
  const navigate = useNavigate();

  // Stat cards ka data
  const stats = [
    { id: 1, icon: Package, value: "20K+", label: "Products" },
    { id: 2, icon: Users, value: "50K+", label: "Happy Customers" },
    { id: 3, icon: Star, value: "4.9", label: "Avg. Rating" },
    { id: 4, icon: Truck, value: "99%", label: "On-time Delivery" },
  ];

  const values = [
    {
      id: 1,
      icon: ShieldCheck,
      title: "Trust",
      description:
        "Every product is verified for quality and authenticity before listing.",
    },
    {
      id: 2,
      icon: Truck,
      title: "Speed",
      description:
        "We obsess over delivery times so your orders arrive when promised.",
    },
    {
      id: 3,
      icon: Heart,
      title: "Community",
      description:
        "Built around real customer feedback, not just business metrics.",
    },
    {
      id: 4,
      icon: Star,
      title: "Quality",
      description:
        "We curate the best — no filler, no junk, just great products.",
    },
  ];
  const team = [
    {
      id: 1,
      name: "Aryan Shah",
      role: "Founder & CEO",
      initial: "A",
      bgColor: "bg-[#ccff00]",
      textColor: "text-black",
    },
    {
      id: 2,
      name: "Priya Mehta",
      role: "Head of Product",
      initial: "P",
      bgColor: "bg-blue-500",
      textColor: "text-white",
    },
    {
      id: 3,
      name: "Rohan Verma",
      role: "Lead Engineer",
      initial: "R",
      bgColor: "bg-purple-500",
      textColor: "text-white",
    },
    {
      id: 4,
      name: "Sneha Kapoor",
      role: "Design Director",
      initial: "S",
      bgColor: "bg-rose-500",
      textColor: "text-white",
    },
  ];
  return (
    <div className="w-full min-h-screen bg-[#0a0a0a] text-white py-20 px-8 flex flex-col items-center justify-center font-sans selection:bg-[#ccff00] selection:text-black">
      {/* Top Logo Icon */}
      <div className="w-16 h-16 bg-[#ccff00] rounded-2xl flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(204,255,0,0.2)]">
        <Zap size={32} className="text-black fill-black" />
      </div>

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center tracking-wide">
        About <span className="text-[#ccff00]">SkyMart</span>
      </h1>

      {/* Subheading */}
      <p className="text-neutral-400 text-center max-w-2xl text-base md:text-lg mb-16 leading-relaxed">
        SkyMart is a next-generation e-commerce platform built to make online
        shopping fast, fair, and enjoyable — for everyone.
      </p>

      {/* Stat Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.id}
              className="bg-transparent border border-neutral-800 rounded-[2rem] p-8 flex flex-col items-center justify-center text-center hover:border-neutral-700 hover:bg-[#121212] transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                <Icon size={28} className="text-[#ccff00]" />
              </div>

              {/* Value */}
              <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">
                {stat.value}
              </h3>

              {/* Label */}
              <p className="text-neutral-500 text-sm font-medium">
                {stat.label}
              </p>
            </div>
          );
        })}
      </div>
      <section className="w-full max-w-5xl mx-auto font-sans text-white">
        {/* Top Section: Our Story Card */}
        <div className="border mt-15 border-neutral-800 rounded-[2rem] p-8 md:p-12 mb-20 bg-[#121212]/50 backdrop-blur-sm">
          <h2 className="text-3xl font-bold mb-6 text-white tracking-wide">
            Our Story
          </h2>
          <div className="space-y-6 text-neutral-400 text-base md:text-lg leading-relaxed">
            <p>
              SkyMart started in 2022 as a small side project — two engineers
              tired of bloated, slow e-commerce experiences. We asked ourselves:
              what if shopping online was actually{" "}
              <em className="text-neutral-300">enjoyable</em>?
            </p>
            <p>
              Three years later, SkyMart serves over 50,000 customers across the
              country. We stock electronics, fashion, jewelry, and everyday
              essentials — all at prices that don't require a second mortgage.
            </p>
            <p>
              We're still the same team at heart: obsessed with speed,
              transparency, and making you feel good about every purchase you
              make here.
            </p>
          </div>
        </div>

        {/* Bottom Section: What We Stand For */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-10 text-center text-white tracking-wide">
            What We Stand For
          </h2>

          {/* 2x2 Grid for Core Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="border border-neutral-800 rounded-3xl p-6 lg:p-8 flex items-start gap-5 hover:border-neutral-700 hover:bg-[#121212] transition-colors duration-300 group"
                >
                  {/* Icon Box with slight neon green tint background */}
                  <div className="w-12 h-12 rounded-xl bg-[#ccff00]/10 flex items-center justify-center text-[#ccff00] flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={24} />
                  </div>

                  {/* Text Content */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="w-full max-w-5xl mx-auto font-sans text-white py-12">
        {/* ---------------- Meet the Team Section ---------------- */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center tracking-wide">
            Meet the Team
          </h2>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member) => (
              <div
                key={member.id}
                className="border border-neutral-800 rounded-3xl p-8 flex flex-col items-center justify-center bg-transparent hover:bg-[#121212] transition-colors duration-300"
              >
                {/* Avatar */}
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold mb-5 ${member.bgColor} ${member.textColor}`}
                >
                  {member.initial}
                </div>

                {/* Name & Role */}
                <h3 className="text-lg font-bold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-neutral-500 text-sm font-medium">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ---------------- Call To Action (CTA) Section ---------------- */}
        <div className="border border-[#ccff00]/10 bg-[#0d0d0d] rounded-[2.5rem] p-12 md:p-16 flex flex-col items-center justify-center text-center shadow-[0_0_50px_rgba(204,255,0,0.03)]">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-wide text-white">
            Ready to shop?
          </h2>

          <p className="text-neutral-400 text-base md:text-lg mb-8 max-w-md">
            Explore thousands of products at unbeatable prices.
          </p>

          <button
            onClick={() => navigate("/dashboard/shop")}
            className="cursor-pointer bg-[#ccff00] hover:bg-[#b3e600] text-black font-semibold text-base px-8 py-4 rounded-xl flex items-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Browse Products <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}
