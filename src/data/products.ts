export interface Product {
  id: string;
  name: string;
  category: 'Necklaces' | 'Rings' | 'Earrings' | 'Bracelets';
  price: string;
  description: string;
  longDescription: string;
  image: string;
  details: string[];
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Alabaster Orbit Necklace',
    category: 'Necklaces',
    price: '₹2,08,250',
    description: 'A singular pearl suspended in a golden arc of architectural precision.',
    longDescription: 'Crafted with the refined silhouette of high-fashion editorials in mind, the Alabaster Orbit Necklace is a study in balance. A hand-selected South Sea pearl rests within a 18k yellow gold frame, creating a dialogue between natural curves and geometric sharpness.',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=1200',
    details: ['18k Yellow Gold', 'South Sea Pearl (12mm)', 'Length: 18 inches', 'Signature Sharp-Edge Clasp']
  },
  {
    id: '2',
    name: 'Fracture Gold Band',
    category: 'Rings',
    price: '₹1,53,000',
    description: 'A solid gold band marked by deliberate, hand-carved geometric facets.',
    longDescription: 'The Fracture Gold Band challenges the traditional continuity of the ring. Each facet is hand-carved to catch the light at asymmetric angles, embodying the brutalist luxury aesthetic.',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=1200',
    details: ['18k Yellow Gold', 'Widest point: 8mm', 'Matte Finish Interior', 'Polished Facets']
  },
  {
    id: '3',
    name: 'Eclipse Drop Earrings',
    category: 'Earrings',
    price: '₹2,72,000',
    description: 'Minimalist golden discs that capture the fleeting shadow of an eclipse.',
    longDescription: 'Sophistication meets celestial inspiration. These earrings feature ultra-thin 18k gold discs that appear to float, casting subtle shadows on the neck. Designed for the high-end editorial gaze.',
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&q=80&w=1200',
    details: ['18k Yellow Gold', 'Weight: 4.5g per earring', 'Total Length: 45mm', 'Hand-polished to a Mirror Finish']
  },
  {
    id: '4',
    name: 'Monolith Bangle',
    category: 'Bracelets',
    price: '₹3,48,500',
    description: 'An architectural statement piece with a hidden hinge and sharp edges.',
    longDescription: 'The Monolith Bangle is more than jewelry—it is a sculpture for the wrist. Featuring 1px precise edges and a satin finish, it defines the silhouette of the wearer with authoritative presence.',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=1200',
    details: ['18k Yellow Gold', 'Width: 15mm', 'Invisible Magnetic Closure', 'Engraved Internal Serial Number']
  },
  {
    id: '5',
    name: 'Void Diamond Ring',
    category: 'Rings',
    price: '₹4,93,000',
    description: 'A floating diamond suspended in a geometric vacuum of 18k gold.',
    longDescription: 'Defying gravity and convention, the Void Diamond Ring uses a tension-style setting to hold a 1.5 carat ethical diamond. The design emphasizes the empty space as much as the physical form.',
    image: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80&w=1200',
    details: ['18k White Gold', '1.5 Carat Emerald Cut Diamond', 'Clarity: VS1', 'Color: F']
  },
  {
    id: '6',
    name: 'Linear Silk Scarf Ring',
    category: 'Rings',
    price: '₹80,750',
    description: 'A versatile accessory designed to anchor silk scarves with golden authority.',
    longDescription: 'Inspired by the heritage of Parisian luxury houses, this piece serves as both a sculptural statement ring and a functional anchor for fine silk textiles. A minimalist essential.',
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&q=80&w=1200',
    details: ['18k Yellow Gold', 'Interior Diameter: 21mm', 'Width: 12mm', 'Debossed Logo']
  }
];
