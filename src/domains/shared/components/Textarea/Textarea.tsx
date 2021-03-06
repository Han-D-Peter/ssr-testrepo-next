import { css } from '@emotion/react';
import React, { memo, useCallback } from 'react';
import { Color } from '../../constants';
import Text from '../Text/Text';
import { TextareaProps } from './TextareaType';

const Textarea: React.VFC<TextareaProps> = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      disabled,
      readOnly,
      id,
      name,
      value,
      required,
      willBlurOnEsc = true,
      placeholder,
      maxLength,
      className,
      hasError,
      withCount,
      errorMessage,
      labelText,
      onChange,
      onBlur,
      onFocus,
      onClick,
    },
    ref,
  ) => {
    const handleKeyDown = useCallback(
      (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Escape' && willBlurOnEsc) {
          event.currentTarget.blur();
        }
      },
      [willBlurOnEsc],
    );

    return (
      <>
        <label htmlFor={id}>
          {labelText && <span>{labelText}</span>}
          <div css={textareaWrapperStyle}>
            <div css={textareaContainerStyle}>
              <textarea
                css={textareaStyle}
                id={id}
                ref={ref}
                className={className}
                placeholder={placeholder}
                name={name}
                value={value}
                disabled={disabled}
                readOnly={readOnly}
                onKeyDown={handleKeyDown}
                required={required}
                maxLength={maxLength}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                onClick={onClick}
              />
              {withCount && !!maxLength && (
                <Text type="body14" css={textareaLengthCounter}>
                  {value?.length ?? 0}/{maxLength}
                </Text>
              )}
            </div>
          </div>
        </label>
        {hasError && !!errorMessage && (
          <Text type="tag12" css={textareaErrorMessage}>
            {errorMessage}
          </Text>
        )}
      </>
    );
  },
);
export default memo(Textarea);

const textareaWrapperStyle = css`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 64px;
  max-width: 600px;
`;

const textareaContainerStyle = css`
  position: relative;
  display: inline-flex;
  box-sizing: border-box;
  width: 100%;
  height: 119px;
  max-width: 600px;
  border: none;
  background-color: ${Color.Gray800};
  border-radius: 8px;
  padding: 12px 16px;
  overflow-y: auto;
`;

const textareaStyle = css`
  width: 100%;
  padding: 0;
  color: ${Color.White100};
  box-sizing: border-box;
  outline: none;
  border: none;
  resize: none;
`;

const textareaLengthCounter = css`
  position: absolute;
  right: 12px;
  bottom: 13px;
  color: ${Color.Gray400};
`;

const textareaErrorMessage = css`
  color: ${Color.Red100};
`;
