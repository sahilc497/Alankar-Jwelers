export interface Product {
  id: string;
  name: string;
  category: 'Necklaces' | 'Rings' | 'Earrings' | 'Bracelets' | 'Bangles' | 'Anklets' | 'Idols' | 'Chains' | 'Kadas';
  collection: 'Heritage' | 'Modern' | 'Sacred' | 'Silver';
  audience: 'Men' | 'Women' | 'Unisex';
  price: string;
  description: string;
  longDescription: string;
  image: string;
  details: string[];
}

export const products: Product[] = [
  // --- HERITAGE COLLECTION ---
  {
    id: 'h1',
    name: 'Kolhapuri Saaj',
    category: 'Necklaces',
    collection: 'Heritage',
    audience: 'Women',
    price: '₹3,45,000',
    description: 'A legendary Maharashtrian gold necklace featuring 21 leaf-shaped pendants and a central Lakshmi motif.',
    longDescription: 'The Kolhapuri Saaj is an iconic piece of Maharashtrian heritage. Handcrafted in 22k yellow gold, it consists of 21 pendants representing different symbols of abundance and protection.',
    image: '/products/kolhapuri-saaj.png',
    details: ['22k Yellow Gold', 'Weight: 45g', 'Hand-stamped Lakshmi motif']
  },
  {
    id: 'h2',
    name: 'Bramhapuri Thushi Choker',
    category: 'Necklaces',
    collection: 'Heritage',
    audience: 'Women',
    price: '₹1,25,000',
    description: 'A traditional choker made of closely woven gold beads, symbolizing prosperity.',
    longDescription: 'Each 22k gold bead is woven into a dense mesh, culminating in a central ruby pendant. It sits elegantly at the base of the neck.',
    image: '/products/thushi.png',
    details: ['22k Yellow Gold', 'Kemp Ruby Accents', 'Woven Bead Structure']
  },
  {
    id: 'h3',
    name: 'Royal Maharashtrian Nath',
    category: 'Earrings',
    collection: 'Heritage',
    audience: 'Women',
    price: '₹48,500',
    description: 'The crowning jewel of Maharashtrian tradition: a pearl-encrusted nose ring with ruby highlights.',
    longDescription: 'This ब्राह्मणी (Brahmani) style Nath is handcrafted in 22k gold and features Basra pearls and a vibrant central ruby.',
    image: '/products/nath.png',
    details: ['22k Yellow Gold', 'Natural Basra Pearls', 'Sanskriti-cut Ruby']
  },
  {
    id: 'h4',
    name: 'Traditional Gold Tode',
    category: 'Bangles',
    collection: 'Heritage',
    audience: 'Women',
    price: '₹2,85,000',
    description: 'Exquisitely carved 22k gold bangles with traditional Maharashtrian floral motifs.',
    longDescription: 'The Tode is a heavy, hand-carved bangle that represents the pinnacle of Maharashtrian goldsmithing. Featuring interlocking patterns and a polished finish.',
    image: '/products/tode-bangles.png',
    details: ['22k Yellow Gold', 'Weight: 60g pair', 'Intricate Floral Carving']
  },
  {
    id: 'h6',
    name: 'Vedic Gold Paijan',
    category: 'Anklets',
    collection: 'Heritage',
    audience: 'Women',
    price: '₹95,000',
    description: 'Traditional gold anklets featuring delicate chain work and musical gold beads.',
    longDescription: 'Handcrafted in 22k gold, these Paijan (anklets) are designed for grace and movement. The delicate sound of gold beads accompanies every step.',
    image: '/products/paijan.png',
    details: ['22k Yellow Gold', 'Hand-linked Chain', 'Polished Gold Beads']
  },

  // --- MODERN COLLECTION ---
  {
    id: '1',
    name: 'Alabaster Orbit Necklace',
    category: 'Necklaces',
    collection: 'Modern',
    audience: 'Women',
    price: '₹2,08,250',
    description: 'A singular pearl suspended in a golden arc of architectural precision.',
    longDescription: 'Crafted with the refined silhouette of high-fashion editorials in mind, the Alabaster Orbit Necklace is a study in balance.',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=1200',
    details: ['18k Yellow Gold', 'South Sea Pearl (12mm)', 'Signature Sharp-Edge Clasp']
  },
  {
    id: '2',
    name: 'Fracture Gold Band',
    category: 'Rings',
    collection: 'Modern',
    audience: 'Unisex',
    price: '₹1,53,000',
    description: 'A solid gold band marked by deliberate, hand-carved geometric facets.',
    longDescription: 'The Fracture Gold Band challenges the traditional continuity of the ring. Each facet is hand-carved to catch the light.',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=1200',
    details: ['18k Yellow Gold', 'Matte Finish Interior', 'Polished Facets']
  },
  {
    id: '4',
    name: 'Monolith Bangle',
    category: 'Bracelets',
    collection: 'Modern',
    audience: 'Women',
    price: '₹3,48,500',
    description: 'An architectural statement piece with a hidden hinge and sharp edges.',
    longDescription: 'The Monolith Bangle is more than jewelry—it is a sculpture for the wrist. Featuring 1px precise edges.',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=1200',
    details: ['18k Yellow Gold', 'Width: 15mm', 'Invisible Magnetic Closure']
  },

  // --- MEN/UNISEX ADDITIONS ---
  {
    id: 'm1',
    name: 'Sovereign Gold Kada',
    category: 'Kadas',
    collection: 'Heritage',
    audience: 'Men',
    price: '₹4,20,000',
    description: 'A commanding 22k gold traditional Indian Kada designed for the modern gentleman.',
    longDescription: 'Solid, heavy, and undeniably powerful. This golden kada features a hidden clasp and subtle lion-head motifs inside the band.',
    image: '/products/mens-gold-kada-clean.png',
    details: ['22k Solid Gold', 'Weight: 80g', 'Lion-motif inner engraving']
  },
  {
    id: 'm2',
    name: 'Sterling Curb Chain',
    category: 'Chains',
    collection: 'Silver',
    audience: 'Men',
    price: '₹35,000',
    description: 'A heavy, oxidized 925 silver curb chain offering a rugged, architectural aesthetic.',
    longDescription: 'Designed to be felt. This silver chain rests heavily against the chest and features diamond-cut links for a dark shine.',
    image: '/products/mens-silver-chain.png',
    details: ['925 Sterling Silver', 'Oxidized Finish', 'Length: 24 inches']
  },
  {
    id: 'm3',
    name: 'Two-Tone Platinum Signet',
    category: 'Rings',
    collection: 'Modern',
    audience: 'Men',
    price: '₹1,95,000',
    description: 'A striking geometric men’s ring forged in platinum and 18k yellow gold.',
    longDescription: 'Precision engineering meets luxury. The square platinum face is polished to a mirror finish, bordered by architectural gold steps.',
    image: '/products/mens-gold-ring.png',
    details: ['950 Platinum', '18k Yellow Gold', 'Solid Backing']
  },
  {
    id: 'm4',
    name: 'Platinum Viper Chain',
    category: 'Chains',
    collection: 'Modern',
    audience: 'Men',
    price: '₹3,15,000',
    description: 'A solid 950 platinum geometric chain engineered for everyday sophistication.',
    longDescription: 'Durable, cool-toned luxury. The Viper chain features precision-cut geometric links forged in pure platinum, offering unparalleled shine and weight.',
    image: '/products/mens-platinum-chain.png',
    details: ['950 Platinum', 'Geometric Interlock', 'Length: 22 inches']
  },
  {
    id: 'm5',
    name: '18k Gold Link Bracelet',
    category: 'Bracelets',
    collection: 'Heritage',
    audience: 'Men',
    price: '₹2,68,000',
    description: 'A robust, heavy 18k yellow gold link bracelet for the contemporary wardrobe.',
    longDescription: 'A modern classic. Thick, interlocking gold rings provide a substantial feel and dynamic movement on the wrist, fastened by a secure, seamless clasp.',
    image: '/products/mens-gold-bracelet.png',
    details: ['18k Yellow Gold', 'Weight: 45g', 'Seamless Clasp Mechanism']
  },
  {
    id: 'm6',
    name: 'Sovereign Emerald Ring',
    category: 'Rings',
    collection: 'Heritage',
    audience: 'Men',
    price: '₹1,85,000',
    description: 'A regal men\'s ring featuring a deep green emerald set in brushed 22k gold.',
    longDescription: 'Commands attention. A dark, intense natural emerald acts as the centerpiece for this heavy, brushed gold sovereign ring, exuding authority.',
    image: '/products/mens-emerald-ring.png',
    details: ['22k Brushed Gold', 'Natural Zambian Emerald', 'Solid Band Profile']
  },
  {
    id: 'm7',
    name: 'Silver Anchor Pendant',
    category: 'Necklaces',
    collection: 'Silver',
    audience: 'Men',
    price: '₹28,500',
    description: 'A weighty, architectural anchor pendant hanging from an oxidized silver chain.',
    longDescription: 'Nautical minimalism. The oxidized finish emphasizes the sharp, architectural lines of the anchor, hanging firmly on a 925 silver box chain.',
    image: '/products/mens-silver-pendant.png',
    details: ['925 Sterling Silver', 'Oxidized Finish', 'Includes Box Chain']
  },
  {
    id: 'u1',
    name: '24k Gold Rope Chain',
    category: 'Chains',
    collection: 'Heritage',
    audience: 'Unisex',
    price: '₹2,50,000',
    description: 'A timeless, thick gold rope chain crafted from pure 24k gold.',
    longDescription: 'Elegance without limits. This rope chain is meticulously woven to catch light from every angle, designed to be worn by anyone.',
    image: '/products/unisex-rope-chain.png',
    details: ['24k Pure Gold', 'Woven Texture', 'Length: 22 inches']
  },

  // --- SACRED COLLECTION ---
  {
    id: 's1',
    name: 'Lord Krishna Gold Murti',
    category: 'Idols',
    collection: 'Sacred',
    audience: 'Unisex',
    price: '₹1,45,000',
    description: 'A divine 22k gold idol of Lord Krishna, meticulously detailed for your sacred space.',
    longDescription: 'This small but powerful idol captures the playful and divine essence of Lord Krishna. Handcrafted with precision in pure 22k gold.',
    image: '/products/krishna-idol.png',
    details: ['22k Yellow Gold', 'Height: 3 inches', 'Hand-carved Details']
  },
  {
    id: 's2',
    name: 'Goddess Lakshmi Idol',
    category: 'Idols',
    collection: 'Sacred',
    audience: 'Unisex',
    price: '₹1,65,000',
    description: 'An auspicious pure gold idol of Goddess Lakshmi, the bringer of prosperity.',
    longDescription: 'Representing beauty, wealth, and abundance, this Goddess Lakshmi murti is a perfect addition to any home treasury.',
    image: '/products/lakshmi-idol.png',
    details: ['22k Yellow Gold', 'Height: 3.5 inches', 'Sacred Geometric Base']
  },
  {
    id: 's3',
    name: 'Siddhivinayak Ganpati',
    category: 'Idols',
    collection: 'Sacred',
    audience: 'Unisex',
    price: '₹1,85,000',
    description: 'A handcrafted 22k gold idol of Lord Ganesha, the remover of obstacles.',
    longDescription: 'This intricately detailed idol of Lord Ganpati is designed to bring wisdom and success. A masterpiece of spiritual craftsmanship.',
    image: '/products/ganpati-idol.png',
    details: ['22k Yellow Gold', 'Weight: 40g', 'Finely Detailed Trunk and Ornaments']
  },

  // --- SILVER COLLECTION ---
  {
    id: 'slv1',
    name: 'Maharashtrian Silver Payal',
    category: 'Anklets',
    collection: 'Silver',
    audience: 'Women',
    price: '₹18,500',
    description: 'Heavy traditional silver anklets featuring intricate ghungroo work.',
    longDescription: 'Crafted in pure 925 sterling silver, these Payals embody the sound and grace of Maharashtrian heritage. Perfect for bridal and festive occasions.',
    image: '/products/silver/silver-payal.png',
    details: ['925 Sterling Silver', 'Weight: 150g', 'Musical Ghungroos']
  },
  {
    id: 'slv2',
    name: 'Silver Chhalla Waistband',
    category: 'Bracelets',
    collection: 'Silver',
    audience: 'Women',
    price: '₹22,000',
    description: 'An elegant silver waist key-chain, a symbol of domestic authority in Maharashtrian culture.',
    longDescription: 'The Chhalla is an iconic piece worn at the waist over a Nauvari saree. Handcrafted with traditional motifs and robust chain links.',
    image: '/products/silver/silver-chhalla.png',
    details: ['925 Sterling Silver', 'Hand-linked Chain', 'Traditional Oxidized Finish']
  },
  {
    id: 'slvidol1',
    name: 'Silver Ganesha Idol',
    category: 'Idols',
    collection: 'Silver',
    audience: 'Unisex',
    price: '₹12,400',
    description: 'A pure silver idol of Lord Ganesha.',
    longDescription: 'Intricately crafted silver idol perfect for your home temple and gifting.',
    image: '/products/silver/silver-idol-1.jpeg',
    details: ['999 Pure Silver', 'Handcrafted', 'Spiritual Collection']
  },
  {
    id: 'slvidol2',
    name: 'Silver Lakshmi Murti',
    category: 'Idols',
    collection: 'Silver',
    audience: 'Unisex',
    price: '₹14,500',
    description: 'A beautiful silver idol of Goddess Lakshmi.',
    longDescription: 'Bringer of wealth and prosperity, handcrafted in premium silver.',
    image: '/products/silver/silver-idol-2.jpeg',
    details: ['999 Pure Silver', 'Intricate Carving', 'Spiritual Collection']
  },
  {
    id: 'slvidol3',
    name: 'Sacred Silver Idol 3',
    category: 'Idols',
    collection: 'Silver',
    audience: 'Unisex',
    price: '₹11,000',
    description: 'Divine silver idol detailed with traditional motifs.',
    longDescription: 'Premium silver craftsmanship for sacred spaces.',
    image: '/products/silver/silver-idol-3.jpeg',
    details: ['999 Pure Silver', 'Hand-finished', 'Spiritual Collection']
  },
  {
    id: 'slvidol4',
    name: 'Sacred Silver Idol 4',
    category: 'Idols',
    collection: 'Silver',
    audience: 'Unisex',
    price: '₹15,200',
    description: 'Divine silver idol detailed with traditional motifs.',
    longDescription: 'Premium silver craftsmanship for sacred spaces.',
    image: '/products/silver/silver-idol-4.jpeg',
    details: ['999 Pure Silver', 'Hand-finished', 'Spiritual Collection']
  },
  {
    id: 'slvidol5',
    name: 'Sacred Silver Idol 5',
    category: 'Idols',
    collection: 'Silver',
    audience: 'Unisex',
    price: '₹9,800',
    description: 'Divine silver idol detailed with traditional motifs.',
    longDescription: 'Premium silver craftsmanship for sacred spaces.',
    image: '/products/silver/silver-idol-5.jpeg',
    details: ['999 Pure Silver', 'Hand-finished', 'Spiritual Collection']
  },
  {
    id: 'slvidol6',
    name: 'Sacred Silver Idol 6',
    category: 'Idols',
    collection: 'Silver',
    audience: 'Unisex',
    price: '₹21,000',
    description: 'Divine silver idol detailed with traditional motifs.',
    longDescription: 'Premium silver craftsmanship for sacred spaces.',
    image: '/products/silver/silver-idol-6.jpeg',
    details: ['999 Pure Silver', 'Hand-finished', 'Spiritual Collection']
  },
  {
    id: 'slvidol7',
    name: 'Sacred Silver Idol 7',
    category: 'Idols',
    collection: 'Silver',
    audience: 'Unisex',
    price: '₹18,500',
    description: 'Divine silver idol detailed with traditional motifs.',
    longDescription: 'Premium silver craftsmanship for sacred spaces.',
    image: '/products/silver/silver-idol-7.jpeg',
    details: ['999 Pure Silver', 'Hand-finished', 'Spiritual Collection']
  },
  {
    id: 'slvidol8',
    name: 'Sacred Silver Idol 8',
    category: 'Idols',
    collection: 'Silver',
    audience: 'Unisex',
    price: '₹16,400',
    description: 'Divine silver idol detailed with traditional motifs.',
    longDescription: 'Premium silver craftsmanship for sacred spaces.',
    image: '/products/silver/silver-idol-8.jpeg',
    details: ['999 Pure Silver', 'Hand-finished', 'Spiritual Collection']
  },
  {
    id: 'slvidol9',
    name: 'Sacred Silver Idol 9',
    category: 'Idols',
    collection: 'Silver',
    audience: 'Unisex',
    price: '₹13,900',
    description: 'Divine silver idol detailed with traditional motifs.',
    longDescription: 'Premium silver craftsmanship for sacred spaces.',
    image: '/products/silver/silver-idol-9.jpeg',
    details: ['999 Pure Silver', 'Hand-finished', 'Spiritual Collection']
  },
  {
    id: 'slvidol10',
    name: 'Sacred Silver Idol 10',
    category: 'Idols',
    collection: 'Silver',
    audience: 'Unisex',
    price: '₹19,000',
    description: 'Divine silver idol detailed with traditional motifs.',
    longDescription: 'Premium silver craftsmanship for sacred spaces.',
    image: '/products/silver/silver-idol-10.jpeg',
    details: ['999 Pure Silver', 'Hand-finished', 'Spiritual Collection']
  },
  {
    id: 'slvidol11',
    name: 'Sacred Silver Idol 11',
    category: 'Idols',
    collection: 'Silver',
    audience: 'Unisex',
    price: '₹8,500',
    description: 'Divine silver idol detailed with traditional motifs.',
    longDescription: 'Premium silver craftsmanship for sacred spaces.',
    image: '/products/silver/silver-idol-11.jpeg',
    details: ['999 Pure Silver', 'Hand-finished', 'Spiritual Collection']
  },
  {
    id: 'slvidol12',
    name: 'Sacred Silver Idol 12',
    category: 'Idols',
    collection: 'Silver',
    audience: 'Unisex',
    price: '₹34,000',
    description: 'Divine silver idol detailed with traditional motifs.',
    longDescription: 'Premium silver craftsmanship for sacred spaces.',
    image: '/products/silver/silver-idol-12.jpeg',
    details: ['999 Pure Silver', 'Hand-finished', 'Spiritual Collection']
  }
];
