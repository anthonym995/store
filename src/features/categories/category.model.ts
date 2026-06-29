import { StaticImageData } from 'next/image';

// The core Category model
export interface Category {
  id: string | number;
  title: string;
  desc: string;
  image: StaticImageData | string | any;
}
