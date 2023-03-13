import { AnchorHTMLAttributes } from 'react';
import { LinkProps } from 'next/link';

export type CustomLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> &
    Omit<LinkProps, 'passHref' | 'legacyBehavior'>;
