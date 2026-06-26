import Hero from '@/components/Hero/Hero';
import Categories from '@/components/Categories/Categories';
import FeaturedProducts from '@/components/FeaturedProducts/FeaturedProducts';
import ContactCTA from '@/components/ContactCTA/ContactCTA';
import Collections from '@/components/Collections/Collections';

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
