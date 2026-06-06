export interface Product {
  id: number;
  name: string;
  category: string;
  material: string;
  description: string;
  dimensions: string;
  price: string;
  rating: string;
  image: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: '30cm Kalash Design Brass Kuthu Vilakku',
    category: 'Diya / Oil Lamp',
    material: 'Grade-A Cast Brass',
    description:
      'Elevate your spiritual rituals with our premium 30cm Kalash Design Brass Kuthu Vilakku. As a true masterpiece of traditional craftsmanship, this 5-wick brass oil lamp is designed to bring auspicious vibes and prosperity to your home. Handcrafted from heavy, durable brass, it boasts a striking Mirror Polish finish that gleams under the flame.',
    dimensions: '10 x 30 x 15 cm | 2kg',
    price: '₹1,300/Kg',
    rating: '4.8/5 (24 Reviews)',
    image: '/images/image_01.jpg',
  },
  {
    id: 2,
    name: '30cm Peacock Design Brass Kuthu Vilakku',
    category: 'Traditional Oil Lamp',
    material: 'Premium Cast Brass (Mirror Polish Finish)',
    description:
      'Bring home peace, prosperity, and stunning traditional elegance with our 30cm Peacock Design Brass Kuthu Vilakku. Crafted from high-durability, solid brass, this premium 5-wick oil lamp features a unique 3-tier design and a high-glow Mirror Polish finish that gleams radiantly under the flame. Capped with a striking, intricately carved Peacock top design.',
    dimensions: '12.5 cm × 30 cm × 12.5 cm | 2 kg',
    price: '₹1,800/Kg',
    rating: '4.9/5 (18 Reviews)',
    image: '/images/image_01.jpg',
  },
  {
    id: 3,
    name: '150cm Peacock Design Brass Kuthu Vilakku',
    category: 'Traditional South Indian Kuthu Vilakku / Multi-Tiered Temple Oil Lamp (7-Wick)',
    material: '100% Pure, Premium-Grade Heavy Brass',
    description:
      'Bring grand divine majesty and sacred energy to your sacred spaces. Our magnificent Peacock Design Brass Kuthu Vilakku is a masterpiece of traditional metal craftsmanship, specifically designed for temple use, grand festivals, and spacious home alters.',
    dimensions: '10cm x 65cm x 10cm | 2.0kg (Min Weight)',
    price: '₹1,500/Kg',
    rating: '4.7/5 (42 Reviews)',
    image: '/images/image_03.jpg',
  },
  {
    id: 4,
    name: '60cm Kalash Design Brass Kuthu Vilakku',
    category: 'Traditional South Indian Kuthu Vilakku / Multi-Tiered Temple Brass Oil Lamp (5-Wick)',
    material: '100% Pure, Premium-Grade Heavy Brass',
    description:
      'Infuse your sacred spaces with divine harmony, abundance, and timeless spiritual elegance. Our magnificent 60cm Kalash Design Brass Kuthu Vilakku is a masterpiece of traditional metal artistry, expertly engineered for temple environments.',
    dimensions: '7.5cm x 35cm x 7.5cm | 2.0kg (Min Weight)',
    price: '₹1,200/Kg',
    rating: '4.6/5 (12 Reviews)',
    image: '/images/image_04.jpg',
  },
  {
    id: 5,
    name: '40cm Lotus Design Brass Kuthu Vilakku',
    category: 'Traditional South Indian Kuthu Vilakku / Multi-Tiered Brass Diya (5-Wick)',
    material: '100% Pure, Premium-Grade Heavy Brass',
    description:
      'Invite pure divine grace, serenity, and timeless spiritual elegance into your home. Our exquisite 40cm Lotus Design Brass Kuthu Vilakku is a stunning masterpiece of traditional metal craftsmanship, perfectly sized to elevate your home puja room.',
    dimensions: '7.5cm x 40cm x 7.5cm | 2.0kg (Min Weight)',
    price: '₹1,400/Kg',
    rating: '5.0/5 (31 Reviews)',
    image: '/images/placeholder.jpg',
  },
  {
    id: 6,
    name: '32cm Kalash Design Brass Kuthu Vilakku',
    category: 'Kuthu Vilakku / Kerala Oil Lamp (5 Wicks, 3 Tiers)',
    material: 'High-Quality Brass',
    description:
      'Illuminate your sacred spaces with our 32cm Traditional Brass Kuthu Vilakku. This exquisite 3-tier brass oil lamp features 5 wicks to create a serene and spiritual ambiance during daily rituals, festivals, and special ceremonies.',
    dimensions: '10 cm x 32 cm x 10 cm',
    price: '₹1,320/Piece',
    rating: '4.5/5 (9 Reviews)',
    image: '/images/image_06.jpg',
  },
  {
    id: 7,
    name: '26 Inch Square Kuthu Velakku',
    category: 'Single-Tier Peacock Kuthu Vilakku with Square Base (5 Wicks, Fixed Assembly)',
    material: 'High-Quality Premium Brass',
    description:
      'An exquisite traditional brass oil lamp featuring an elegant, majestic Peacock (Mayil) top design and a sturdy, stable square base. Crafted with a single-tier structure holding 5 wick slots, this lamp features a brilliant mirror polish finish.',
    dimensions: '7.5 cm x 50.8 cm x 7.5 cm | Above 3 kg',
    price: '₹1,800/Kg',
    rating: '4.5/5 (9 Reviews)',
    image: '/images/placeholder.jpg',
  },
  {
    id: 8,
    name: 'Brass Kuthu Vilakku (Nachiyar Kovil)',
    category: 'Single-Tier Nachiyar Kovil Kuthu Vilakku (5 Wicks, Traditional Oil Lamp)',
    material: 'Premium Quality GI-Tagged Nachiyar Kovil Brass',
    description:
      'Bring home the divine heritage of Kumbakonam with the authentic Nachiyar Kovil Kuthu Vilakku. Handcrafted by master artisans, this traditional brass oil lamp features a stunning single-tier design with 5 wick slots.',
    dimensions: '7.5 cm x 30 cm x 7.5 cm | 800g to 1.5kg',
    price: '₹1,500/Piece',
    rating: '4.5/5 (9 Reviews)',
    image: '/images/placeholder.jpg',
  },
  {
    id: 9,
    name: '5feet Lakshmi Amman Design Brass Kuthu Vilakku Set',
    category: '3-Tier Goddess Lakshmi Amman Kuthu Vilakku Set',
    material: 'Premium Heavy-Duty Traditional Brass',
    description:
      'A majestic and grand traditional brass oil lamp pair designed for sacred spaces. This magnificent set features an intricately sculpted Lakshmi Amman (Goddess Lakshmi) top design, symbolizing wealth, prosperity, and divine blessings.',
    dimensions: '10 cm x 152.4 cm x 10 cm | 2 Kg',
    price: '₹2,000/Kg',
    rating: '4.5/5 (9 Reviews)',
    image: '/images/placeholder.jpg',
  },
  {
    id: 17,
    name: '60cm Traditional Brass Kuthu Vilakku Set',
    category: '3-Tier Multi-Wick Kuthu Vilakku Set (5 Wicks, Traditional Oil Lamp Pair)',
    material: 'High-Grade Premium Brass',
    description:
      'A beautiful and elegant pair of traditional oil lamps designed to add spiritual warmth and charm to your sacred spaces. Standing at a prominent height of 60cm, this matching set features a stately 3-tier structure with 5 wick slots.',
    dimensions: '10 cm x 60 cm x 10 cm | 2.5 kg to 4 kg',
    price: '₹1,500/Pair (Min: 2 Pairs)',
    rating: '4.5/5 (9 Reviews)',
    image: '/images/placeholder.jpg',
  },
  {
    id: 18,
    name: '60cm Lotus Design Brass Kuthu Vilakku',
    category: '3-Tier Lotus Top Traditional Oil Lamp (Silver Finish)',
    material: 'Premium Brass with High-Grade Silver Plating',
    description:
      'A stunning traditional oil lamp that combines the sacred "Thamarai" (Lotus) design with a contemporary, high-luster silver aesthetic. The Lotus top symbolizes purity and prosperity, making it a powerful spiritual addition to any space.',
    dimensions: '10 cm x 60 cm x 10 cm | 2 Kg',
    price: '₹1,400/Kg (Min: 2 Kg)',
    rating: '4.5/5 (9 Reviews)',
    image: '/images/placeholder.jpg',
  },
  {
    id: 23,
    name: 'Brass Lotus Diya 5 Inch',
    category: 'Single-Wick Floral Table Diya (Lotus Motif / Pooja Diya)',
    material: 'High-Quality Solid Brass / Premium Casting Metal',
    description:
      'A beautifully designed single-wick floral oil lamp that captures the timeless elegance of a blooming lotus flower. This exquisite table diya features intricately detailed petals arranged in a classic floral motif, symbolizing purity, divinity, and peace.',
    dimensions: '12.7 cm x 5 cm x 12.7 cm | 150g to 300g',
    price: '₹500/Piece (Min: 2)',
    rating: '4.5/5 (9 Reviews)',
    image: '/images/placeholder.jpg',
  },
  {
    id: 25,
    name: '750ml Brass Kalash',
    category: 'Sacred Ritual Vessel (Lota Kalash)',
    material: 'Standard Grade Premium Brass',
    description:
      'A beautifully crafted, traditional ritual vessel designed for sacred ceremonies, daily prayers, and festive occasions. This elegant Lota Kalash features an intricately engraved pattern around its body, showcasing fine traditional craftsmanship.',
    dimensions: '11 cm x 12 cm x 11 cm',
    price: '₹5,000/Piece (Min: 15)',
    rating: '4.5/5 (9 Reviews)',
    image: '/images/placeholder.jpg',
  },
  {
    id: 27,
    name: '6 Inch Kamatchi Amman Diya',
    category: 'Single-Wick Kamatchi Amman Diya',
    material: 'High-Grade Solid Brass',
    description:
      'An auspicious and deeply revered traditional oil lamp featuring the sacred engraving of Goddess Kamatchi Amman (Kamatchi Vilakku). Beautifully sculpted to capture divine details, this iconic lamp represents prosperity, wisdom, and spiritual illumination.',
    dimensions: '15.24 cm (6 inches) | 250 g',
    price: '₹900/Piece (Min: 2)',
    rating: '4.5/5 (9 Reviews)',
    image: '/images/placeholder.jpg',
  },
  {
    id: 32,
    name: 'Premium Designer Brass Pipe Lamp',
    category: 'Designer Industrial-Chic Brass Pipe Lamp',
    material: 'High-Grade Industrial Brass Tubing & Heavy-Duty Cast Base',
    description:
      'A stunning fusion of traditional warmth and contemporary design, this premium brass pipe lamp serves as an exquisite architectural lighting piece. Crafted using high-grade, durable brass piping polished to a flawless finish.',
    dimensions: 'Custom Floor-to-Table scale',
    price: '₹4,299/Piece (Min: 2)',
    rating: '4.5/5 (9 Reviews)',
    image: '/images/placeholder.jpg',
  },
];
