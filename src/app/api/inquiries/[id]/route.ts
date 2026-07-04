import { NextRequest, NextResponse } from 'next/server';
import { inquiryController } from '@/features/inquiries/inquiry.controller';

export const revalidate = 0;

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const inquiry = await inquiryController.getInquiryById(id);

  if (!inquiry) {
    return NextResponse.json({ error: 'Inquiry not found' }, { status: 404 });
  }

  return NextResponse.json(inquiry, { status: 200 });
}

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await request.json();
    const updated = await inquiryController.updateInquiry(id, body);
    return NextResponse.json(updated, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Update failed' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  await inquiryController.deleteInquiry(id);
  return NextResponse.json({ message: `Deleted inquiry: ${id}` }, { status: 200 });
}
