import cn from 'classnames';

import styles from './Button.module.scss';

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler;
  mode?: 'primary' | 'secondary' | 'outlined' | 'text';
  size?: 'm' | 'l';
  type?: 'button' | 'submit';
  title?: string;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  onClick,
  mode = 'primary',
  size = 'm',
  type = 'button',
  title,
  disabled = false,
}) => {
  return (
    <button
      className={cn(styles.button, `${styles.button}--${mode}`, `${styles.button}--${size}`, className)}
      onClick={onClick}
      type={type}
      disabled={disabled}
      title={title}
    >
      {children}
    </button>
  );
};
