'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCategory } from '@/context/CategoryContext';
import { Lock, Sparkles, ArrowLeft, Layers, ShieldAlert } from 'lucide-react';
import Link from 'next/link';

interface DisciplineRouteGuardProps {
  children: React.ReactNode;
}

export default function DisciplineRouteGuard({ children }: DisciplineRouteGuardProps) {
  const router = useRouter();
  const { hasSelected, activeCategoryMeta, activeCategory, resetToDisciplines } = useCategory();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // When not selected, redirect back to /#disciplines
  useEffect(() => {
    if (mounted && !hasSelected) {
      // Check if there is a category in search params before redirecting
      const params = new URLSearchParams(window.location.search);
      const catParam = params.get('category');
      if (!catParam) {
        const timer = setTimeout(() => {
          router.replace('/#disciplines');
        }, 1200);
        return () => clearTimeout(timer);
      }
    }
  }, [mounted, hasSelected, router]);

  if (!mounted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="animate-pulse font-mono text-sm text-on-surface-variant flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-primary animate-spin" />
          <span>Verifying Archival Credentials...</span>
        </div>
      </div>
    );
  }

  if (!hasSelected) {
    return (
      <div className="min-h-[75vh] flex items-center justify-center px-4 py-16">
        <div className="max-w-md w-full bg-surface-container-high/90 border border-primary/30 rounded-2xl p-8 text-center shadow-2xl backdrop-blur-md">
          <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary shadow-inner">
            <Lock className="w-8 h-8 animate-pulse" />
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[11px] font-mono mb-3 border border-primary/20">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>CATEGORY SELECTION REQUIRED</span>
          </div>

          <h2 className="font-serif text-2xl text-on-surface font-normal mb-3">
            Archival Collection Locked
          </h2>

          <p className="text-xs text-on-surface-variant font-mono leading-relaxed mb-6">
            To view 3D CAD geometries, documentary reels, and authenticated patent dossiers, you must first select an Archival Category.
          </p>

          <div className="flex flex-col gap-3">
            <button
              onClick={resetToDisciplines}
              className="w-full py-3 px-4 rounded-xl bg-primary text-neutral-950 font-bold text-xs uppercase tracking-wider hover:opacity-95 transition-all shadow-lg shadow-primary/20 cursor-pointer flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Select an Archival Category</span>
            </button>

            <Link
              href="/"
              className="w-full py-2.5 px-4 rounded-xl border border-outline-variant/30 text-on-surface-variant hover:text-on-surface text-xs font-mono transition-colors flex items-center justify-center gap-2"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Return to Archive Homepage</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Sticky top banner showing active category & Change Category button */}
      <div className="w-full bg-surface-container-low/95 backdrop-blur-md border-b border-outline-variant/20 py-2.5 px-4 sm:px-6 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 font-mono">
            <span className="text-primary font-bold">Active Category:</span>
            {activeCategoryMeta && (
              <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/30 text-primary font-bold">
                <span>{activeCategoryMeta.emoji}</span>
                <span>{activeCategoryMeta.label}</span>
                <span className="text-[10px] text-on-surface-variant">({activeCategoryMeta.era})</span>
              </span>
            )}
          </div>

          <button
            onClick={resetToDisciplines}
            className="px-3 py-1 rounded-lg bg-surface-container hover:bg-surface-container-high border border-outline-variant/30 text-[11px] font-mono text-on-surface hover:text-primary transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap"
          >
            <Sparkles className="w-3 h-3 text-primary" />
            <span>Change Category</span>
          </button>
        </div>
      </div>

      {children}
    </>
  );
}
