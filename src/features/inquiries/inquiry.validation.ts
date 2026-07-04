import { z } from 'zod';

export const InquirySchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters long'),
  
  // Contextual Data
  productId: z.string().optional(),
  productName: z.string().optional(),

  // Admin Management
  status: z.enum(['new', 'inprogress', 'resolved']).optional().default('new'),
  adminNotes: z.string().optional(),
  assignedTo: z.string().optional(),
});

export const InquiryCreateSchema = InquirySchema.omit({ 
  id: true, 
  status: true, 
  adminNotes: true, 
  assignedTo: true 
});

export const InquiryUpdateSchema = InquirySchema.partial();
