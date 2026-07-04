import Hero from '@/components/sections/Hero';
import OurCollections from '@/components/sections/OurCollections';
import FeaturedProducts from '@/components/sections/FeaturedProducts';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import ContactCTA from '@/components/sections/ContactCTA';
import FeaturedCollections from '@/components/sections/FeaturedCollections';
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
      <OurCollections />
      <FeaturedProducts />
      <WhyChooseUs />
      <FeaturedCollections />
      <ContactCTA />
    </>
  );
}
