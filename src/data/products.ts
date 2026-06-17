import { Category, Product } from "@/types/product";

export const products: Product[] = [
  {
  id: '1',
  name: 'ProShot DSLR Camera X200',
  description: 'Capture stunning photos and videos with this high-performance DSLR camera, perfect for beginners and professionals alike.',
  price: 599.00,
  currency: 'USD',
  image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=800&fit=crop',
  images: [
    'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=800&fit=crop',
    'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&h=800&fit=crop',
    'https://images.unsplash.com/photo-1495427513693-3f1d1bcb51a3?w=800&h=800&fit=crop&q=80',
    'https://images.unsplash.com/photo-1519183071298-a2962be96c1c?w=800&h=800&fit=crop&q=80',
  ],
  category: 'electronics',
  slug: 'proshot-dslr-camera-x200',
  colors: ['Black'],
  sizes: [],
  stock: 25,
},
  {
  id: '2',
  name: 'ChronoLux Classic Wrist Watch',
  description: 'Elegant stainless steel wrist watch with a minimalist dial design, perfect for both formal and casual wear.',
  price: 120.00,
  currency: 'USD',
  image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=800&fit=crop',
  images: [
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=800&fit=crop',
    'https://images.unsplash.com/photo-1518544801976-3e159e50e5bb?w=800&h=800&fit=crop',
    'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=800&h=800&fit=crop&q=80',
    'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&h=800&fit=crop&q=80',
  ],
  category: 'watches',
  slug: 'chronolux-classic-wrist-watch',
  colors: ['Black', 'Silver', 'Gold', 'Rose Gold'],
  sizes: [],
  stock: 35,
},

  {
  id: '9',
  name: 'UrbanFlex Running Shoes',
  description: 'Lightweight and breathable running shoes designed for maximum comfort and performance during daily runs or workouts.',
  price: 75.00,
  currency: 'USD',
  image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=800&fit=crop',
  images: [
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=800&fit=crop',
    'https://images.unsplash.com/photo-1528701800489-20be3c4b2c9c?w=800&h=800&fit=crop',
    'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800&h=800&fit=crop&q=80',
    'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&h=800&fit=crop&q=80',
  ],
  category: 'shoes',
  slug: 'urbanflex-running-shoes',
  colors: ['Black', 'White', 'Blue', 'Red'],
  sizes: ['6', '7', '8', '9', '10', '11'],
  stock: 40,
},
  
 {
  id: '11',
  name: 'ProSmash Badminton Set',
  description: 'Lightweight and durable badminton gear set including racket-friendly design, perfect for beginners and casual players for outdoor and indoor play.',
  price: 28.00,
  currency: 'USD',
  image: 'https://images.unsplash.com/photo-1521412644187-c49fa049e84d?w=800&h=800&fit=crop',
  images: [
    'https://images.unsplash.com/photo-1521412644187-c49fa049e84d?w=800&h=800&fit=crop',
    'https://images.unsplash.com/photo-1599474924187-334a4ae5bd3c?w=800&h=800&fit=crop',
    'https://images.unsplash.com/photo-1624880357913-9c1c8b5c6d1b?w=800&h=800&fit=crop&q=80',
    'https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=800&h=800&fit=crop&q=80'
  ],
  category: 'sports',
  slug: 'prosmash-badminton-set',
  colors: ['Black', 'Red', 'Blue'],
  stock: 50,
},
  {
    id: '12',
    name: 'Acme Baseball Cap',
    description: 'Classic stylish cap for daily use',
    price: 9.00,
    currency: 'USD',
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&h=800&fit=crop',
    images: ['https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&h=800&fit=crop'],
    category: 'accessories',
    slug: 'acme-baseball-cap',
    colors: ['Black', 'Blue'],
    sizes: ['S', 'M', 'L'],
    stock: 25,
  },
  {
    id: '13',
    name: 'Acme Backpack Pro',
    description: 'Durable backpack for travel and school',
    price: 35.00,
    currency: 'USD',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=800&fit=crop',
    images: ['https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=800&fit=crop'],
    category: 'accessories',
    slug: 'acme-backpack-pro',
    colors: ['Black', 'Gray'],
    stock: 20,
  },
  {
    id: '14',
    name: 'Acme Water Bottle',
    description: 'Stainless steel insulated bottle',
    price: 22.00,
    currency: 'USD',
    image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?w=800&h=800&fit=crop',
    images: ['https://images.unsplash.com/photo-1523362628745-0c100150b504?w=800&h=800&fit=crop'],
    category: 'accessories',
    slug: 'acme-water-bottle',
    colors: ['Silver', 'Black'],
    stock: 45,
  },
  {
  id: '15',
  name: 'ArcticCore Men’s Jens Pant',
  description: 'Premium men’s jens pant designed for extreme cold weather. Features thick insulation, windproof outer shell, and thermal comfort for daily winter wear and outdoor adventures.',
  price: 85.00,
  currency: 'USD',
  image: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?w=800&h=800&fit=crop',
  images: [
    'https://images.unsplash.com/photo-1548883354-7622d03aca27?w=800&h=800&fit=crop',
    'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&h=800&fit=crop',
    'https://images.unsplash.com/photo-1520975693411-b4c0a6a0c5a1?w=800&h=800&fit=crop',
    'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=800&fit=crop'
  ],
  category: 'jens pant',
  slug: 'arcticcore-mens-winter-jens',
  colors: ['Black', 'Navy', 'Army Green', 'Charcoal'],
  sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  stock: 50,
},
  {
    id: '16',
    name: 'Acme Notebook',
    description: 'Premium quality writing notebook',
    price: 8.00,
    currency: 'USD',
    image: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=800&h=800&fit=crop',
    images: ['https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=800&h=800&fit=crop'],
    category: 'accessories',
    slug: 'acme-notebook',
    stock: 100,
  },
  {
  id: '17',
  name: 'Acme Socks Pack',
  description: 'Comfortable cotton socks set',
  price: 12.00,
  currency: 'USD',
  image: 'https://images.unsplash.com/photo-1582966772680-860e372bb558?auto=format&fit=crop&w=800&q=80',
  images: [
    'https://images.unsplash.com/photo-1582966772680-860e372bb558?auto=format&fit=crop&w=800&q=80', // Main: Rolled cotton socks pack
    'https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=800&q=80', // Hanging/Display view
    'https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=800&q=80', // Folded minimalist style
    'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80'  // Lifestyle/Texture closeup
  ],
  category: 'accessories',
  slug: 'acme-socks-pack',
  colors: ['White', 'Black'],
  sizes: ['S', 'M', 'L'],
  stock: 70,
},
  {
    id: '18',
    name: 'Acme Hoodie Lite',
    description: 'Lightweight hoodie for all seasons',
    price: 45.00,
    currency: 'USD',
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&h=800&fit=crop',
    images: ['https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&h=800&fit=crop'],
    category: 'shirts',
    slug: 'acme-hoodie-lite',
    colors: ['Gray', 'Blue'],
    sizes: ['S', 'M', 'L', 'XL'],
    stock: 30,
  },
 {
  id: '20',
  name: 'NovaBook Pro 14 Laptop',
  description: 'Ultra-slim and powerful laptop designed for productivity, coding, and everyday use. Features fast performance, long battery life, and a sharp Full HD display.',
  price: 899.00,
  currency: 'USD',
  image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
  images: [
    'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80', // Top view/Keyboard focus
    'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80', // Minimalist workspace view
    'https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?auto=format&fit=crop&w=800&q=80', // Dual screen/Productivity angle
    'https://images.unsplash.com/photo-1504707748692-419802cf939d?auto=format&fit=crop&w=800&q=80'  // Aesthetic desk setup view
  ],
  category: 'electronics',
  slug: 'novabook-pro-14-laptop',
  colors: ['Silver', 'Gray', 'Black'],
  sizes: [],
  stock: 25,
},

  
 {
  id: '21',
  name: 'Men’s Leather Money Bag Wallet',
  description: 'Premium men’s leather wallet designed for cash, cards, and coins. Slim, durable, and stylish for everyday formal and casual use.',
  price: 22.00,
  currency: 'USD',
  image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&h=800&fit=crop',
  images: [
    'https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&h=800&fit=crop',
    'https://images.unsplash.com/photo-1612810806695-30f7a4c5a3f7?w=800&h=800&fit=crop',
    'https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=800&h=800&fit=crop',
    'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&h=800&fit=crop'
  ],
  category: 'accessories',
  slug: 'mens-leather-money-bag-wallet',
  stock: 120,
},
  {
  "id": "22",
  "name": "ErgoFlex Pro Ergonomic Office Chair",
  "description": "Premium ergonomic office chair featuring high-density mesh backrest, adjustable lumbar support, and 3D padded armrests. Designed for maximum comfort during long working hours in corporate or home office environments.",
  "price": 189.99,
  "currency": "USD",
  "image": "https://images.unsplash.com/photo-1505797149-43b0069ec26b?auto=format&fit=crop&w=800&q=80",
  "images": [
    "https://images.unsplash.com/photo-1505797149-43b0069ec26b?auto=format&fit=crop&w=800&q=80", // Main: Premium ergonomic office chair front view
    "https://images.unsplash.com/photo-1580481072645-022f9a6dbf27?auto=format&fit=crop&w=800&q=80", // Modern office workspace context view
    "https://images.unsplash.com/photo-1562184560-a11b7cf7c866?auto=format&fit=crop&w=800&q=80", // Detailed mesh and lumbar support close-up
    "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80"  // Stylish executive office setup view
  ],
  "category": "office-furniture",
  "slug": "ergoflex-pro-ergonomic-office-chair",
  "colors": ["Matte Black", "Space Gray", "Classic Blue"],
  "sizes": ["Standard", "High-Back"],
  "stock": 25
},
  
  {
  id: '23',
  name: 'AeroShade Polarized Sunglasses',
  description: 'Premium polarized sunglasses offering full UV400 protection with a sleek lightweight frame for everyday outdoor style.',
  price: 35.00,
  currency: 'USD',
  image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&h=800&fit=crop',
  images: [
    'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&h=800&fit=crop',
    'https://images.unsplash.com/photo-1508296695146-257a814070b4?w=800&h=800&fit=crop',
    'https://images.unsplash.com/photo-1526178613552-2b45c6c302f0?w=800&h=800&fit=crop&q=80',
    'https://images.unsplash.com/photo-1520974735194-6b0c8b3a0b8d?w=800&h=800&fit=crop&q=80'
  ],
  category: 'sunglasses',
  slug: 'aeroshade-polarized-sunglasses',
  colors: ['Black', 'Brown', 'Gold Frame', 'Matte Black'],
  stock: 28,
},
{
  id: '24',
  name: 'VoltEdge Fast Charging Adapter',
  description: 'High-speed USB-C fast charging adapter with smart power delivery for safe and efficient charging of smartphones and devices.',
  price: 18.00,
  currency: 'USD',
  image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=800&h=800&fit=crop',
  images: [
    'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=800&h=800&fit=crop',
    'https://images.unsplash.com/photo-1601972602237-8c79241e468b?w=800&h=800&fit=crop',
    'https://images.unsplash.com/photo-1612810806695-30f7a4c5a3f7?w=800&h=800&fit=crop',
    'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=800&fit=crop'
  ],
  category: 'accessories',
  slug: 'voltedge-fast-charging-adapter',
  colors: ['Black', 'White'],
  stock: 100,
},
];

export const categories: Category[] = [
  { name: 'All', slug: 'all' },
  { name: 'Shirts', slug: 'shirts' },
  { name: 'Stickers', slug: 'stickers' },
];

export const getProductBySlug = (slug: string) => {
  return products.find(product => product.slug === slug);
};