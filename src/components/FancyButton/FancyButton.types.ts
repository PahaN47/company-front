import { CustomButtonProps } from '~/components/CustomButton/CustomButton.types';

export type FancyButtonType = 'check' | 'cross';

export type FancyButtonProps = Omit<CustomButtonProps, 'customStyle' | 'size' | 'children'> & {
    buttonType?: FancyButtonType;
};
