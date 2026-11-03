import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center bg-[#07090E] text-neutral-200">
      <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-serif text-2xl font-bold mb-4 shadow-glow-gold">
        404
      </div>
      <h2 className="font-serif text-3xl font-bold text-white mb-2">
        Archival Asset Not Found
      </h2>
      <p className="font-sans text-sm text-neutral-400 max-w-md mb-6 leading-relaxed">
        The requested invention or patent monograph does not exist in the IAIMS Curatorial Registry.
      </p>
      <Link
        href="/#collection"
        className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 text-neutral-950 font-bold font-mono text-xs shadow-glow-pill hover:shadow-glow-gold transition-all"
      >
        Return to Collection Gallery
      </Link>
    </div>
  );
}
