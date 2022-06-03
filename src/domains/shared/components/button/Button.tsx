import { css, SerializedStyles } from '@emotion/react';
import { useMemo } from 'react';
import { forwardRef, memo } from 'react';
import { Color } from '../../constants';
import { ButtonProps, ButtonSizeType } from './ButtonType';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      type = 'button',
      onClick,
      children,
      color = 'Gray800',
      size = 'small',
      isLoading,
      disabled = false,
      ...props
    },
    ref,
  ) => {
    const ButtonCss = useMemo(
      () => css`
        ${ButtonBaseCss}
        ${size && ButtonSizeCss[size]};
        ${color &&
        css`
          background-color: ${Color[color]};
          color: ${color === 'Gray800' ? Color.Primary100 : Color.White100};
          transition: background-color 0.2s linear;

          &:hover {
            background-color: ${color === 'Gray800' ? Color.Gray750 : Color.Primary50};
          }

          &:active {
            background-color: ${color === 'Gray800' ? Color.Gray850 : Color.Primary200};
          }
        `};
      `,
      [color, size],
    );

    return (
      <button
        className={className}
        css={ButtonCss}
        onClick={onClick}
        ref={ref}
        type={type}
        disabled={disabled}
        {...props}
      >
        {isLoading ? <div>Loading Icon...</div> : children}
      </button>
    );
  },
);

export default memo(Button);

const ButtonBaseCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 6px;
`;

const ButtonSizeCss: Record<ButtonSizeType, SerializedStyles> = {
  small: css`
    height: 31px;
    padding: 8px 10px;
  `,
  medium: css`
    height: 40px;
    padding: 11px 12px;
  `,
  large: css`
    height: 48px;
    padding: 15px 14px;
  `,
};
