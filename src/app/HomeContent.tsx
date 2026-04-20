'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { Product } from '@/data/products';

interface HomeContentProps {
  products: Product[];
}

export default function HomeContent({ products }: HomeContentProps) {
  const rings = products.filter(p => p.category === 'Rings').slice(0, 3);
  const necklaces = products.filter(p => p.category === 'Necklaces').slice(0, 3);
  const idols = products.filter(p => p.category === 'Idols').slice(0, 3);
  const menswear = products.filter(p => p.audience === 'Men').slice(0, 3);

  return (
    <Layout>
      {/* Hero Section - Magazine Spread Style */}
      <section className="relative h-screen flex flex-col justify-end px-6 md:px-12 pb-24 overflow-hidden bg-foreground">
        {/* Background Hero Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/products/heritage-hero.png"
            alt="Alankar Heritage hero"
            fill
            priority
            className="object-cover object-center opacity-70 scale-105 transition-transform duration-[10s] hover:scale-100"
          />
          <div className="absolute inset-0 bg-linear-to-t from-foreground via-transparent to-transparent " />
        </div>

        <div className="max-w-[1800px] mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
          >
            <span className="inline-block text-[10px] tracking-[0.6em] uppercase mb-8 font-sans text-white/60">
              The Heritage Archive &bull; 2026
            </span>
            <h1 className="text-7xl md:text-9xl lg:text-[12rem] leading-[0.8] mb-12 text-white overflow-hidden">
              Legacy <br />
              <i className="font-serif italic font-normal text-accent">Defining</i>
            </h1>
            <div className="flex flex-col md:flex-row gap-12 items-start md:items-end">
              <p className="max-w-md text-lg md:text-xl font-serif italic text-white/60 leading-relaxed">
                Celebrating the soul of Maharashtra. Where ancestral craftsmanship meets the gaze of modern luxury.
              </p>
              <div className="flex gap-6">
                <Button className="bg-white text-black hover:bg-accent hover:text-white" onClick={() => window.location.href = '/products?category=Necklaces'}>
                  Explore Necklaces
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Vertical Text */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:block pr-12 z-10">
          <div className="vertical-label text-[10px] tracking-[0.5em] uppercase text-white/30 pb-24 border-r border-white/10">
            Alankar Jwelers &mdash; Since 1994
          </div>
        </div>
      </section>

      {/* Rings Section */}
      <section className="px-6 md:px-12 py-32 bg-white border-t border-foreground/10">
        <div className="max-w-[1800px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div>
              <span className="text-accent text-[10px] tracking-[0.3em] font-sans uppercase mb-4 block">Signature Category</span>
              <h2 className="text-5xl md:text-7xl italic font-serif">Exceptional *Rings*</h2>
            </div>
            <div className="hidden md:block w-px h-24 bg-foreground/20" />
            <p className="max-w-sm font-sans text-xs tracking-widest leading-loose opacity-60">
              SHARP GEOMETRY. SUBTLE ELEGANCE. PIECES DESIGNED FOR THE CONTEMPORARY SILHOUETTE, CRAFTED IN PRECISION-MILLED METALS.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24">
            {rings.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card product={product} />
              </motion.div>
            ))}
          </div>
          
          <div className="mt-24 text-center">
            <Link href="/products?category=Rings" className="text-xs tracking-[0.4em] uppercase border-b border-foreground/20 pb-2 hover:border-accent transition-colors">
              View All Rings
            </Link>
          </div>
        </div>
      </section>

      {/* Necklaces Showcase Section */}
      <section className="px-6 md:px-12 py-32 bg-foreground text-background overflow-hidden relative">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2 }}
            >
              <span className="text-accent text-[10px] tracking-[0.3em] font-sans uppercase mb-4 block">Heirloom Craft</span>
              <h2 className="text-5xl md:text-8xl font-serif italic mb-8 text-white">The Art of <br />the *Necklace*</h2>
              <p className="text-xl font-serif italic text-white/70 mb-12 leading-relaxed max-w-lg">
                Hand-carved stories in gold. Every piece is a testament to a legacy of craftsmanship that has defined royalty for decades.
              </p>
              <div className="grid grid-cols-2 gap-12 border-t border-white/10 pt-12">
                <div>
                  <h4 className="text-accent text-[10px] tracking-[0.3em] font-sans uppercase mb-4">Origin</h4>
                  <p className="text-xs tracking-widest uppercase opacity-60">Maharashtra, IN</p>
                </div>
                <div>
                  <h4 className="text-accent text-[10px] tracking-[0.3em] font-sans uppercase mb-4">Technique</h4>
                  <p className="text-xs tracking-widest uppercase opacity-60">Hand-Stamped / Carved</p>
                </div>
              </div>
              <div className="mt-12">
                 <Link href="/products?category=Necklaces" className="inline-block bg-accent text-foreground px-10 py-5 text-[10px] tracking-[0.4em] uppercase hover:bg-white transition-colors duration-500">
                  Explore The Collection
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5 }}
              className="relative aspect-square md:aspect-3/4 group"
            >
              <Image
                src="/products/kolhapuri-saaj.png"
                alt="Maharashtrian Heritage"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute bottom-12 right-12 text-white/40 text-[8px] tracking-[0.5em] uppercase vertical-label h-48 border-r border-white/20 pb-8">
                Editorial Showcase &bull; Alankar
              </div>
            </motion.div>
          </div>

          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24">
            {necklaces.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="block"
              >
                  <div className="relative aspect-4/5 bg-white/5 mb-8 overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-1000 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                       <Link href={`/products/${product.id}`} className="px-8 py-3 bg-white text-black text-[8px] tracking-[0.4em] uppercase">
                        View Details
                       </Link>
                    </div>
                  </div>
                  <h3 className="text-xl font-serif italic mb-2 text-white border-b border-transparent inline-block hover:border-accent transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-[10px] tracking-[0.2em] font-sans uppercase text-accent">{product.price}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* The Sovereign Man Section */}
      <section className="px-6 md:px-12 py-32 bg-white border-t border-foreground/10 text-foreground">
        <div className="max-w-[1800px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-24 gap-12">
            <div className="max-w-2xl">
              <span className="text-accent text-[10px] tracking-[0.3em] font-sans uppercase mb-4 block">Menswear Category</span>
              <h2 className="text-5xl md:text-8xl font-serif italic mb-6">The Sovereign <br/> *Man*</h2>
              <p className="font-serif italic text-xl text-foreground/70 leading-relaxed">
                Raw architectural details for the modern gentleman. Forged in heavy gold, platinum, and oxidized silver.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-video lg:aspect-21/9 w-full overflow-hidden filter grayscale contrast-125">
                 <Image
                    src="/products/mens-hero-lifestyle.png"
                    alt="The Sovereign Man Lifestyle"
                    fill
                    className="object-cover object-top"
                 />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24">
            {menswear.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="group"
              >
                <div className="relative aspect-3/4 mb-8 overflow-hidden bg-foreground/5">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Link href={`/products?audience=Men`} className="px-8 py-3 bg-white text-black text-[8px] tracking-[0.4em] uppercase">
                      View Collection
                    </Link>
                  </div>
                </div>
                <h3 className="text-2xl font-serif italic mb-2 text-foreground">{product.name}</h3>
                <div className="flex justify-between items-center">
                  <p className="text-[10px] tracking-[0.2em] font-sans uppercase text-foreground/60">{product.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Divine Idols Section (Dark Section) */}
      <section className="px-6 md:px-12 py-32 bg-[#0D0D0D] text-background">
        <div className="max-w-[1800px] mx-auto">
          <div className="text-center mb-32">
            <span className="text-accent text-[10px] tracking-[0.6em] font-sans uppercase mb-8 block">Sacred Gold</span>
            <h2 className="text-6xl md:text-8xl font-serif italic mb-6 text-white text-glow">Divine *Idols*</h2>
            <div className="w-24 h-px bg-accent/40 mx-auto" />
            <p className="mt-12 max-w-xl mx-auto font-serif italic text-xl text-white/50">
              Intricately detailed idols. A bridge between the divine and the physical, crafted for the sacred spaces within your home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24">
            {idols.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <div className="group block text-center">
                  <div className="relative aspect-4/5 bg-white/5 mb-8 overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                       <Link href={`/products/${product.id}`} className="px-8 py-3 bg-white text-black text-[8px] tracking-[0.4em] uppercase">
                        View Details
                       </Link>
                    </div>
                  </div>
                  <h3 className="text-2xl font-serif italic mb-2 text-white border-b border-transparent inline-block group-hover:border-accent transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-[10px] tracking-[0.2em] font-sans uppercase text-accent">{product.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-24 text-center">
            <Link href="/products?category=Idols" className="text-xs tracking-[0.4em] uppercase border-b border-gray-400 pb-2 hover:border-gray-800 text-gray-500 hover:text-white transition-colors">
              View All Idols
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial / Quote Section */}
      <section className="px-6 md:px-12 py-48 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
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
                  M: +91 78219 21512
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
