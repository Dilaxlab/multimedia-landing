'use client';

import React from 'react';
import Link from 'next/link';
import { Check } from 'lucide-react';

interface MuseumWayfindingProps {
  step: 1 | 2 | 3;
  themeSlug?: string;
  themeTitle?: string;
}

export default function MuseumWayfinding({
  step,
  themeSlug,
  themeTitle,
}: MuseumWayfindingProps) {
  const helperCopy =
    step === 1
      ? 'Pick a Theme below to view its 5 categories.'
      : step === 2
        ? 'Open any category below to browse its artifacts.'
        : 'Select any artifact below to inspect its story, 3D model, and film.';

  const steps = [
    {
      num: 1,
      label: 'Choose a Theme',
      doneLabel: themeTitle ? themeTitle : 'Theme',
      href: '/#themes',
    },
    {
      num: 2,
      label: 'Choose a Category',
      doneLabel: 'Category',
      href: themeSlug ? `/themes/${themeSlug}#categories` : undefined,
    },
    {
      num: 3,
      label: 'Open an Artifact',
      doneLabel: 'Artifact',
      href: undefined,
    },
  ];

  return (
    <div className="mb-6 sm:mb-8 py-3.5 px-4 sm:px-5 border border-outline-variant/40 dark:border-white/10 bg-surface-container-lowest/80 dark:bg-white/[0.02] flex flex-col lg:flex-row lg:items-center justify-between gap-3">
      {/* Engraved Wayfinding Steps */}
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-mono">
        {steps.map((item, idx) => {
          const isDone = item.num < step;
          const isCurrent = item.num === step;
          const text = isDone ? item.doneLabel : item.label;

          const pill = (
            <span
              className={`inline-flex items-center gap-1.5 transition-colors ${
                isCurrent
                  ? 'text-on-surface dark:text-white font-semibold border-b-2 border-amber-600 dark:border-amber-400 pb-0.5'
                  : isDone
                    ? 'text-amber-700 dark:text-amber-400 hover:underline'
                    : 'text-on-surface-variant/60 dark:text-neutral-500'
              }`}
            >
              <span>{item.num}.</span>
              <span className="truncate max-w-[180px] sm:max-w-[220px]">{text}</span>
              {isDone && <Check className="w-3 h-3 shrink-0" />}
            </span>
          );

          return (
            <React.Fragment key={item.num}>
              {isDone && item.href ? (
                <Link href={item.href}>{pill}</Link>
              ) : (
                pill
              )}
              {idx < steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="hidden sm:inline-block w-6 h-px bg-outline-variant/50 dark:bg-white/15"
                />
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Plain-English Next-Step Cue */}
      <p className="text-xs text-on-surface-variant dark:text-neutral-300 font-sans">
        {helperCopy}
      </p>
    </div>
  );
}
