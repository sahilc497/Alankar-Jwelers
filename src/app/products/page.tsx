'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '@/components/Layout';
import Card from '@/components/ui/Card';
import { products, Product } from '@/data/products';

const categories = ['All', 'Necklaces', 'Rings', 'Earrings', 'Bracelets'];

export default function ProductListing() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <Layout>
      <section className="px-6 md:px-12 py-24">
        <div className="max-w-[1800px] mx-auto">
          {/* Header */}
          <header className="mb-24 flex flex-col md:flex-row justify-between items-end gap-12">
            <div className="max-w-2xl">
              <span className="text-[10px] tracking-[0.4em] uppercase mb-4 block font-sans">The Repository</span>
              <h1 className="text-6xl md:text-8xl font-serif italic mb-8">Modern *Collections*</h1>
              <p className="font-serif italic text-xl text-foreground/60 leading-relaxed">
                A definitive archive of architectural jewelry. Each piece is a testament to the dialogue between geometry and the human form.
              </p>
            </div>
            
            {/* Filter UI */}
            <div className="flex flex-wrap gap-x-8 gap-y-4 border-b border-foreground/10 pb-4 w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-[10px] tracking-[0.3em] uppercase transition-all duration-500 relative ${
                    activeCategory === cat ? 'text-accent' : 'text-foreground/40 hover:text-foreground'
                  }`}
                >
                  {cat}
                  {activeCategory === cat && (
                    <motion.div 
                      layoutId="category-underline"
                      className="absolute -bottom-[17px] left-0 right-0 h-px bg-accent"
                    />
                  )}
                </button>
              ))}
            </div>
          </header>

          {/* Editorial Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-x-12 md:gap-y-32">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.1,
                    ease: [0.19, 1, 0.22, 1]
                  }}
                  className={index % 4 === 1 ? 'md:mt-24' : index % 4 === 3 ? 'md:-mt-24' : ''}
                >
                  <Card product={product} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredProducts.length === 0 && (
            <div className="py-48 text-center">
              <p className="font-serif italic text-2xl opacity-40">No pieces found in this collection.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
