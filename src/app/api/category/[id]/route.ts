import { NextRequest, NextResponse } from 'next/server';
import { categoryController } from '@/features/categories/category.controller';

// GET A SINGLE CATEGORY BY ID
export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const category = await categoryController.getCategoryById(id);

  if (!category) {
    return NextResponse.json({ success: false, error: 'Category not found' }, { status: 404 });
  }

  return NextResponse.json({ success: true, data: category }, { status: 200 });
}

// UPDATE A CATEGORY
export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await request.json();

    const updatedCategory = await categoryController.updateCategory(id, body);

    return NextResponse.json({ success: true, data: updatedCategory }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Update failed' }, { status: 500 });
  }
}

// DELETE A CATEGORY
export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  await categoryController.deleteCategory(id);

  return NextResponse.json({ success: true, message: `Deleted category ID: ${id}` }, { status: 200 });
}
