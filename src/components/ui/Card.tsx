'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/data/products';

interface CardProps {
  product: Product;
}

export default function Card({ product }: CardProps) {
  return (
    <Link href={`/products/${product.id}`} className="group block">
      <div className="border-t border-foreground pt-6 h-full flex flex-col">
        <div className="relative aspect-3/4 overflow-hidden bg-foreground/5 mb-6">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover grayscale-hover editorial-transition"
          />
        </div>
        
        <div className="flex flex-col grow">
          <div className="flex justify-between items-baseline mb-2">
            <h3 className="text-xl leading-tight group-hover:text-accent transition-colors duration-500">
              {product.name}
            </h3>
            <span className="text-xs font-sans tracking-widest">{product.price}</span>
          </div>
          
          <p className="text-sm italic font-serif text-foreground/70 mb-4 line-clamp-2">
            {product.description}
          </p>
          
          <div className="mt-auto">
            <span className="text-[10px] tracking-[0.2em] font-sans uppercase border-b border-foreground/30 group-hover:border-foreground transition-colors duration-500">
              View Collection
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
