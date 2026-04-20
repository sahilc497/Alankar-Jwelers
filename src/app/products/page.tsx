import { Suspense } from 'react';
import ProductsContent from './ProductsContent';

export default function ProductListing() {
  return (
    <Suspense fallback={<div className="px-6 md:px-12 py-24"><div className="max-w-[1800px] mx-auto"><p className="font-serif italic text-2xl opacity-40">Loading products...</p></div></div>}>
      <ProductsContent />
    </Suspense>
  );
}
