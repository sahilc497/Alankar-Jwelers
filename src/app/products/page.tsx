import { Suspense } from 'react';
import ProductsContent from './ProductsContent';
import { createClient } from '@/utils/supabase/server';
import { Product } from '@/data/products';

export default async function ProductListing() {
  const supabase = await createClient();
  const { data: supabaseProducts } = await supabase.from('products').select('*');

  // Map Supabase columns to our expected Product type structure
  const products: Product[] = (supabaseProducts || []).map((p: any) => ({
    id: p.id,
    name: p.name,
    category: p.category,
    collection: p.collection,
    audience: p.audience,
    price: p.price,
    description: p.description,
    longDescription: p.long_description,
    image: p.image_url,
    details: Array.isArray(p.details) ? p.details : [],
  }));

  return (
    <Suspense fallback={<div className="px-6 md:px-12 py-24"><div className="max-w-[1800px] mx-auto"><p className="font-serif italic text-2xl opacity-40">Loading products...</p></div></div>}>
      <ProductsContent serverProducts={products} />
    </Suspense>
  );
}
