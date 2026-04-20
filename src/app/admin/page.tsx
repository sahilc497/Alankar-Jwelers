'use client';

import { useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import Layout from '@/components/Layout';
import Button from '@/components/ui/Button';

export default function AdminPage() {
  const supabase = createClient();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  
  // Security Lock State
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
        <div className="max-w-md mx-auto py-48 px-6">
          <h1 className="text-3xl font-serif italic mb-8 text-center">Admin Login</h1>
          {loginError && <p className="text-red-600 mb-6 text-center text-sm">{loginError}</p>}
          <form onSubmit={handleLogin} className="space-y-6 bg-white p-8 border border-gray-200">
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
      <div className="max-w-4xl mx-auto py-32 px-6">
        <h1 className="text-4xl font-serif italic mb-8">Admin Dashboard</h1>
        
        {message && (
          <div className={`p-4 mb-8 ${message.includes('Error') ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            {loading ? 'Uploading...' : 'Publish Product'}
          </Button>
        </form>
      </div>
    </Layout>
  );
}
