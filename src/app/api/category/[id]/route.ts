import { NextRequest, NextResponse } from 'next/server';
import { categoryController } from '@/features/categories/category.controller';

// GET A SINGLE CATEGORY BY ID
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const categoryId = params.id;
  const category = await categoryController.getCategoryById(categoryId);
  
  if (!category) {
    return NextResponse.json({ success: false, error: 'Category not found' }, { status: 404 });
  }
  
  return NextResponse.json({ success: true, data: category }, { status: 200 });
}

// UPDATE A CATEGORY
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const categoryId = params.id;
    const body = await request.json();
    
    const updatedCategory = await categoryController.updateCategory(categoryId, body);
    
    return NextResponse.json({ success: true, data: updatedCategory }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Update failed' }, { status: 500 });
  }
}

// DELETE A CATEGORY
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const categoryId = params.id;
  
  await categoryController.deleteCategory(categoryId);
  
  return NextResponse.json({ success: true, message: `Deleted category ID: ${categoryId}` }, { status: 200 });
}
