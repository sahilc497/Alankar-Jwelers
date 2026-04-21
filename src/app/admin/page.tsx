'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@/utils/supabase/client';
import Layout from '@/components/Layout';
import Button from '@/components/ui/Button';

export default function AdminPage() {
  const supabase = createClient();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [activeTab, setActiveTab] = useState<'products' | 'orders'>('products');
  
  // Security Lock State
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  
  // Product Form State
  const [formData, setFormData] = useState({
    name: '',
    category: 'Rings',
    collection: 'Modern',
    audience: 'Women',
    price: '',
    description: '',
    longDescription: '',
    details: ''
  });
  const [imageFile, setImageFile] = useState<File | null>(null);

  // Orders State
  const [orders, setOrders] = useState<any[]>([]);
  const [loadingOrders, setLoadingOrders] = useState(false);

  const fetchOrders = async () => {
    setLoadingOrders(true);
    try {
      const { data, error } = await supabase.from('orders').select('*').order('created_at', { ascending: false });
      if (error) throw error;
      setOrders(data || []);
    } catch (e: any) {
      console.error(e);
      setMessage(`Failed to fetch orders: ${e.message}`);
    } finally {
      setLoadingOrders(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated && activeTab === 'orders') {
      fetchOrders();
    }
  }, [isAuthenticated, activeTab]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleSubmitProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!imageFile) {
      setMessage('Please select an image.');
      return;
    }

    setLoading(true);
    setMessage('');

    try {
      // 1. Upload Image to Supabase Storage
      const fileExt = imageFile.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `products/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('products')
        .upload(filePath, imageFile);

      if (uploadError) throw uploadError;

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('products')
        .getPublicUrl(filePath);

      // 2. Insert product data into Supabase Database
      const detailsArray = formData.details.split(',').map(d => d.trim()).filter(Boolean);

      const { error: insertError } = await supabase
        .from('products')
        .insert([{
          name: formData.name,
          category: formData.category,
          collection: formData.collection,
          audience: formData.audience,
          price: formData.price,
          description: formData.description,
          long_description: formData.longDescription,
          details: detailsArray,
          image_url: publicUrl
        }]);

      if (insertError) throw insertError;

      setMessage('Product uploaded successfully!');
      // Reset form
      setFormData({
        name: '', category: 'Rings', collection: 'Modern', audience: 'Women',
        price: '', description: '', longDescription: '', details: ''
      });
      setImageFile(null);

    } catch (error: any) {
      setMessage(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'Admin' && password === 'Admin@123') {
      setIsAuthenticated(true);
      setLoginError('');
    } else {
      setLoginError('Invalid credentials');
    }
  };

  if (!isAuthenticated) {
    return (
      <Layout>
        <div className="max-w-md mx-auto py-24 md:py-48 px-4 md:px-6">
          <h1 className="text-3xl font-serif italic mb-8 text-center">Admin Login</h1>
          {loginError && <p className="text-red-600 mb-6 text-center text-sm">{loginError}</p>}
          <form onSubmit={handleLogin} className="space-y-4 md:space-y-6 bg-white p-6 md:p-8 border border-gray-200">
            <div>
              <label className="block text-xs uppercase tracking-widest mb-2">Username</label>
              <input required type="text" value={username} onChange={e => setUsername(e.target.value)} className="w-full border p-3 focus:outline-none" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest mb-2">Password</label>
              <input required type="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full border p-3 focus:outline-none" />
            </div>
            <Button type="submit" className="w-full bg-black text-white py-4 mt-4">
              Access Vault
            </Button>
          </form>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-5xl mx-auto py-16 md:py-32 px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 border-b border-foreground/10 pb-8">
          <h1 className="text-3xl md:text-5xl font-serif italic text-center md:text-left mb-6 md:mb-0">Vault Control</h1>
          <div className="flex gap-4">
            <button 
              onClick={() => { setActiveTab('products'); setMessage(''); }}
              className={`px-6 py-3 text-[10px] tracking-widest uppercase transition-all ${activeTab === 'products' ? 'bg-black text-white' : 'border border-foreground/20 hover:bg-foreground/5'}`}
            >
              Add Product
            </button>
            <button 
              onClick={() => { setActiveTab('orders'); setMessage(''); }}
              className={`px-6 py-3 text-[10px] tracking-widest uppercase transition-all ${activeTab === 'orders' ? 'bg-black text-white' : 'border border-foreground/20 hover:bg-foreground/5'}`}
            >
              Incoming Orders
            </button>
          </div>
        </div>
        
        {message && (
          <div className={`p-4 mb-4 md:mb-8 text-sm md:text-base ${message.includes('Error') || message.includes('Failed') ? 'bg-red-50 text-red-800 border border-red-200' : 'bg-green-50 text-green-800 border border-green-200'}`}>
            {message}
          </div>
        )}

        {/* --- ADD PRODUCT TAB --- */}
        {activeTab === 'products' && (
          <form onSubmit={handleSubmitProduct} className="space-y-4 md:space-y-6 bg-white p-6 md:p-8 border border-gray-200 animate-fade-in">
            <h2 className="text-xl font-serif italic mb-6 border-b border-gray-200 pb-4">Publish New Piece</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
               <div>
                <label className="block text-xs uppercase tracking-widest mb-2">Product Name</label>
                <input required type="text" name="name" value={formData.name} onChange={handleInputChange} className="w-full border p-3" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest mb-2">Price (e.g. ₹1,45,000)</label>
                <input required type="text" name="price" value={formData.price} onChange={handleInputChange} className="w-full border p-3" />
              </div>
              
              <div>
                <label className="block text-xs uppercase tracking-widest mb-2">Category (Type)</label>
                <select name="category" value={formData.category} onChange={handleInputChange} className="w-full border p-3">
                  <option value="Rings">Rings</option>
                  <option value="Necklaces">Necklaces</option>
                  <option value="Earrings">Earrings</option>
                  <option value="Bracelets">Bracelets</option>
                  <option value="Bangles">Bangles</option>
                  <option value="Anklets">Anklets</option>
                  <option value="Idols">Idols</option>
                  <option value="Chains">Chains</option>
                  <option value="Kadas">Kadas</option>
                  <option value="Gold Coins">Gold Coins</option>
                  <option value="Silver Coins">Silver Coins</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest mb-2">Collection</label>
                <select name="collection" value={formData.collection} onChange={handleInputChange} className="w-full border p-3">
                  <option value="Heritage">Heritage</option>
                  <option value="Modern">Modern</option>
                  <option value="Sacred">Sacred</option>
                  <option value="Silver">Silver</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest mb-2">Audience</label>
                <select name="audience" value={formData.audience} onChange={handleInputChange} className="w-full border p-3">
                  <option value="Women">Women</option>
                  <option value="Men">Men</option>
                  <option value="Unisex">Unisex</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest mb-2">Image File</label>
                <input required type="file" accept="image/*" onChange={handleImageChange} className="w-full border p-2" />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest mb-2">Short Description</label>
              <input required type="text" name="description" value={formData.description} onChange={handleInputChange} className="w-full border p-3" />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest mb-2">Long Description</label>
              <textarea required name="longDescription" value={formData.longDescription} onChange={handleInputChange} rows={4} className="w-full border p-3" />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest mb-2">Details (comma separated)</label>
              <input required type="text" name="details" value={formData.details} onChange={handleInputChange} placeholder="22k Gold, Weight: 40g, Handcrafted" className="w-full border p-3" />
            </div>

            <Button type="submit" className="w-full bg-black text-white py-4" disabled={loading}>
              {loading ? 'Publishing...' : 'Publish Product'}
            </Button>
          </form>
        )}

        {/* --- VIEW ORDERS TAB --- */}
        {activeTab === 'orders' && (
          <div className="bg-white p-6 md:p-8 border border-gray-200 animate-fade-in overflow-hidden">
            <h2 className="text-xl font-serif italic mb-6 border-b border-gray-200 pb-4 flex justify-between items-center">
              <span>Incoming Acqusitions</span>
              <button disabled={loadingOrders} onClick={fetchOrders} className="text-[10px] tracking-widest font-sans uppercase opacity-50 hover:opacity-100">
                Refresh
              </button>
            </h2>

            {loadingOrders ? (
               <p className="text-gray-500 font-sans text-sm animate-pulse">Synchronizing vault logs...</p>
            ) : orders.length === 0 ? (
               <p className="text-gray-500 font-sans text-sm">No acquisitions logged yet.</p>
            ) : (
               <div className="overflow-x-auto w-full">
                 <table className="w-full text-left font-sans text-xs border-collapse">
                    <thead>
                      <tr className="border-b-2 border-black text-[9px] tracking-widest uppercase">
                         <th className="p-3">Order ID (Date)</th>
                         <th className="p-3">Client Information</th>
                         <th className="p-3">Manifest</th>
                         <th className="p-3 text-right">Value (₹)</th>
                         <th className="p-3">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map(order => (
                        <tr key={order.id} className="border-b border-gray-100 align-top hover:bg-gray-50 transition-colors">
                          <td className="p-3 min-w-[120px]">
                            <p className="font-mono text-[9px] truncate max-w-[100px]">{order.id}</p>
                            <p className="opacity-60">{new Date(order.created_at).toLocaleDateString()} {new Date(order.created_at).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
                          </td>
                          <td className="p-3 leading-loose text-[10px] min-w-[200px]">
                             <strong>{order.customer_name}</strong><br />
                             <a href={`mailto:${order.customer_email}`} className="text-accent hover:underline">{order.customer_email}</a><br />
                             <span className="opacity-60 whitespace-pre-wrap">{order.customer_address}</span>
                          </td>
                          <td className="p-3 text-[10px] space-y-2 min-w-[250px]">
                             {order.items.map((item: any, idx: number) => (
                                <div key={item.id || idx} className="flex gap-2 pb-2 mb-2 border-b border-gray-100 last:border-0 last:mb-0 last:pb-0">
                                   <div className="font-mono bg-gray-100 px-1.5 py-0.5 rounded-sm">{String(item.quantity).padStart(2, '0')}x</div>
                                   <div>
                                     <p className="font-medium">{item.name}</p>
                                     <p className="text-[9px] opacity-60 tracking-wider">SKU: {item.id.slice(0, 6).toUpperCase()}</p>
                                   </div>
                                </div>
                             ))}
                          </td>
                          <td className="p-3 whitespace-nowrap text-right font-medium min-w-[120px]">
                            {Number(order.total_amount).toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                          </td>
                          <td className="p-3 min-w-[100px]">
                             <span className={`px-2 py-1 tracking-widest uppercase text-[8px] font-medium ${order.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'}`}>
                               {order.status || 'Pending'}
                             </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                 </table>
               </div>
            )}
          </div>
        )}

      </div>
    </Layout>
  );
}
