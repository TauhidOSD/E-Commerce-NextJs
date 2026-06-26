"use client";

import { useState, useEffect } from "react";
import { Zap } from "lucide-react";
import Link from "next/link";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(targetDate: Date): TimeLeft {
  const now = new Date().getTime();
  const diff = targetDate.getTime() - now;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function FlashSaleBanner() {
  // Target: 7 days from now (simulated sale end)
  const [targetDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 7);
    return d;
  });

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const digits: { label: string; value: number }[] = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Mins", value: timeLeft.minutes },
    { label: "Secs", value: timeLeft.seconds },
  ];

  return (
    <section className="relative overflow-hidden bg-black/60 from-primary via-indigo-500 to-purple-600 py-16 md:py-24">
      {/* Decorative circles */}
      <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/5 blur-2xl" />
      <div className="absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-white/5 blur-2xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2 text-sm font-semibold text-white backdrop-blur-sm">
          <Zap className="h-4 w-4 fill-accent text-accent" />
          Flash Sale — Limited Time Only
        </div>

        <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          UP TO <span className="text-accent">60% OFF</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
          Don&apos;t miss our biggest sale of the season. Premium products at
          unbeatable prices — hurry before it&apos;s gone!
        </p>

        {/* Countdown */}
        <div className="mt-10 flex items-center justify-center gap-3 sm:gap-5">
          {digits.map((d, i) => (
            <div key={d.label} className="flex items-center gap-3 sm:gap-5">
              <div className="flex flex-col items-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-xl bg-white/15 text-2xl font-bold text-white backdrop-blur-sm sm:h-20 sm:w-20 sm:text-3xl">
                  {String(d.value).padStart(2, "0")}
                </span>
                <span className="mt-2 text-xs font-medium uppercase tracking-wider text-white/60">
                  {d.label}
                </span>
              </div>
              {i < digits.length - 1 && (
                <span className="mb-5 text-2xl font-bold text-white/40">:</span>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <Link
          href="/#products"
          className="mt-10 inline-flex items-center gap-2 rounded-lg bg-white px-10 py-4 text-sm font-bold text-primary shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
        >
          <Zap className="h-4 w-4" />
          Grab the Deal
        </Link>
      </div>
    </section>
  );
}
