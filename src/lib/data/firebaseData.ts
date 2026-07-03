import { products } from './products';
import { categories } from './categories';

// Helper function to generate slug from name
const generateSlug = (text: string) => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
};

// 1. Prepare Categories for Firestore
// - Omit 'id' (Firestore will generate a default document ID)
// - Omit 'image' (Not needed as per requirements)
// - Ensure 'slug' is generated from the title and serves as an indexable field
export const firebaseCategories = categories.map((cat) => {
  const { id, image, ...rest } = cat;

  return {
    ...rest,
    slug: generateSlug(rest.title),
  };
});

// 2. Prepare Products for Firestore
// - Omit local 'id'
// - Ensure 'slug' is unique (using name)
// - Map 'image' to the public folder path (e.g., /products/product_1.png)
export const firebaseProducts = products.map((prod) => {
  const { id, image, ...rest } = prod;

  return {
    ...rest,
    slug: generateSlug(rest.name),
    categorySlug: generateSlug(rest.category),
    image: `/products/product_${id}.png`,
  };
});
