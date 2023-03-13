import { UrlObject } from 'url';

import { ButtonHTMLAttributes, HTMLAttributeAnchorTarget } from 'react';

export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonStyle = 'primary' | 'secondary' | 'outline';

export type CustomButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    customStyle?: ButtonStyle;
    href?: string | UrlObject;
    size?: ButtonSize;
    target?: HTMLAttributeAnchorTarget;
};
