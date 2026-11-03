import React from 'react';

export default function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md pt-4">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="rounded-xl bg-surface-container-low border border-primary/10 overflow-hidden h-96 animate-pulse p-4 flex flex-col justify-between">
          <div className="h-56 bg-surface-container rounded-lg" />
          <div className="space-y-2 pt-3">
            <div className="h-4 bg-surface-container-high rounded w-3/4" />
            <div className="h-3 bg-surface-container rounded w-1/2" />
          </div>
        </div>
      ))}
    </div>
  );
}
