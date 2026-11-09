'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface StepItem {
  number: string;
  title: string;
  description: string;
  targetId: string;
  badge: string;
}

const STEPS: StepItem[] = [
  {
    number: '01',
    title: 'Discover an Invention',
    description:
      'Explore historic patent models and learn about the groundbreaking industrial challenges they were engineered to solve.',
    targetId: 'collection',
    badge: 'Registry Catalog',
  },
  {
    number: '02',
    title: 'Connect with Its Story',
    description:
      'Understand the visionary inventors, archival workshop breakthroughs, and human perseverances behind each legacy.',
    targetId: 'videos',
    badge: '3-Scene Reels',
  },
  {
    number: '03',
    title: 'Share the Inspiration',
    description:
      'Interact with 3D spatial reconstructions, blueprints, and educational digital twins that keep historical ingenuity alive.',
    targetId: 'gallery3d',
    badge: '3D Spatial Twin',
  },
];

export default function StoryStepsSection() {
  const handleScrollTo = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full bg-surface-container-lowest text-on-surface py-16 sm:py-24 px-4 sm:px-6 md:px-12 border-t border-outline-variant/20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Pre-header */}
        <span className="inline-block font-mono text-[11px] font-bold tracking-[0.25em] text-primary uppercase mb-2">
          MORE THAN AN ARCHIVE
        </span>

        {/* Heading */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-on-surface font-normal tracking-tight mb-3">
          A Story Worth Sharing
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-on-surface-variant font-sans max-w-2xl mx-auto leading-relaxed mb-12 sm:mb-16">
          From historic patent schematics to living digital twins, our archive brings together
          forensic discovery, curatorial storytelling, and 3D spatial technology that celebrates human
          creativity.
        </p>

        {/* 3 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 text-center">
          {STEPS.map((step) => (
            <div
              key={step.number}
              onClick={() => handleScrollTo(step.targetId)}
              className="group relative flex flex-col items-center p-6 sm:p-8 rounded-2xl bg-surface-container-low/70 hover:bg-surface-container border border-outline-variant/30 hover:border-primary/50 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
            >
              {/* Italic Serif Number in Warm Gold */}
              <span className="font-serif italic text-4xl sm:text-5xl text-primary leading-none mb-4 group-hover:scale-105 transition-transform duration-300">
                {step.number}
              </span>

              {/* Step Title */}
              <h3 className="font-serif text-xl sm:text-2xl text-on-surface font-normal tracking-tight mb-2.5 group-hover:text-primary transition-colors">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-xs sm:text-sm text-on-surface-variant font-sans leading-relaxed max-w-xs mb-5">
                {step.description}
              </p>

              {/* Click-to-Jump Link Pill */}
              <div className="mt-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-high text-on-surface-variant group-hover:text-primary group-hover:bg-surface-container-highest border border-outline-variant/30 font-mono text-[11px] font-medium transition-all">
                <span>Explore {step.badge}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
