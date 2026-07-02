import { NextRequest, NextResponse } from 'next/server';
import { productController } from '@/features/products/product.controller';

// GET A SINGLE PRODUCT BY SLUG
export async function GET(request: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = await productController.getProductBySlug(slug);

  if (!product) {
    return NextResponse.json({ success: false, error: 'Product not found' }, { status: 404 });
  }

  return NextResponse.json({ success: true, data: product }, { status: 200 });
}

// UPDATE A PRODUCT
export async function PUT(request: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  try {
    const { slug } = await params;
    const body = await request.json();

    const updatedProduct = await productController.updateProduct(slug, body);

    return NextResponse.json({ success: true, data: updatedProduct }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Update failed' }, { status: 500 });
  }
}

// DELETE A PRODUCT
export async function DELETE(request: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  await productController.deleteProduct(slug);

  return NextResponse.json({ success: true, message: `Deleted product slug: ${slug}` }, { status: 200 });
}
