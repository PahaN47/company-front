import { AnchorHTMLAttributes } from 'react';
import { LinkProps } from 'next/link';

export type CustomLinkProps = Omit<LinkProps, 'passHref' | 'legacyBehavior'> & AnchorHTMLAttributes<HTMLAnchorElement>;
