import React, { forwardRef, memo, useCallback, useMemo, useRef, useState } from 'react';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import { SelectProps, SelectValue } from './SelectType';

const Select = forwardRef<HTMLButtonElement, SelectProps>(
  (
    {
      id,
      name,
      labelText,
      placeholder,
      options,
      onChange,
      value,
      disabled,
      error,
      validationMessage,
      className,
      ...restProps
    },
    ref,
  ) => {
    const optionsContainer = useRef<HTMLDivElement>(null);
    const [isShownOptions, setIsShownOptions] = useState(false);

    const selectedOption = useMemo(() => options.find((option) => option.value === value), [options, value]);

    const handleSelectClick = useCallback(
      (event: React.MouseEvent) => {
        if (!isShownOptions) {
          event.stopPropagation();
          setIsShownOptions(true);
        }
      },
      [isShownOptions],
    );

    const handleOptionClick = useCallback(
      (updatedValue: SelectValue) => () => {
        onChange?.(updatedValue);
        setIsShownOptions(false);
      },
      [onChange],
    );

    const handleOptionsOutsideClick = useCallback(() => {
      setIsShownOptions(false);
    }, []);

    useOnClickOutside(optionsContainer, handleOptionsOutsideClick);

    return (
      <div {...restProps}>
        {labelText && (
          <label htmlFor={id}>
            <span>{labelText}</span>
          </label>
        )}
        <div>
          <button
            disabled={disabled}
            type="button"
            id={id}
            name={name}
            ref={ref}
            className={className}
            onClick={handleSelectClick}
          >
            <span>{selectedOption?.label || placeholder}</span>
            {/* 아이콘 자리 */}
          </button>
          {isShownOptions && (
            <div ref={optionsContainer}>
              <ul>
                {options.map((option) => {
                  return (
                    <li key={option.value}>
                      <div onClick={handleOptionClick(option.value)}>{option.label}</div>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
        {error && !!validationMessage && <div>{validationMessage}</div>}
      </div>
    );
  },
);

export default memo(Select);
