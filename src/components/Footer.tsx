'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-24 px-6 md:px-12 mt-24">
      <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-4xl italic mb-8">The *Newsletter*</h2>
          <p className="font-sans text-xs tracking-[0.2em] uppercase opacity-70 mb-8 max-w-sm">
            Join the inner circle for exclusive collection previews and editorial insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md">
            <input
              type="email"
              placeholder="YOUR EMAIL"
              className="grow bg-transparent border-b border-background/30 py-3 font-sans text-sm focus:outline-none focus:border-background placeholder:italic placeholder:font-serif placeholder:text-background/40 transition-colors"
            />
            <button className="px-8 py-3 bg-accent text-background font-sans text-[10px] tracking-[0.3em] uppercase hover:bg-white hover:text-foreground transition-colors duration-500">
              Subscribe
            </button>
          </div>
        </div>

        <div>
          <h3 className="text-[10px] tracking-[0.3em] uppercase mb-8 text-accent font-sans">Legacy</h3>
          <ul className="space-y-4">
            <li><Link href="#" className="font-serif italic text-lg hover:opacity-50 transition-opacity whitespace-pre">Our *Story*</Link></li>
            <li><Link href="#" className="font-serif italic text-lg hover:opacity-50 transition-opacity whitespace-pre">The *Craft*</Link></li>
            <li><Link href="#" className="font-serif italic text-lg hover:opacity-50 transition-opacity whitespace-pre">Heritage</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-[10px] tracking-[0.3em] uppercase mb-8 text-accent font-sans">Contact</h3>
          <ul className="space-y-4">
            <li className="font-serif italic text-lg leading-relaxed opacity-80">
              Shop No2, Subhash Galli,<br />
              near Vastra Collection, Ajara,<br />
              Maharashtra 416505
            </li>
            <li className="font-serif italic text-lg opacity-80">
              M: +91 78219 21512
            </li>
            <li><Link href="https://wa.me/917821921512" target="_blank" className="font-serif italic text-lg hover:opacity-50 transition-opacity">WhatsApp</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1800px] mx-auto mt-24 pt-12 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-8">
        <span className="text-[10px] tracking-[0.3em] font-sans uppercase opacity-50">&copy; 2026 ALANKAR JWELERS</span>
        <div className="flex gap-8">
          <Link href="#" className="text-[10px] tracking-[0.3em] font-sans uppercase opacity-50 hover:opacity-100 transition-opacity">Privacy</Link>
          <Link href="#" className="text-[10px] tracking-[0.3em] font-sans uppercase opacity-50 hover:opacity-100 transition-opacity">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
