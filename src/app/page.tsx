import { createClient } from '@/utils/supabase/server';
import HomeContent from './HomeContent';
import { Product } from '@/data/products';

export const revalidate = 60; // Refresh data every 60 seconds

export default async function Home() {
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

  return <HomeContent products={products} />;
}
