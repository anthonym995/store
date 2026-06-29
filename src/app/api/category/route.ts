import { NextRequest, NextResponse } from 'next/server';
import { categoryController } from '@/features/categories/category.controller';

// GET ALL CATEGORIES
export async function GET(request: NextRequest) {
  const categories = await categoryController.getAllCategories();
  
  return NextResponse.json({ success: true, data: categories }, { status: 200 });
}

// CREATE A NEW CATEGORY
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const newCategory = await categoryController.createCategory(body);
    
    return NextResponse.json(
      { success: true, message: 'Category created successfully', data: newCategory },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to create category' }, { status: 500 });
  }
}
