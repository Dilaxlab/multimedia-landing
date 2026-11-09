import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center bg-surface dark:bg-[#07090E] text-on-surface dark:text-neutral-200 transition-colors">
      <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary font-serif text-2xl font-bold mb-4 shadow-md">
        404
      </div>
      <h2 className="font-serif text-3xl font-bold text-on-surface dark:text-white mb-2">
        Archival Asset Not Found
      </h2>
      <p className="font-sans text-sm text-on-surface-variant dark:text-neutral-400 max-w-md mb-6 leading-relaxed">
        The requested invention or patent monograph does not exist in the IAIMS Curatorial Registry.
      </p>
      <Link
        href="/#collection"
        className="px-6 py-2.5 rounded-xl bg-primary text-neutral-950 font-bold font-mono text-xs shadow-md hover:bg-primary/90 transition-all"
      >
        Return to Collection Gallery
      </Link>
    </div>
  );
}
