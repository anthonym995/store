import { NextRequest, NextResponse } from 'next/server';
import { productController } from '@/features/products/product.controller';

export const revalidate = 3600; // Cache this API route for 1 hour

// GET ALL PRODUCTS
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const category = searchParams.get('category') || undefined;

  const products = await productController.getAllProducts({ category });

  return NextResponse.json(products, { status: 200 });
}

// CREATE A NEW PRODUCT
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const newProduct = await productController.createProduct(body);

    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create product' }, { status: 500 });
  }
}
