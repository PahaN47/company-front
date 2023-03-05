import { HTMLAttributes } from 'react';
import { LinkProps } from 'next/link';

export type CustomLinkProps = Omit<LinkProps, 'passHref' | 'legacyBehavior'> & HTMLAttributes<HTMLAnchorElement>;
