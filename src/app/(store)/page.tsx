import Hero from '@/components/Hero/Hero';
import Categories from '@/components/Categories/Categories';
import FeaturedProducts from '@/components/FeaturedProducts/FeaturedProducts';
import ContactCTA from '@/components/ContactCTA/ContactCTA';
import Collections from '@/components/Collections/Collections';
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
