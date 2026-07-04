import { StaticImageData } from 'next/image';

export interface Product {
  id: number | string;
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  material: string;
  description: string;
  dimensions: string;
  price: number;
  unit: 'Piece' | 'kg' | 'Box' | 'Gram' | 'Meter';
  rating: number;
  reviews: number;
  image: StaticImageData | string | any;

  // SEO Fields
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
}

export interface Category {
  id: string | number;
  slug: string;
  title: string;
  description: string;
  image: StaticImageData | string | any;
}

export type AdminRole = 'superadmin' | 'admin';
export type AdminStatus = 'active' | 'pending' | 'suspended';

export interface User {
  id: string;
  fullName: string;
  email: string;
  role: AdminRole;
  status: AdminStatus;
  lastLogin: Date | string | null;
  createdBy?: string; // UID of the Super Admin who created them
  createdAt: Date | any; // Firestore Timestamp
  updatedAt: Date | any;
}

export type InquiryStatus = 'new' | 'inprogress' | 'resolved';

export interface Inquiry {
  id?: string; // Firestore document ID (optional when submitting from frontend)

  // Customer Details
  name: string;
  email: string;
  phone?: string; // Highly recommended for store/B2B inquiries

  // Inquiry Content
  subject: string; // e.g., "General Question", "Bulk Order", "Product Info"
  message: string;

  // Contextual Data (Only filled if they submit from a specific Product Page)
  productId?: string; // Links to your Product schema
  productName?: string; // Saves an extra database read in the admin panel

  // Admin Management (Hidden from frontend users)
  status: InquiryStatus; // Defaults to 'New' on submission
  adminNotes?: string; // Internal notes for you and your staff
  assignedTo?: string; // Admin ID handling this ticket

  // Timestamps
  createdAt: Date | any; // Firestore Timestamp
  updatedAt: Date | any;
}
