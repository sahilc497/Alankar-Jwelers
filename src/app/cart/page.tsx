'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Trash2, ArrowRight, CheckCircle } from 'lucide-react';
import Layout from '@/components/Layout';
import Button from '@/components/ui/Button';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';
import { createClient } from '@/utils/supabase/client';

export default function Cart() {
  const { cartItems, removeFromCart, cartTotal, clearCart } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const [customer, setCustomer] = useState({
    name: '',
    email: '',
    address: ''
  });

  const supabase = createClient();

  const handleCheckoutSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const finalTotal = cartTotal * 1.08; // including 8% tax
      const { error: insertError } = await supabase
        .from('orders')
        .insert([{
          customer_name: customer.name,
          customer_email: customer.email,
          customer_address: customer.address,
          total_amount: finalTotal,
          items: cartItems
        }]);

      if (insertError) throw insertError;

      clearCart();
      setOrderPlaced(true);
    } catch (err: any) {
      setError(err.message || 'Failed to place order.');
    } finally {
      setLoading(false);
    }
  };

  if (orderPlaced) {
    return (
      <Layout>
        <section className="px-6 md:px-12 py-48 text-center bg-foreground/5 min-h-[70vh] flex flex-col justify-center">
          <div className="max-w-2xl mx-auto">
            <CheckCircle className="mx-auto mb-8 text-green-600" size={64} strokeWidth={1} />
            <h1 className="text-4xl md:text-6xl font-serif italic mb-8">Acquisition *Confirmed*</h1>
            <p className="font-sans text-sm tracking-widest leading-loose opacity-60 mb-12 uppercase">
              Your pieces are being prepared for secure transit. An artisan will contact you shortly regarding delivery.
            </p>
            <Link href="/" className="inline-flex items-center gap-4 text-[10px] tracking-[0.3em] uppercase font-sans group">
              <div className="w-12 h-px bg-foreground/20 group-hover:w-24 transition-all duration-500" />
              Return to Vault
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  if (cartItems.length === 0) {
    return (
      <Layout>
        <section className="px-6 md:px-12 py-48 text-center">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-serif italic mb-8">Your Collection is *Empty*</h1>
            <p className="font-sans text-sm tracking-widest leading-loose opacity-60 mb-12 uppercase">
              Begin your journey by acquiring architectural masterpieces.
            </p>
            <Link href="/products" className="inline-flex items-center gap-4 text-[10px] tracking-[0.3em] uppercase font-sans group">
              <div className="w-12 h-px bg-foreground/20 group-hover:w-24 transition-all duration-500" />
              Explore Collections
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

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
                    {item.image && (
                      <Image 
                        src={item.image}
                        alt={item.name || ''}
                        fill
                        sizes="(max-width: 768px) 100vw, 200px"
                        className="object-cover grayscale"
                      />
                    )}
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
                          <span className="border-b border-foreground/20 px-2">{String(item.quantity).padStart(2, '0')}</span>
                       </div>
                       <button onClick={() => removeFromCart(item.id)} className="text-foreground/40 hover:text-foreground transition-colors flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase font-sans">
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
                  <span>₹{cartTotal.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
                </div>
                <div className="flex justify-between font-sans text-[10px] tracking-[0.2em] uppercase">
                  <span className="opacity-40">Shipping</span>
                  <span className="text-accent italic">Complimentary</span>
                </div>
                <div className="flex justify-between font-sans text-[10px] tracking-[0.2em] uppercase">
                  <span className="opacity-40">Tax (Est. 8%)</span>
                  <span>₹{(cartTotal * 0.08).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
                </div>
                <div className="pt-6 border-t border-foreground/10 flex justify-between items-baseline">
                  <span className="font-serif text-xl italic">Total</span>
                  <span className="text-2xl font-sans font-medium">₹{(cartTotal * 1.08).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
                </div>
              </div>

              <div className="space-y-4 mt-8">
                {error && <p className="text-red-500 text-xs tracking-widest">{error}</p>}
                
                {!isCheckingOut ? (
                  <Button className="w-full justify-between flex items-center pr-4" onClick={() => setIsCheckingOut(true)}>
                     Proceed to Checkout
                     <ArrowRight size={14} />
                  </Button>
                ) : (
                  <form onSubmit={handleCheckoutSubmit} className="space-y-6 pt-6 border-t border-foreground/10 animate-fade-in">
                    <h3 className="text-sm font-serif italic mb-4">Delivery Protocols</h3>
                    <div>
                      <input required type="text" placeholder="Full Name" value={customer.name} onChange={e => setCustomer({...customer, name: e.target.value})} className="w-full border p-3 text-sm focus:outline-none" />
                    </div>
                    <div>
                      <input required type="email" placeholder="Email Address" value={customer.email} onChange={e => setCustomer({...customer, email: e.target.value})} className="w-full border p-3 text-sm focus:outline-none" />
                    </div>
                    <div>
                      <textarea required placeholder="Secure Delivery Address" value={customer.address} onChange={e => setCustomer({...customer, address: e.target.value})} rows={3} className="w-full border p-3 text-sm focus:outline-none" />
                    </div>
                    <div className="flex gap-4">
                      <Button type="button" onClick={() => setIsCheckingOut(false)} className="w-1/3 bg-transparent text-foreground border border-foreground/20 hover:bg-foreground/5">
                        Cancel
                      </Button>
                      <Button type="submit" disabled={loading} className="w-2/3 bg-black text-white hover:bg-black/90">
                        {loading ? 'Processing...' : 'Confirm Acquisition'}
                      </Button>
                    </div>
                  </form>
                )}

                <p className="text-[9px] text-center tracking-widest uppercase opacity-40 font-sans leading-loose mt-8 block">
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
