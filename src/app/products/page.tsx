import { Suspense } from 'react';
import ProductsContent from './ProductsContent';
import { createClient } from '@/utils/supabase/server';
import { Product, products } from '@/data/products';

export default async function ProductListing() {
  const supabase = await createClient();
  const { data: supabaseProducts } = await supabase.from('products').select('*');

  // Combine Supabase products with our static premium products
  const dbProducts: Product[] = (supabaseProducts || []).map((p: any) => ({
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

  // Merge datasets, ensuring premium static products are always present
  const allProducts = [...dbProducts];
  
  // Add static products that aren't already in the DB (by ID)
  const dbIds = new Set(allProducts.map(p => p.id));
  const staticProducts = products.filter(p => !dbIds.has(p.id));
  
  const finalProducts = [...allProducts, ...staticProducts];

  return (
    <Suspense fallback={<div className="px-6 md:px-12 py-24"><div className="max-w-[1800px] mx-auto"><p className="font-serif italic text-2xl opacity-40">Loading products...</p></div></div>}>
      <ProductsContent serverProducts={finalProducts} />
    </Suspense>
  );
}
