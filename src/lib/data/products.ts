import { StaticImageData } from 'next/image';
import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
  image21,
  image22,
  image23,
  image24,
  image25,
  image26,
} from '@/assets';

export interface Product {
  id: number;
  name: string;
  category: string;
  material: string;
  description: string;
  dimensions: string;
  price: string;
  rating: string;
  image: StaticImageData | string | any;
}

export const products: Product[] = [
  {
    id: 1,
    name: '30cm Kalash Design Brass Kuthu Vilakku',
    category: 'Kuthu Vilakku',
    material: 'Grade-A Cast Brass',
    description:
      'Elevate your spiritual rituals with our premium 30cm Kalash Design Brass Kuthu Vilakku. As a true masterpiece of traditional craftsmanship, this 5-wick brass oil lamp is designed to bring auspicious vibes and prosperity to your home. Handcrafted from heavy, durable brass, it boasts a striking Mirror Polish finish that gleams under the flame. Featuring a sacred Kalash top design that symbolizes divine blessings and abundance, this traditional brass diya is the perfect choice for home puja decor, festive gifting, and housewarming ceremonies.',
    dimensions: '10 x 30 x 15 cm |2kg',
    price: '₹1,300/Kg',
    rating: '4.8/5 (24 Reviews)',
    image: image1,
  },
  {
    id: 2,
    name: '30cm Peacock Design Brass Kuthu Vilakku',
    category: 'Kuthu Vilakku',
    material: 'Premium Cast Brass (Mirror Polish Finish)',
    description:
      'Punchy & High-Conversion (Best for e-commerce & mobile shoppers) Bring home peace, prosperity, and stunning traditional elegance with our 30cm Peacock Design Brass Kuthu Vilakku. Crafted from high-durability, solid brass, this premium 5-wick oil lamp features a unique 3-tier design and a high-glow Mirror Polish finish that gleams radiantly under the flame. Capped with a striking, intricately carved Peacock top design, it serves as a powerful symbol of auspicious energy and abundance. Perfect for daily prayers, grand festive celebrations, or as a centerpiece for your entryway, this traditional brass lamp is a must-have spiritual essential.',
    dimensions: '12.5 cm × 30 cm × 12.5 cm| 2 kg',
    price: '₹1,800 / Kg',
    rating: '4.9/5 (18 Reviews)',
    image: image2,
  },
  {
    id: 3,
    name: '150cm Peacock Design Brass Kuthu Vilakku',
    category: 'Kuthu Vilakku',
    material:
      'Material: 100% Pure, Premium-Grade Heavy Brass  Finish: High-Glow Mirror Polish (Tarnish-Resistant Coating)',
    description:
      'Bring grand divine majesty and sacred energy to your sacred spaces.  Our magnificent Peacock Design Brass Kuthu Vilakku is a masterpiece of traditional metal craftsmanship, specifically designed for temple use, grand festivals, and spacious home alters. Handcrafted from premium, heavy-duty brass, this impressive lamp features a unique 3-tier structure capable of holding 7 wicks, ensuring a spectacular, radiant aura when lit.  The apex of the lamp is crowned with an intricately detailed, majestic Peacock (Mayil) design—a timeless symbol of grace, spiritual awakening, and prosperity. Supported by a stable base and finished with a brilliant, flawless Mirror Polish, this grand Vilakku is an heirloom-quality piece built to radiate divine light for generations.',
    dimensions: '10cm x 65cm x 10cm | 2.0kg (Minimum Weight)',
    price: '',
    rating: '4.7/5 (42 Reviews)',
    image: image3,
  },
  {
    id: 4,
    name: '60cm Kalash Design Brass Kuthu Vilakku',
    category: 'Kuthu Vilakku',
    material:
      'Material: 100% Pure, Premium-Grade Heavy Brass  Finish: High-Glow Mirror Polish (Tarnish-Resistant Coating)',
    description:
      'Infuse your sacred spaces with divine harmony, abundance, and timeless spiritual elegance.  Our magnificent 60cm Kalash Design Brass Kuthu Vilakku is a masterpiece of traditional metal artistry, expertly engineered for temple environments, grand festivals, and large home alters. Handcrafted from heavy-duty, premium-grade brass, this impressive lamp features a beautifully balanced 3-tier structure designed to hold 5 wicks, creating a radiant, warm aura when illuminated.  The apex of the lamp is crowned with a highly detailed, sacred Kalash top design—the ultimate Vedic symbol of prosperity, divine blessings, and cosmic energy. Coated in a flawless, brilliant Mirror Polish that beautifully reflects the flame, this durable, heirloom-quality Vilakku is built to radiate sacred light for generations.',
    dimensions: '7.5cm x 35cm x 7.5cm | 2.0kg (Minimum Weight)',
    price: '₹1,200 / Kg',
    rating: '4.6/5 (12 Reviews)',
    image: image4,
  },
  {
    id: 5,
    name: '40cm Lotus Design Brass Kuthu Vilakku',
    category: 'Kuthu Vilakku',
    material:
      'Material: 100% Pure, Premium-Grade Heavy Brass  Finish: High-Glow Mirror Polish (Tarnish-Resistant Coating)',
    description:
      'Invite pure divine grace, serenity, and timeless spiritual elegance into your home.  Our exquisite 40cm Lotus Design Brass Kuthu Vilakku is a stunning masterpiece of traditional metal craftsmanship, perfectly sized to elevate your home puja room, entryways, and festive decor. Handcrafted from heavy-duty, premium-grade brass, this beautiful lamp features a balanced 3-tier structure that holds 5 wicks, casting a radiant and peaceful glow when illuminated.  The apex of the lamp is crowned with a beautifully detailed, sacred Lotus top design—the ultimate symbol of purity, spiritual awakening, and prosperity associated with Goddess Lakshmi. Finished with a flawless, brilliant Mirror Polish that beautifully reflects the warm flame, this durable Vilakku is a timeless spiritual essential and an heirloom-quality centerpiece.',
    dimensions: '7.5cm x 40cm x 7.5cm | 2.0kg (Minimum Weight)',
    price: '₹ 1,400 / Kg',
    rating: '5.0/5 (31 Reviews)',
    image: image5,
  },
  {
    id: 6,
    name: '32cm Kalash Design Brass Kuthu Vilakku',
    category: 'Kuthu Vilakku',
    material: 'High-Quality Brass',
    description:
      'Concise & Punchy (Best for Marketplaces like Amazon, Flipkart, or Etsy) Product Title: Premium Brass Kuthu Vilakku - 32cm Kalash Top Traditional Oil Lamp for Puja & Decor  Description: Illuminate your sacred spaces with our 32cm Traditional Brass Kuthu Vilakku. This exquisite 3-tier brass oil lamp features 5 wicks to create a serene and spiritual ambiance during daily rituals, festivals, and special ceremonies.  Crafted with an elegant Kalash top design and finished with a brilliant mirror polish, this lamp blends traditional Indian heritage with timeless craftsmanship. Whether you are looking for authentic puja items, stunning festive decor, or a meaningful housewarming gift, this durable brass vilakku is the perfect choice.',
    dimensions: '10 cm x 32 cm x 10 cm (Base Diameter: 10 cm | Height: 32 cm)',
    price: '₹1,320/Piece',
    rating: '4.5/5 (9 Reviews)',
    image: image6,
  },
  {
    id: 7,
    name: '26 Inch Square Kuthu Velakku',
    category: 'Kuthu Vilakku',
    material: 'High-Quality Premium Brass',
    description:
      'An exquisite traditional brass oil lamp featuring an elegant, majestic Peacock (Mayil) top design and a sturdy, stable square base. Crafted with a single-tier structure holding 5 wick slots, this lamp features a brilliant mirror polish finish. Its majestic presence makes it perfect for grand stage decorations, temple rituals, weddings, festivals, and spiritual home decor.',
    dimensions: '7.5 cm x 50.8 cm x 7.5 cm| Above 3 kg',
    price: '₹ 1,800 / Kg',
    rating: '4.5/5 (9 Reviews)',
    image: image7,
  },
  {
    id: 8,
    name: 'Brass Kuthu Vilakku',
    category: 'Kuthu Vilakku',
    material: 'Premium Quality GI-Tagged Nachiyar Kovil Brass',
    description:
      'Bring home the divine heritage of Kumbakonam with the authentic Nachiyar Kovil Kuthu Vilakku. Handcrafted by master artisans, this traditional brass oil lamp features a stunning single-tier design with 5 wick slots that create a warm, spiritual glow. Finished with a brilliant, long-lasting mirror polish, this auspicious lamp is perfect for elevating your home puja room, festive celebrations, grand stage decors, weddings, and temple rituals. Known for its superior craftsmanship, it makes a deeply meaningful heirloom or housewarming gift.',
    dimensions: '7.5 cm x 30 cm x 7.5 cm |800g to 1.5kg',
    price: '₹ 1,500 / Piece',
    rating: '4.5/5 (9 Reviews)',
    image: image8,
  },
  {
    id: 9,
    name: '5feet Lakshmi Amman Design Brass Kuthu Vilakku Set',
    category: 'Kuthu Vilakku',
    material: 'Premium Heavy-Duty Traditional Brass',
    description:
      'A majestic and grand traditional brass oil lamp pair designed for sacred spaces. This magnificent set features an intricately sculpted Lakshmi Amman (Goddess Lakshmi) top design, symbolizing wealth, prosperity, and divine blessings. Built with a sturdy 3-tier structure and 5 wick slots, the lamp set is finished with a flawless, high-grade mirror polish. Its grand proportions make it exceptionally well-suited for temple installations, grand festivals, weddings, and premium traditional decor.',
    dimensions: '10 cm x 152.4 cm x 10 cm |  2 Kg',
    price: '₹  2,000 / Kg',
    rating: '4.5/5 (9 Reviews)',
    image: image9,
  },
  {
    id: 10,
    name: '5 feet Peacock Design Brass Kuthu Vilakku Set',
    category: 'Kuthu Vilakku',
    material: 'Premium Heavy-Duty Traditional Brass',
    description:
      'A grand and majestic traditional brass oil lamp pair designed to bring an aura of royal elegance to sacred spaces. This magnificent set features a beautifully sculpted Peacock (Mayil) top design, symbolizing grace, beauty, and auspicious beginnings. Engineered with a stately 3-tier structure and 7 wick slots for a brighter, more magnificent glow, the lamp set is finished with a flawless, high-grade mirror polish. Its towering presence makes it perfect for temple installations, grand festivals, traditional weddings, and premium corporate or stage decor.',
    dimensions: '10 cm x 152.4 cm x 10 cm | 2 Kg',
    price: '₹ 2,000 / Kg',
    rating: '4.5/5 (9 Reviews)',
    image: image10,
  },
  {
    id: 11,
    name: '5feet Kalash Design Brass Kuthu Vilakku Set',
    category: 'Kuthu Vilakku',
    material: 'Premium Heavy-Duty Traditional Brass',
    description:
      'A grand and auspicious traditional brass oil lamp pair crafted to bring divine grace and positive energy to any sacred environment. This magnificent set features an elegantly sculpted Kalash (Sacred Pot) top design, symbolizing abundance, purity, and spiritual prosperity. Built with a stately 3-tier structure and 7 wick slots for an enhanced, brilliant illumination, the lamp set is finished with a pristine, high-grade mirror polish. Its commanding presence makes it an exceptional choice for temple sanctums, major festivals, grand weddings, and premium traditional home decor.',
    dimensions: '10 cm x 152.4 cm x 10 cm | 2 Kg',
    price: '₹ 2,000 / Kg',
    rating: '4.5/5 (9 Reviews)',
    image: image11,
  },
  {
    id: 12,
    name: '2feet Square Kuthu Velakku',
    category: 'Kuthu Vilakku',
    material: 'Premium Heavy-Duty Traditional Brass',
    description:
      'A stunning, heavyweight traditional brass oil lamp designed with a unique, highly stable square base that adds a modern structural twist to a classic heritage item. This magnificent lamp features an expansive 5-tier structure equipped with 5 wick slots per tier, delivering a beautiful, towering glow. Finished to perfection with a pristine mirror polish, its premium build makes it highly versatile—perfect for elegant home puja rooms, traditional weddings, grand stage decors, festivals, and temple installations.',
    dimensions: '15 cm x 60 cm to 76 cm x 15 cm |2 Kg',
    price: '₹ 1,700 / Kg',
    rating: '4.5/5 (9 Reviews)',
    image: image12,
  },
  {
    id: 13,
    name: 'Kuthu Vilakku In 2 Feet Top Peacock',
    category: 'Kuthu Vilakku',
    material: 'Premium Heavy-Duty Traditional Brass',
    description:
      'A stunning, heavyweight traditional brass oil lamp designed with a unique, highly stable square base that adds a modern structural twist to a classic heritage item. This magnificent lamp features an expansive 5-tier structure equipped with 5 wick slots per tier, delivering a beautiful, towering glow. Finished to perfection with a pristine mirror polish, its premium build makes it highly versatile—perfect for elegant home puja rooms, traditional weddings, grand stage decors, festivals, and temple installations.',
    dimensions: '15 cm x 60 cm to 76 cm x 15 cm |  2 Kg',
    price: '₹ 1,700 / Kg',
    rating: '4.5/5 (9 Reviews)',
    image: image13,
  },
  {
    id: 14,
    name: 'Brass Leaf Lamp',
    category: 'Kuthu Vilakku',
    material: 'Premium Heavy-Duty Traditional Brass',
    description:
      'A stunning, heavyweight traditional brass oil lamp designed with a unique, highly stable square base that adds a modern structural twist to a classic heritage item. This magnificent lamp features an expansive 5-tier structure equipped with 5 wick slots per tier, delivering a beautiful, towering glow. Finished to perfection with a pristine mirror polish, its premium build makes it highly versatile—perfect for elegant home puja rooms, traditional weddings, grand stage decors, festivals, and temple installations.',
    dimensions: '15 cm x 60 cm to 76 cm x 15 cm |11 kg to 12 kg',
    price: '₹ 1,700 / Kg',
    rating: '4.5/5 (9 Reviews)',
    image: image14,
  },
  {
    id: 15,
    name: '60cm Traditional Brass Kuthu Vilakku Set',
    category: 'Silver Kuthu Vilakku',
    material:
      'High-Grade Premium Brass (Note: While standard specifications list a classic brass build, custom metallic finishes are available upon request)',
    description:
      'A beautiful and elegant pair of traditional oil lamps designed to add spiritual warmth and charm to your sacred spaces. Standing at a prominent height of 60cm, this matching set features a stately 3-tier structure with 5 wick slots on the burner plate, casting a serene and comprehensive glow. Finished to a high-grade, brilliant mirror polish, this durable set is perfectly suited for temple altars, home puja rooms, festive decor, and wedding ceremonies.',
    dimensions: '10 cm x 60 cm x 10 cm |2.5 kg to 4 kg',
    price: '₹ 1,500 / Pair (Minimum Order Quantity: 2 Pairs)',
    rating: '4.5/5 (9 Reviews)',
    image: image15,
  },
  {
    id: 16,
    name: '60cm Lotus Design Brass Kuthu Vilakku',
    category: 'Silver Kuthu Vilakku',
    material: 'Premium Brass with High-Grade Silver Plating (or German Silve',
    description:
      'Premium Brass with High-Grade Silver Plating (or German Silver)  Description: A stunning traditional oil lamp that combines the sacred "Thamarai" (Lotus) design with a contemporary, high-luster silver aesthetic. The Lotus top symbolizes purity and prosperity, making it a powerful spiritual addition to any space. Its 3-tier structure and 5-wick design are complemented by a brilliant mirror-finish silver polish, offering a sophisticated alternative to traditional gold-toned brass. This lamp is highly preferred for modern home decor, premium wedding gifting, and luxury temple installations.',
    dimensions: '10 cm x 60 cm x 10 cm |  2 Kg',
    price: '₹ 1,400 / Kg (Minimum Order Quantity: 2 Kg)',
    rating: '4.5/5 (9 Reviews)',
    image: image16,
  },
  {
    id: 17,
    name: '65cm Kalash Design Brass Kuthu Vilakku',
    category: 'Silver Kuthu Vilakku',
    material: 'Premium Brass with High-Grade Silver Plating / German Silver Base',
    description:
      'An elegant and auspicious pair of traditional oil lamps that beautifully blends sacred heritage with a contemporary silver aesthetic. Standing at a prominent height of 65cm, each lamp features a beautifully sculpted Kalash (Sacred Pot) top design, symbolizing purity, abundance, and divine blessings. Engineered with a graceful 3-tier structure and 5 wick slots, the pair is finished to a brilliant, high-luster mirror polish. This stunning silver-toned set serves as a perfect centerpiece for modern home decor, daily puja rooms, traditional weddings, and premium festive gifting.',
    dimensions: '10 cm x 65 cm x 10 cm | 3 kg to 4.5 kg',
    price: '₹ 1,600 / Pair (Minimum Order Quantity: 2 Pairs)',
    rating: '4.5/5 (9 Reviews)',
    image: image17,
  },
  {
    id: 18,
    name: '60cm Kalash Design Brass Kuthu Vilakku',
    category: 'Silver Kuthu Vilakku',
    material: 'Premium Brass with High-Grade Silver Plating / German Silver Base',
    description:
      'A magnificent traditional oil lamp that elegantly fuses sacred iconography with a contemporary silver luster. Featuring a beautifully sculpted Kalash (Sacred Pot) top design that represents purity, abundance, and positive energy, this lamp serves as a powerful spiritual centerpiece. It is engineered with a stable 3-tier structure holding 5 wick slots to cast a balanced, serene glow. Finished with a pristine, high-luster mirror polish, this durable lamp is an exceptional choice for temple altars, traditional ceremonies, major festivals, and elegant home decor.',
    dimensions: '7.5 cm x 60 cm x 7.5 cm | 1.5 kg to 2.5 kg',
    price: '₹ 1,200 / Kg (Minimum Order Quantity: 2 Kg)',
    rating: '4.5/5 (9 Reviews)',
    image: image18,
  },
  {
    id: 19,
    name: '50cm Peacock Design Brass Kuthu Vilakku Set',
    category: 'Silver Kuthu Vilakku',
    material: 'Premium Brass with High-Grade Silver Plating / German Silver Base',
    description:
      'A beautiful and majestic pair of traditional oil lamps crafted to bring royal elegance and spiritual brightness to your sacred spaces. Each 50cm lamp features an intricately sculpted Peacock (Mayil) top design, symbolizing grace, beauty, and auspicious new beginnings. Designed with a balanced 3-tier structure and 5 wick slots, the pair is finished with a flawless, high-luster silver mirror polish. This stunning silver-toned set offers a sophisticated look, making it a perfect choice for temple altars, traditional weddings, festive home decor, and premium heirloom gifting.',
    dimensions: '10 cm x 50 cm x 10 cm | 2 Kg',
    price: '₹ 1,300 / Kg (Minimum Order Quantity: 2 Kg)',
    rating: '4.5/5 (9 Reviews)',
    image: image19,
  },
  {
    id: 20,
    name: 'Brass Lotus Diya 5 Inch',
    category: 'Metal Diya',
    material: 'High-Quality Solid Brass / Premium Casting Metal',
    description:
      ': A beautifully designed single-wick floral oil lamp that captures the timeless elegance of a blooming lotus flower. This exquisite table diya features intricately detailed petals arranged in a classic floral motif, symbolizing purity, divinity, and peace. Finished with a rich, gleaming golden polish, it creates a warm, serene, and welcoming ambiance. Its compact 5-inch size makes it highly versatile, serving as an ideal accent piece for daily home puja altars, festive decorations (like Diwali and Navratri), wedding centerpieces, office reception areas, and traditional gifting.',
    dimensions: '12.7 cm x 5 cm x 12.7 cm | 150g to 300g per piece',
    price: '₹ 500 / Piece (Minimum Order Quantity: 2 Pieces)',
    rating: '4.5/5 (9 Reviews)',
    image: image20,
  },
  {
    id: 21,
    name: 'Brass Lotus Diya 3 Inch',
    category: 'Metal Diya',
    material: 'High-Quality Solid Brass / Premium Casting Metal',
    description:
      ': A charming, compactly designed single-wick floral oil lamp shaped like a beautifully blooming lotus flower. This elegant table diya features finely detailed petals arranged in a classic floral motif, symbolizing purity, divinity, and peace. Finished with a brilliant, rich golden polish, it creates a warm and serene ambiance. Its delicate 3-inch size makes it perfect for compact home puja altars, personal meditation spaces, festive tabletop decor, wedding favor gifting, and traditional celebrations.',
    dimensions: '7.62 cm x 3.8 cm x 7.62 cm| 100g to 200g',
    price: '₹ 350 / Piece (Minimum Order Quantity: 2 Pieces)',
    rating: '4.5/5 (9 Reviews)',
    image: image21,
  },
  {
    id: 22,
    name: '750ml Brass Kalash',
    category: 'Brass Kalash',
    material: 'Standard Grade Premium Brass',
    description:
      'A beautifully crafted, traditional ritual vessel designed for sacred ceremonies, daily prayers, and festive occasions. This elegant Lota Kalash features an intricately engraved pattern around its body, showcasing fine traditional craftsmanship. Finished with a sophisticated, subtle matt finish, it offers a contemporary look while resisting fingerprints and tarnishing. With a practical 750 ml capacity, this auspicious vessel is ideal for holding sacred water (charanamrit) during temple rituals, home puja, housewarming ceremonies (Griha Pravesh), and festive decor setups.',
    dimensions: '11 cm x 12 cm x 11 cm | Mouth Diameter: Approx. 8 cm',
    price: '₹ 5,000 / Piece (Minimum Order Quantity: 15 Pieces)',
    rating: '4.5/5 (9 Reviews)',
    image: image22,
  },
  {
    id: 23,
    name: '6 Inch Brass Diya',
    category: 'Brass Diya',
    material: 'High-Grade Solid Brass (Premium Peetal)',
    description:
      'An auspicious and deeply revered traditional oil lamp featuring the sacred engraving of Goddess Kamatchi Amman (Kamatchi Vilakku). Beautifully sculpted to capture divine details, this iconic lamp represents prosperity, wisdom, and spiritual illumination. Designed for a single long-lasting wick, it creates a serene, protective, and blessed aura in its surroundings. Its classic 6-inch stature makes it a mandatory and perfect centerpiece for every home puja altar, new business inaugurations, housewarming rituals, and traditional festive setups.',
    dimensions:
      'Base Width: Approx. 8 cm | Total Height: 15.24 cm (6 inches) | Depth: Approx. 8 cm |250 g per piece (Solid brass casting)',
    price: '₹ 900 / Piece (Minimum Order Quantity: 2 Pieces)',
    rating: '4.5/5 (9 Reviews)',
    image: image23,
  },
  {
    id: 24,
    name: '4 Inch Brass Diya',
    category: 'Brass Diya',
    material: 'High-Grade Solid Brass (Premium Peetal)',
    description:
      'A classic and elegantly simple single-wick traditional oil lamp that brings an aura of peace and timeless tradition to any space. This 4-inch Samai diya features a clean, plain, and minimalistic design with a beautifully polished finish that radiates a warm golden glow. Perfectly proportioned with a sturdy base, it is designed for a single long-lasting wick. Its compact and versatile size makes it excellent for daily home rituals, desktop altars, festive decorations (like Diwali lights), and auspicious occasions.',
    dimensions:
      'Approx. 6 cm | Total Height: 10.16 cm (4 inches) | Depth: Approx. 6 cm |250 g per piece (Solid brass casting)',
    price: '₹ 500 / Piece (Minimum Order Quantity: 2 Pieces)',
    rating: '4.5/5 (9 Reviews)',
    image: image24,
  },
  {
    id: 25,
    name: '2-Feet (60cm) Traditional Brass Kuthu Vilakku',
    category: 'Brass Kuthu Vilakku',
    material: 'High-Grade Solid Brass',
    description:
      'A magnificent and imposing traditional oil lamp meticulously crafted to bring an aura of grandeur, divinity, and peace to any space. Standing at a majestic height of 2 feet (60cm), this stately lamp features an elegant 5-tier structure and 5 wick slots, casting a stunningly balanced and continuous glow. Finished to perfection with a flawless, brilliant mirror polish, it effortlessly catches the light. This highly versatile, premium-quality lamp is an outstanding centerpiece choice for home altars, grand temple rituals, festive celebrations, corporate stages, and traditional wedding decors.',
    dimensions:
      '15 cm x 60 cm x 15 cm (Base Diameter: 15 cm | Total Height: 60 cm / 2 Feet)  | 1.5 kg to 2.0 kg per piece',
    price: '₹ 1,800 / Piece (Minimum Order Quantity: 2 Pieces)',
    rating: '4.5/5 (9 Reviews)',
    image: image25,
  },
  {
    id: 26,
    name: 'Premium Designer Brass Pipe Lamp',
    category: 'New Items Pipe Lamp,',
    material: 'High-Grade Industrial Brass Tubing & Heavy-Duty Cast Base',
    description:
      'A stunning fusion of traditional warmth and contemporary design, this premium brass pipe lamp serves as an exquisite architectural lighting piece. Crafted using high-grade, durable brass piping polished to a flawless finish, it provides a unique industrial yet luxurious aesthetic. Its structural integrity is anchored by a heavy, stable base, ensuring it stands securely. Ideal for sophisticated home interiors, upscale office reception areas, luxury hotel lounges, or boutique decor setups, this designer lamp effortlessly enhances any modern ambiance.',
    dimensions:
      'Custom/Standard Floor-to-Table scale (Specific dimensions available upon request, engineered for optimal space layout)',
    price: '₹ 4,299 / Piece (Minimum Order Quantity: 2 Pieces)',
    rating: '4.5/5 (9 Reviews)',
    image: image26,
  },
];
