'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '@/components/Layout';
import Card from '@/components/ui/Card';
import { Product } from '@/data/products';

const categories = ['All', 'Rings', 'Necklaces', 'Earrings', 'Bracelets', 'Bangles', 'Anklets', 'Idols', 'Chains', 'Kadas', 'Gold Coins', 'Silver Coins'];
const audiences = ['All', 'Men', 'Women', 'Unisex'];

interface ProductsContentProps {
  serverProducts: Product[];
}

export default function ProductsContent({ serverProducts }: ProductsContentProps) {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const initialAudience = searchParams.get('audience') || 'All';
  const [activeAudience, setActiveAudience] = useState(initialAudience);

  const filteredProducts = serverProducts.filter(p => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    const matchesAudience = activeAudience === 'All' || p.audience === activeAudience;
    return matchesCategory && matchesAudience;
  });

  return (
    <Layout>
      <section className="px-6 md:px-12 py-24">
        <div className="max-w-[1800px] mx-auto">
          {/* Header */}
          <header className="mb-24">
            <div className="max-w-3xl mb-12">
              <span className="text-[10px] tracking-[0.4em] uppercase mb-4 block font-sans">The Repository</span>
              <h1 className="text-6xl md:text-8xl font-serif italic mb-8">
                {activeCategory === 'All' ? 'Complete' : activeCategory} *Selections*
              </h1>
              <p className="font-serif italic text-xl text-foreground/60 leading-relaxed">
                An archive where geometry meets heritage. From the sacred deities of 22k gold to the architectural minimalist bands of tomorrow.
              </p>
            </div>
            
            {/* Dual Filter UI */}
            <div className="space-y-8">
              {/* Category Filter */}
              <div className="flex flex-wrap gap-x-8 gap-y-4 border-b border-foreground/10 pb-4">
                <span className="text-[8px] tracking-[0.3em] uppercase opacity-40 w-full md:w-auto mb-2 md:mb-0">Jewelry Type</span>
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

              {/* Audience Filter */}
              <div className="flex flex-wrap gap-x-8 gap-y-4 pb-4">
                <span className="text-[8px] tracking-[0.3em] uppercase opacity-40 w-full md:w-auto mb-2 md:mb-0">Design For</span>
                {audiences.map((aud) => (
                  <button
                    key={aud}
                    onClick={() => setActiveAudience(aud)}
                    className={`text-[10px] tracking-[0.3em] uppercase transition-all duration-500 relative ${
                      activeAudience === aud ? 'text-accent' : 'text-foreground/40 hover:text-foreground'
                    }`}
                  >
                    {aud}
                    {activeAudience === aud && (
                      <motion.div 
                        layoutId="audience-underline"
                        className="absolute -bottom-[17px] left-0 right-0 h-px bg-accent"
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </header>

          {/* Editorial Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-x-12 md:gap-y-32">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ 
                    duration: 0.6, 
                    ease: [0.19, 1, 0.22, 1]
                  }}
                  className={index % 6 === 1 || index % 6 === 4 ? 'md:mt-24' : ''}
                >
                  <Card product={product} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredProducts.length === 0 && (
            <div className="py-48 text-center">
              <p className="font-serif italic text-2xl opacity-40">No pieces found in this selection.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
