import { NextRequest, NextResponse } from 'next/server';
import { productController } from '@/features/products/product.controller';

// GET ALL PRODUCTS
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const category = searchParams.get('category') || undefined;
  
  const products = await productController.getAllProducts({ category });
  
  return NextResponse.json({ success: true, data: products }, { status: 200 });
}

// CREATE A NEW PRODUCT
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const newProduct = await productController.createProduct(body);
    
    return NextResponse.json(
      { success: true, message: 'Product created successfully', data: newProduct },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to create product' }, { status: 500 });
  }
}
