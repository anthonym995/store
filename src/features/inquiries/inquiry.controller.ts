import { Inquiry } from '@/lib/types';
import { mockInquiries } from '@/lib/data/inquiries';
import { InquiryCreateSchema, InquiryUpdateSchema } from './inquiry.validation';

// Mock in-memory database until Firebase is connected
let inquiriesDB = [...mockInquiries];

export const inquiryController = {
  // GET ALL INQUIRIES
  getAllInquiries: async (): Promise<Inquiry[]> => {
    try {
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 300));
      return [...inquiriesDB].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    } catch (error) {
      console.error('Error fetching inquiries', error);
      return [];
    }
  },

  // GET INQUIRY BY ID
  getInquiryById: async (id: string): Promise<Inquiry | null> => {
    try {
      const inquiry = inquiriesDB.find((inq) => inq.id === id);
      return inquiry || null;
    } catch (error) {
      console.error('Error fetching inquiry', error);
      return null;
    }
  },

  // CREATE INQUIRY
  createInquiry: async (inquiryData: Partial<Inquiry>): Promise<Inquiry> => {
    try {
      const parsedData = InquiryCreateSchema.parse(inquiryData);

      const newInquiry: Inquiry = {
        id: `inq_${Date.now()}`,
        ...parsedData,
        status: 'new',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      inquiriesDB.push(newInquiry);
      return newInquiry;
    } catch (error) {
      console.error('Error creating inquiry', error);
      throw error;
    }
  },

  // UPDATE INQUIRY
  updateInquiry: async (id: string, updateData: Partial<Inquiry>): Promise<Inquiry | null> => {
    try {
      const parsedData = InquiryUpdateSchema.parse(updateData);

      const index = inquiriesDB.findIndex((inq) => inq.id === id);
      if (index === -1) return null;

      const updatedInquiry = {
        ...inquiriesDB[index],
        ...parsedData,
        updatedAt: new Date().toISOString(),
      };

      inquiriesDB[index] = updatedInquiry;
      return updatedInquiry;
    } catch (error) {
      console.error('Error updating inquiry', error);
      return null;
    }
  },

  // DELETE INQUIRY
  deleteInquiry: async (id: string): Promise<boolean> => {
    try {
      const initialLength = inquiriesDB.length;
      inquiriesDB = inquiriesDB.filter((inq) => inq.id !== id);
      return inquiriesDB.length < initialLength;
    } catch (error) {
      console.error('Error deleting inquiry', error);
      return false;
    }
  },
};
