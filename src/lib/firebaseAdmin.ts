import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { getAuth } from 'firebase-admin/auth';
import fs from 'fs';
import path from 'path';

// For Vercel deployment, we pass the entire JSON as a stringified environment variable.
// For local development, we fallback to reading the local JSON file.
let serviceAccount;
if (process.env.FIREBASE_SERVICE_ACCOUNT_KEY) {
  serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);
} else {
  try {
    const keyPath = path.join(process.cwd(), 'src', 'lib', 'evbrass-3692c-firebase-adminsdk-fbsvc-aafe3e9590.json');
    if (fs.existsSync(keyPath)) {
      serviceAccount = JSON.parse(fs.readFileSync(keyPath, 'utf8'));
    }
  } catch (error) {
    console.warn('Local Firebase key not found or invalid');
  }
}

if (!getApps().length) {
  try {
    initializeApp({
      credential: cert(serviceAccount),
    });
    console.log('Firebase Admin initialized successfully');
  } catch (error) {
    console.error('Firebase Admin initialization error:', error);
  }
}

export const db = getFirestore();
export const auth = getAuth();
