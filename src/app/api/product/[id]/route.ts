import { NextRequest, NextResponse } from 'next/server';
import { productController } from '@/features/products/product.controller';

// GET A SINGLE PRODUCT BY ID
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const product = await productController.getProductById(id);
  
  if (!product) {
    return NextResponse.json({ success: false, error: 'Product not found' }, { status: 404 });
  }
  
  return NextResponse.json({ success: true, data: product }, { status: 200 });
}

// UPDATE A PRODUCT
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    
    const updatedProduct = await productController.updateProduct(id, body);
    
    return NextResponse.json({ success: true, data: updatedProduct }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Update failed' }, { status: 500 });
  }
}

// DELETE A PRODUCT
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  
  await productController.deleteProduct(id);
  
  return NextResponse.json({ success: true, message: `Deleted product ID: ${id}` }, { status: 200 });
}
