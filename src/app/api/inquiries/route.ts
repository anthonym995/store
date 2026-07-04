import { NextRequest, NextResponse } from 'next/server';
import { inquiryController } from '@/features/inquiries/inquiry.controller';

export const revalidate = 0; // Don't cache admin queries

export async function GET() {
  const inquiries = await inquiryController.getAllInquiries();
  return NextResponse.json(inquiries, { status: 200 });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const newInquiry = await inquiryController.createInquiry(body);
    return NextResponse.json(newInquiry, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create inquiry' }, { status: 400 });
  }
}
