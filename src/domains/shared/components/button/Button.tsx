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
          color: ${Color.Gray001};
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
    width: 55px;
  `,
  medium: css`
    width: 256px;
  `,
  large: css`
    width: 384px;
  `,
};
