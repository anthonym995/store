import crypto from 'crypto';

/**
 * Generates a URL-friendly slug from a given string.
 * e.g. "Brass Kuthu Vilakku" -> "brass-kuthu-vilakku"
 */
export const generateSlug = (text: string): string => {
  if (!text) return '';
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
};

/**
 * Generates a short, random 8-character string (similar to nanoid).
 */
export const generateShortId = (): string => {
  return crypto.randomUUID().split('-')[0];
};
