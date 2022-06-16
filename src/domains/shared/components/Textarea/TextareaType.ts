import React from 'react';

export interface TextareaProps {
  hasError?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  id?: string;
  name?: string;
  value?: string;
  required?: boolean;
  willBlurOnEsc?: boolean;
  withCount?: boolean;
  maxLength?: number;
  className?: string;
  errorMessage?: string;
  placeholder?: string;
  labelText?: string;

  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLTextAreaElement>) => void;
}
