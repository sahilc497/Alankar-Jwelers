import { createClient } from '@/utils/supabase/server';
import ProductDetailClient from './ProductDetailClient';
import Layout from '@/components/Layout';
import { Product } from '@/data/products';

export const revalidate = 60; // Refresh data every 60 seconds

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  
  const supabase = await createClient();
  
  // Fetch current product
  const { data: currentProduct } = await supabase
    .from('products')
    .select('*')
    .eq('id', id)
    .single();
  
  if (!currentProduct) {
    return (
      <Layout>
        <div className="py-48 text-center font-serif italic text-2xl">
          Piece not found.
        </div>
      </Layout>
    );
  }

  // Fetch related products (excluding current)
  const { data: relatedData } = await supabase
    .from('products')
    .select('*')
    .neq('id', id)
    .limit(4);
  
  const mapProduct = (p: any): Product => ({
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
  });

  const product = mapProduct(currentProduct);
  const relatedProducts: Product[] = (relatedData || []).map(mapProduct);

  return <ProductDetailClient product={product} relatedProducts={relatedProducts} />;
}
