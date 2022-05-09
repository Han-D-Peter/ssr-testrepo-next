export type SelectValue = string | number | undefined;
export interface SelectOption {
  value: SelectValue;
  label: string;
}

export interface SelectProps {
  options: SelectOption[];
  placeholder?: string;
  id?: string;
  name?: string;
  value?: SelectValue;
  className?: string;
  disabled?: boolean;
  labelText?: string;
  error?: boolean;
  validationMessage?: string;
  onChange?: (value: SelectValue) => void;
}
