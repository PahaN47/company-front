import React from 'react';
import Link from 'next/link';

import { CustomLinkProps } from './CustomLink.types';

export const CustomLink = ({ href, className, children, ...props }: CustomLinkProps) => {
    return (
        <Link {...props} href={href} passHref legacyBehavior>
            <a {...props} className={className}>
                {children}
            </a>
        </Link>
    );
};
