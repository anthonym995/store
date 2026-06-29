import Hero from '@/components/sections/Hero/Hero';
import Categories from '@/components/sections/Categories/Categories';
import FeaturedProducts from '@/components/sections/FeaturedProducts/FeaturedProducts';
import ContactCTA from '@/components/sections/ContactCTA/ContactCTA';
import Collections from '@/components/sections/Collections/Collections';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home | E.V. Brassware',
  description:
    'Explore our exquisite collection of premium cast brassware, sacred ritual vessels, and timeless lighting masterpieces.',
  openGraph: {
    title: 'Home | E.V. Brassware',
    description:
      'Explore our exquisite collection of premium cast brassware, sacred ritual vessels, and timeless lighting masterpieces.',
    images: ['/logo.png'],
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Collections />
      <ContactCTA />
    </>
  );
}
