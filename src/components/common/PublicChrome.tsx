'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import MobileBottomNav from './MobileBottomNav';
import Footer from './Footer';

const STANDALONE_PREFIXES = ['/admin', '/login', '/forgot-password'];

export default function PublicChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || '/';
  const isStandalone = STANDALONE_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`)
  );

  if (isStandalone) {
    return (
      <>
        <main className="flex-1 w-full">{children}</main>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="flex-1 w-full">{children}</main>
      <MobileBottomNav />
      <Footer />
    </>
  );
}
