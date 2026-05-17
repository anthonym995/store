import { NextResponse } from 'next/server';
import { loginAdmin } from '@/features/auth/auth.service';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Delegate logic to the auth service
    const result = await loginAdmin(body);

    if (result.error) {
      return NextResponse.json(
        { success: false, message: result.error },
        { status: result.status }
      );
    }

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
