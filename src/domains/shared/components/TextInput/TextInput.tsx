import { css } from '@emotion/react';
import React, { forwardRef, memo } from 'react';
import { InputProps } from './TextInputType';

const TextInput = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      disabled,
      error,
      id,
      labelText,
      maxLength,
      minLength,
      name,
      placeholder,
      required,
      validationMessage,
      value,
      withCount,
      readOnly,
      onChange,
      onBlur,
      onFocus,
      onClick,
    },
    ref,
  ) => {
    const TextInputCss = css`
      ${TextInputBaseCss}
    `;

    return (
      <>
        <label htmlFor={id}>
          {labelText && <span>{labelText}</span>}
          <div>
            <input
              css={TextInputCss}
              ref={ref}
              className={className}
              placeholder={placeholder}
              name={name}
              value={value || ''}
              disabled={disabled}
              readOnly={readOnly}
              required={required}
              maxLength={maxLength}
              minLength={minLength}
              onChange={onChange}
              onBlur={onBlur}
              onFocus={onFocus}
              onClick={onClick}
            />
            {withCount && !!maxLength && (
              <span>
                {value?.length ?? 0} / {maxLength}
              </span>
            )}
          </div>
        </label>
        {error && !!validationMessage && <div>{validationMessage}</div>}
      </>
    );
  },
);

export default memo(TextInput);

const TextInputBaseCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 6px;
  height: 30px;
`;
