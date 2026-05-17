import { SignJWT, jwtVerify, JWTPayload } from 'jose';

// In production, always use an environment variable for the secret
const getJwtSecret = () => {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    // We fall back to a dummy secret for development/temporary purposes
    return new TextEncoder().encode('temporary_development_secret_do_not_use_in_prod');
  }
  return new TextEncoder().encode(secret);
};

export async function signJwt(payload: JWTPayload, expiresIn: string = '1d'): Promise<string> {
  const secret = getJwtSecret();
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(expiresIn)
    .sign(secret);
}

export async function verifyJwt(token: string): Promise<JWTPayload | null> {
  try {
    const secret = getJwtSecret();
    const { payload } = await jwtVerify(token, secret);
    return payload;
  } catch (error) {
    // Return null if token is invalid or expired
    return null;
  }
}
