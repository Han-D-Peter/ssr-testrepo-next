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
      color = 'Gray010',
      textColor = 'Gray001',
      size,
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
          color: ${Color[textColor]};
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
  height: 32px;
`;

const ButtonSizeCss: Record<ButtonSizeType, SerializedStyles> = {
  small: css`
    width: 54px;
    height: 31px;
    font-size: 12px;
  `,
  medium: css`
    width: 76px;
    height: 40px;
    font-size: 14px;
  `,
  large: css`
    width: 394px;
    height: 48px;
    font-size: 16px;
  `,
};
