'use client';

import React, { useState } from 'react';
import { Mail, Check, Sparkles } from 'lucide-react';

export default function CuratorialDispatchSection() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setIsSubmitted(true);
    }
  };

  return (
    <section className="relative w-full bg-surface-container-low text-on-surface py-12 sm:py-16 px-4 sm:px-6 md:px-12 border-t border-outline-variant/30">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-12">
        {/* Left: Heading & Context */}
        <div className="max-w-xl">
          <span className="block font-mono text-[11px] font-bold tracking-[0.25em] text-primary uppercase mb-2">
            STAY CURIOUS
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-on-surface font-normal tracking-tight leading-tight mb-2">
            Stories of Ingenuity, Delivered.
          </h2>
          <p className="text-xs sm:text-sm text-on-surface-variant font-sans leading-relaxed">
            Discover newly reconstructed patent models, curatorial narratives, and educational 3D
            spatial releases direct to your inbox.
          </p>
        </div>

        {/* Right: Email Input & Action */}
        <div className="w-full lg:w-auto shrink-0">
          {isSubmitted ? (
            <div className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-primary/15 border border-primary/40 text-primary font-mono text-xs shadow-md animate-fadeIn">
              <Check className="w-4 h-4 text-primary" />
              <span>You&apos;re subscribed to the Heritage Dispatch. Welcome aboard!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch gap-2 sm:gap-0 w-full sm:max-w-md">
              <div className="relative flex-1">
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-surface-container-lowest text-sm text-on-surface placeholder:text-on-surface-variant/50 px-4 py-3 sm:py-3.5 rounded-xl sm:rounded-r-none border border-outline-variant/40 sm:border-r-0 focus:outline-none focus:border-primary font-sans transition-colors"
                />
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-neutral-950 font-mono text-xs font-bold uppercase tracking-wider px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl sm:rounded-l-none transition-all cursor-pointer shrink-0 shadow-sm"
              >
                JOIN THE LIST
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
