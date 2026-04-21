'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronLeft, Plus, Minus, MessageCircle } from 'lucide-react';
import Layout from '@/components/Layout';
import Button from '@/components/ui/Button';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';

interface ProductDetailClientProps {
  product: Product;
  relatedProducts: Product[];
}

export default function ProductDetailClient({ product, relatedProducts }: ProductDetailClientProps) {
  const router = useRouter();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <Layout>
        <div className="py-48 text-center font-serif italic text-2xl">
          Piece not found.
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="px-6 md:px-12 py-12 md:py-24">
        <div className="max-w-[1800px] mx-auto">
          {/* Back Button */}
          <button 
            onClick={() => router.back()}
            className="flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase mb-12 hover:text-accent transition-colors group"
          >
            <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Back to Collections
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-start">
            {/* Image Column */}
            <div className="lg:col-span-7 sticky top-24">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="relative aspect-3/4 bg-foreground/5 overflow-hidden group cursor-zoom-in"
              >
                {product.image && (
                  <Image 
                    src={product.image}
                    alt={product.name || 'Product Image'}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover editorial-transition scale-100 group-hover:scale-110"
                  />
                )}
                
                {/* Visual Label */}
                <div className="absolute bottom-8 left-8 vertical-label text-[10px] tracking-[0.4em] uppercase text-white p-4 bg-black/20 backdrop-blur-sm">
                  Hand-Finished Detail
                </div>
              </motion.div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-5 pt-8 md:pt-0">
              <span className="text-[10px] tracking-[0.4em] uppercase text-accent mb-4 block font-sans">
                {product.category}
              </span>
              <h1 className="text-5xl md:text-7xl font-serif italic mb-8 leading-tight">
                {product.name?.split(' ').map((word, i) => 
                  i === (product.name?.split(' ').length || 1) - 1 ? <i key={i} className="not-italic font-normal">*{word}*</i> : word + ' '
                )}
              </h1>
              
              <div className="flex justify-between items-center border-y border-foreground/10 py-6 mb-12">
                <span className="text-2xl font-serif">{product.price}</span>
                <span className="text-[10px] tracking-[0.2em] font-sans uppercase opacity-60">Ships Worldwide &bull; Insured</span>
              </div>

              {/* Editorial Description */}
              <div className="prose prose-zinc max-w-none mb-16">
                <p className="font-serif italic text-xl leading-relaxed text-foreground/80 first-letter:text-6xl first-letter:float-left first-letter:mr-4 first-letter:mt-2 first-letter:font-normal first-letter:font-serif first-letter:text-accent">
                  {product.longDescription || product.description}
                </p>
              </div>

              {/* Piece Details */}
              <div className="mb-16">
                <h3 className="text-[10px] tracking-[0.3em] uppercase mb-6 font-sans text-accent">Specifications</h3>
                <ul className="space-y-4">
                  {Array.isArray(product.details) && product.details.map((detail, i) => {
                    const parts = detail.split(':');
                    return (
                      <li key={i} className={`flex ${parts.length > 1 ? 'justify-between' : 'justify-start'} text-sm font-sans tracking-wide border-b border-foreground/5 pb-2`}>
                        <span className="opacity-60">{parts[0]}</span>
                        {parts.length > 1 && <span className="ml-4">{parts.slice(1).join(':').trim()}</span>}
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Action UI */}
              <div className="space-y-6">
                <div className="flex items-center gap-8 border border-foreground/10 p-2">
                   <div className="flex items-center gap-4 px-4">
                      <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="hover:text-accent transition-colors"><Minus size={14} /></button>
                      <span className="text-xs font-sans w-4 text-center">{quantity}</span>
                      <button onClick={() => setQuantity(quantity + 1)} className="hover:text-accent transition-colors"><Plus size={14} /></button>
                   </div>
                   <Button className="grow" onClick={() => {
                     addToCart(product, quantity);
                     router.push('/cart');
                   }}>
                      Add to Collection
                   </Button>
                </div>
                
                <button className="w-full py-4 border border-accent text-accent flex items-center justify-center gap-3 text-[10px] tracking-[0.3em] uppercase hover:bg-accent hover:text-white transition-all duration-500">
                  <MessageCircle size={16} />
                  Inquire via WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Section Suggestion */}
      <section className="px-6 md:px-12 py-24 border-t border-foreground/10 mt-24">
        <div className="max-w-[1800px] mx-auto">
          <h2 className="text-3xl font-serif italic mb-16">You may also *admire*</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {relatedProducts.slice(0, 4).map(p => (
              <motion.div key={p.id} whileHover={{ y: -10 }} transition={{ duration: 0.5 }}>
                 <div className="border-t border-foreground/10 pt-6">
                    <Link href={`/products/${p.id}`} className="block relative aspect-4/5 overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 mb-4">
                      {p.image && <Image src={p.image} alt={p.name || ''} fill sizes="(max-width: 768px) 100vw, 25vw" className="object-cover" />}
                    </Link>
                    <h3 className="font-serif italic text-lg">{p.name}</h3>
                    <p className="text-[10px] tracking-widest uppercase opacity-60">{p.price}</p>
                 </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
