import { NextResponse } from 'next/server';
import { db } from '@/lib/firebaseAdmin';

export async function GET() {
  try {
    // Attempt to write a test document to Firestore
    const docRef = await db.collection('test_connection').add({
      message: 'Hello from Firebase Admin!',
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: 'Firebase Admin connected successfully!',
      documentId: docRef.id,
    });
  } catch (error: any) {
    console.error('Firebase Test Error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Failed to connect to Firebase Admin',
      },
      { status: 500 }
    );
  }
}
