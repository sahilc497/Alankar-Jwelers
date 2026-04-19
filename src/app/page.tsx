'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { products } from '@/data/products';

export default function Home() {
  const featuredProducts = products.slice(0, 3);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-12 py-24 overflow-hidden">
        <div className="max-w-[1800px] mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
          >
            <span className="inline-block text-[10px] tracking-[0.4em] uppercase mb-8 font-sans">
              Collection 2026
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl leading-[0.9] mb-12">
              Timeless <br />
              <i className="font-serif italic font-normal text-accent">Elegance</i>
            </h1>
            <p className="max-w-xl text-lg md:text-xl font-serif italic text-foreground/60 mb-12 leading-relaxed">
              &ldquo;Jewelry is the most intimate of arts, a silent dialogue between the body and the earth's deepest secrets.&rdquo;
            </p>
            <div className="flex gap-6">
              <Button onClick={() => window.location.href = '/products'}>
                View High Jewelry
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Decorative Grid Element */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block pr-12">
          <div className="vertical-label text-[10px] tracking-[0.5em] uppercase opacity-30 pb-24 border-r border-foreground/20">
            Architectural Precision &bull; Handcrafted Legacy
          </div>
        </div>
      </section>

      {/* Featured Collection Section (Asymmetric) */}
      <section className="px-6 md:px-12 py-32 border-t border-foreground/10">
        <div className="max-w-[1800px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <h2 className="text-4xl md:text-5xl italic font-serif max-w-md">
              The *Aura* of <br />Permanent Classics
            </h2>
            <div className="hidden md:block w-px h-24 bg-foreground/20" />
            <p className="max-w-sm font-sans text-xs tracking-widest leading-loose opacity-60">
              EXPLORE OUR CURATED SELECTION OF PIECES THAT DEFINE THE MODERN SILHOUETTE, BLENDING SHARP GEOMETRY WITH THE SOFT GLOW OF 18K GOLD.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-7">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="relative aspect-4/5 bg-foreground/5 overflow-hidden"
              >
                <Image
                  src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&q=80&w=1600"
                  alt="Editorial Jewelry"
                  fill
                  sizes="(max-width: 768px) 100vw, 70vw"
                  className="object-cover grayscale-hover editorial-transition"
                />
              </motion.div>
            </div>
            <div className="md:col-span-5 md:pt-24">
              <span className="text-accent text-[10px] tracking-[0.3em] font-sans uppercase mb-4 block">New Arrival</span>
              <h3 className="text-3xl font-serif italic mb-6">The Void *Amulet*</h3>
              <p className="font-serif italic text-lg leading-relaxed text-foreground/70 mb-12">
                A study in negative space. The Void Amulet features a floating sapphire within a precision-milled gold frame, capturing the essence of editorial minimalism.
              </p>
              <Link href="/products/1" className="inline-block border-b border-foreground pb-2 text-xs tracking-widest uppercase hover:text-accent hover:border-accent transition-colors duration-500">
                Discover the Piece
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="px-6 md:px-12 py-32 bg-foreground/5">
        <div className="max-w-[1800px] mx-auto text-center mb-24">
          <h2 className="text-6xl md:text-7xl font-serif italic mb-6">Editorial *Selection*</h2>
          <div className="w-24 h-px bg-foreground/20 mx-auto" />
        </div>

        <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24">
          {featuredProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card product={product} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonial / Quote Section */}
      <section className="px-6 md:px-12 py-48 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <div className="relative mb-16 inline-block">
            <div className="absolute -inset-8 border border-accent/20 animate-pulse" />
            <div className="relative w-24 h-24 overflow-hidden rounded-full mx-auto grayscale group-hover:grayscale-0 transition-all duration-2000">
              <Image
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400"
                alt="Elite Client"
                fill
                sizes="96px"
                className="object-cover"
              />
            </div>
          </div>
          <p className="text-2xl md:text-3xl font-serif italic leading-relaxed mb-12">
            &ldquo;In a world of fast fashion, Alankar Jwelers remains a bastion of architectural integrity. Their pieces don&rsquo;t just decorate; they command.&rdquo;
          </p>
          <div className="font-sans text-[10px] tracking-[0.4em] uppercase text-accent">
            Elena Rossi &mdash; Vogue Italia
          </div>
        </motion.div>
      </section>
      {/* Boutique Location Section */}
      <section className="px-6 md:px-12 py-32 border-t border-foreground/10 bg-white">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-4">
              <span className="text-accent text-[10px] tracking-[0.3em] font-sans uppercase mb-4 block">Visit Us</span>
              <h2 className="text-5xl md:text-6xl font-serif italic mb-8">Boutique *Location*</h2>
              <div className="space-y-6 mb-12">
                <p className="font-serif italic text-xl leading-relaxed text-foreground/80">
                  Shop No2, Subhash Galli,<br />
                  near Vastra Collection, Ajara,<br />
                  Maharashtra 416505
                </p>
                <div className="w-12 h-px bg-accent" />
                <p className="font-sans text-[10px] tracking-[0.2em] uppercase opacity-60">
                  Monday &mdash; Saturday<br />
                  10:00 AM &mdash; 8:00 PM
                </p>
              </div>
              <Button onClick={() => window.open('https://maps.google.com/?q=Alankar+Jewellers+Ajara', '_blank')}>
                Open in Google Maps
              </Button>
            </div>
            <div className="lg:col-span-8">
              <div className="relative aspect-video w-full grayscale border border-foreground/10 overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3830.412456485848!2d74.1983!3d16.1156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc0e1945f6ed10b%3A0xc3f8e5f8f8e8f8e8!2sAlankar%20Jewellers!5e0!3m2!1sen!2sin!4v1713567890123!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="filter grayscale contrast-125"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
