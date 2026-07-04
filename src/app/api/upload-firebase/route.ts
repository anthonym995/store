import { NextResponse } from 'next/server';
import { db } from '@/lib/firebaseAdmin';
import { firebaseProducts, firebaseCategories } from '@/lib/data/firebaseData';

export async function GET() {
  try {
    const batch = db.batch();

    // 1. Delete existing categories
    const categoriesRef = db.collection('categories');
    const existingCategories = await categoriesRef.get();
    existingCategories.forEach((doc) => {
      batch.delete(doc.ref);
    });

    // 2. Delete existing products
    const productsRef = db.collection('products');
    const existingProducts = await productsRef.get();
    existingProducts.forEach((doc) => {
      batch.delete(doc.ref);
    });

    // 3. Upload new categories
    for (const cat of firebaseCategories) {
      const docRef = categoriesRef.doc(); // Auto-generated Firebase ID; slug is just an indexed field
      batch.set(docRef, cat);
    }

    // 4. Upload new products
    for (const prod of firebaseProducts) {
      const docRef = productsRef.doc(); // Auto-generated Firebase ID; slug is just an indexed field
      batch.set(docRef, prod);
    }

    // 5. Commit all deletes and writes to Firestore as a single batch
    await batch.commit();

    return NextResponse.json({
      success: true,
      message: `Successfully uploaded ${firebaseCategories.length} categories and ${firebaseProducts.length} products to Firestore!`,
    });
  } catch (error: any) {
    console.error('Firebase Upload Error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Failed to upload data to Firestore',
      },
      { status: 500 }
    );
  }
}
