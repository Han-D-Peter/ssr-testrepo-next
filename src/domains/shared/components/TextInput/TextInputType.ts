import { ChangeEventHandler, FocusEventHandler, MouseEventHandler } from 'react';

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
  error?: boolean;
  validationMessage?: string;
  placeholder?: string;
  labelText?: string;
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onBlur?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onFocus?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onClick?: MouseEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}
