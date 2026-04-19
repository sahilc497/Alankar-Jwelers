'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Trash2, ArrowRight } from 'lucide-react';
import Layout from '@/components/Layout';
import Button from '@/components/ui/Button';
import { products } from '@/data/products';

export default function Cart() {
  const cartItems = products.slice(0, 2); // Mock cart data

  return (
    <Layout>
      <section className="px-6 md:px-12 py-24">
        <div className="max-w-[1800px] mx-auto">
          <header className="mb-24">
            <span className="text-[10px] tracking-[0.4em] uppercase mb-4 block font-sans">Shopping Bag</span>
            <h1 className="text-6xl md:text-8xl font-serif italic mb-8">Selected *Pieces*</h1>
            <div className="w-full h-px bg-foreground/10" />
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-start">
            {/* Cart Items */}
            <div className="lg:col-span-8 space-y-12">
              {cartItems.map((item) => (
                <div key={item.id} className="flex flex-col md:flex-row gap-8 pb-12 border-b border-foreground/5">
                  <div className="relative w-full md:w-48 aspect-3/4 bg-foreground/5 overflow-hidden">
                    <Image 
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 200px"
                      className="object-cover grayscale"
                    />
                  </div>
                  
                  <div className="grow flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-2xl font-serif italic">{item.name}</h3>
                        <span className="text-lg font-sans tracking-tight">{item.price}</span>
                      </div>
                      <p className="text-[10px] tracking-[0.3em] uppercase text-accent mb-6 font-sans">
                        {item.category} &bull; 18k Gold
                      </p>
                      <p className="text-sm font-serif italic text-foreground/60 max-w-md">
                        Each piece is hand-inspected by our master curators before shipment to ensure architectural integrity.
                      </p>
                    </div>
                    
                    <div className="flex justify-between items-center mt-8">
                       <div className="flex items-center gap-6 text-[10px] tracking-[0.2em] font-sans uppercase">
                          <span className="opacity-40">Qty:</span>
                          <span className="border-b border-foreground/20 px-2">01</span>
                       </div>
                       <button className="text-foreground/40 hover:text-foreground transition-colors flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase font-sans">
                         <Trash2 size={12} />
                         Remove
                       </button>
                    </div>
                  </div>
                </div>
              ))}
              
              <Link href="/products" className="inline-flex items-center gap-4 text-[10px] tracking-[0.3em] uppercase font-sans group">
                 <div className="w-12 h-px bg-foreground/20 group-hover:w-24 transition-all duration-500" />
                 Continue Exploring
              </Link>
            </div>

            {/* Summary Column */}
            <div className="lg:col-span-4 bg-foreground/5 p-8 md:p-12">
              <h2 className="text-2xl font-serif italic mb-8 border-b border-foreground/10 pb-4">Acquisition *Summary*</h2>
              
              <div className="space-y-6 mb-12">
                <div className="flex justify-between font-sans text-[10px] tracking-[0.2em] uppercase">
                  <span className="opacity-40">Subtotal</span>
                  <span>₹3,61,250.00</span>
                </div>
                <div className="flex justify-between font-sans text-[10px] tracking-[0.2em] uppercase">
                  <span className="opacity-40">Shipping</span>
                  <span className="text-accent italic">Complimentary</span>
                </div>
                <div className="flex justify-between font-sans text-[10px] tracking-[0.2em] uppercase">
                  <span className="opacity-40">Tax (Est.)</span>
                  <span>₹28,900.00</span>
                </div>
                <div className="pt-6 border-t border-foreground/10 flex justify-between items-baseline">
                  <span className="font-serif text-xl italic">Total</span>
                  <span className="text-2xl font-sans font-medium">₹3,90,150.00</span>
                </div>
              </div>

              <div className="space-y-4">
                <Button className="w-full justify-between flex items-center pr-4">
                   Proceed to Checkout
                   <ArrowRight size={14} />
                </Button>
                <p className="text-[9px] text-center tracking-widest uppercase opacity-40 font-sans leading-loose">
                  Your acquisition is protected by our global security guarantee. <br />
                  All shipments are fully insured.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
