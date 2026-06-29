// SEO fields for the Category
export interface CategorySEO {
  metaTitle?: string;
  metaDescription?: string;
  slug: string;
}

// The core Category model
export interface Category {
  id: number | string;
  name: string;
  description?: string;
  imageUrl?: string;

  // Embedded SEO Object
  seo?: CategorySEO;
}
