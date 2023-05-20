import { Color } from '~/const';

export type BasePageProps = {
    background?: Color;
    children?: React.ReactNode;
    className?: string;
    scrollable?: boolean;
};
