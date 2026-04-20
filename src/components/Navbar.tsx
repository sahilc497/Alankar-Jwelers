'use client';

import Link from 'next/link';
import { ShoppingBag, Search, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-60 bg-background/80 backdrop-blur-sm border-b border-foreground/10 px-6 md:px-12 py-6">
      <div className="max-w-[1800px] mx-auto flex justify-between items-center">
        <div className="flex-1 hidden md:flex gap-8">
          <Link href="/products?collection=Heritage" className="text-[10px] tracking-[0.3em] uppercase hover:text-accent transition-colors">
            Heritage
          </Link>
          <Link href="/products" className="text-[10px] tracking-[0.3em] uppercase hover:text-accent transition-colors">
            Collections
          </Link>
          <Link href="/products?collection=Silver" className="text-[10px] tracking-[0.3em] uppercase hover:text-accent transition-colors">
            Silver
          </Link>
          <Link href="/products?collection=Sacred" className="text-[10px] tracking-[0.3em] uppercase hover:text-accent transition-colors">
            Sacred
          </Link>
        </div>

        <Link href="/" className="shrink-0">
          <h1 className="text-3xl tracking-[0.2em] font-serif uppercase">
            Alankar Jwelers
          </h1>
        </Link>

        <div className="flex-1 flex justify-end gap-6 items-center">
          <button className="hover:text-accent transition-colors">
            <Search size={18} strokeWidth={1} />
          </button>
          <Link href="/cart" className="hover:text-accent transition-colors relative">
            <ShoppingBag size={18} strokeWidth={1} />
            <span className="absolute -top-1 -right-1 text-[8px] bg-accent text-white px-1 leading-none rounded-full">0</span>
          </Link>
          <button className="md:hidden">
            <Menu size={18} strokeWidth={1} />
          </button>
        </div>
      </div>
    </nav>
  );
}
