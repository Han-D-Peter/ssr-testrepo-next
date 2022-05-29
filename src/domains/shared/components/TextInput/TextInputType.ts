import {
  ChangeEventHandler,
  FocusEventHandler,
  HTMLInputTypeAttribute,
  KeyboardEventHandler,
  MouseEventHandler,
} from 'react';

export type InputVariant = 'default' | 'search';
export interface InputProps {
  disabled?: boolean;
  id?: string;
  name?: string;
  value?: string;
  required?: boolean;
  withCount?: boolean;
  readOnly?: boolean;
  maxLength?: number;
  minLength?: number;
  className?: string;
  variant?: InputVariant;
  error?: boolean;
  validationMessage?: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  labelText?: string;
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onBlur?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onFocus?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onClick?: MouseEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}
