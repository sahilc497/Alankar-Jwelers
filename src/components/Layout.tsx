'use client';

import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="relative min-h-screen flex flex-col font-sans selection:bg-accent selection:text-white">
      {/* Editorial Grid Lines */}
      <div className="grid-overlay" />
      
      {/* Noise Texture */}
      <div className="noise-svg" style={{ opacity: 0.03 }}>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      <Navbar />
      
      <main className="grow">
        {children}
      </main>

      <Footer />
    </div>
  );
}
