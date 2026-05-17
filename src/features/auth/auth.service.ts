import { signJwt } from './jwt';

// Temporary hardcoded credentials as requested.
// We will replace this with a real database lookup later.
const TEMP_ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@store.com';
const TEMP_ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';

export async function loginAdmin(credentials: any) {
  const { email, password } = credentials;

  // Validate request body to prevent unnecessary processing (high performance)
  if (!email || !password) {
    return {
      error: 'Email and password are required',
      status: 400,
    };
  }

  // Verify against temporary credentials
  if (email !== TEMP_ADMIN_EMAIL || password !== TEMP_ADMIN_PASSWORD) {
    return {
      error: 'Invalid email or password',
      status: 401,
    };
  }

  // Generate JWT token upon successful login
  const token = await signJwt({ email, role: 'admin' }, '1d');

  return {
    success: true,
    message: 'Login successful',
    data: {
      token,
      user: {
        email,
        role: 'admin',
      },
    },
  };
}
