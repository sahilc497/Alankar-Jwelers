# Alankar Jwelers | Fine Jewelry E-Commerce 

A luxury editorial-style jewelry e-commerce platform built on modern web technologies. This project emphasizes a premium, print-inspired brutalist/editorial aesthetic, high-performance interactions, and a complete end-to-end administration backend.

## 🚀 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router) + React 19
- **Styling**: Tailwind CSS v4, Custom CSS variables, and dynamic typographic layouts.
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Backend & Database**: [Supabase](https://supabase.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 💎 Features

### Client Storefront
- **Editorial Design System**: A strict focus on typography (Playfair Display & Inter), monochrome accents, sophisticated vertical labels, and glassmorphic micro-interactions.
- **Dynamic Catalog**: Products are fetched in real-time from the Supabase `products` database, mapped to visual categories like *Heritage*, *Sacred*, and *Menswear*.
- **Cart System**: A fully functional, locally persistent, global Cart state powered by React Context.
- **Checkout Flow**: A seamless checkout experience that calculates total costs with taxes, captures customer shipping details, and injects live transactions securely into the database.

### Admin "Control Vault" (`/admin`)
- **Secure Access**: Gate-kept entry requires specific credentials (`Admin` / `Admin@123`).
- **Product Publishing**: Upload high-resolution images via Supabase Storage and push new jewelry pieces into the ecosystem simply with a sleek editorial form.
- **Order Management**: Features an "Incoming Acquisitions" tab that fetches live purchase data directly from the Supabase `orders` table. Tracks timestamps, total fiat value, line-item item manifests, and real-time fulfillment statuses.

## 🛠 Prerequisites

To run this project, make sure you have interconnected a live Supabase project.

1. Set up your `.env.local` file with your appropriate securely injected backend URLs:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

2. **Database Requirements:**
Ensure your Supabase PostgreSQL instance has the `products` and `orders` tables active and available via standard RLS policies. 
*The `orders` table requires an `items` jsonb column for cart item manifestations.*

## 💻 Getting Started

First, install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. Log into the control panel by visiting [http://localhost:3000/admin](http://localhost:3000/admin).
