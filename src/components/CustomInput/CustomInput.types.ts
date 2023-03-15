import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

export type CustomInputProps = (
    | (Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
          type: 'input';
      })
    | (TextareaHTMLAttributes<HTMLTextAreaElement> & {
          type: 'textarea';
      })
) & {
    valid?: boolean;
};
