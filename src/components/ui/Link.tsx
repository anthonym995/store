import NextLink from 'next/link';
import { ComponentProps } from 'react';

type NextLinkProps = ComponentProps<typeof NextLink>;

export default function Link({ prefetch = false, ...props }: NextLinkProps) {
  return <NextLink prefetch={prefetch} {...props} />;
}
