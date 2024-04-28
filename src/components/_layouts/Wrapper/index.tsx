import cn from 'classnames';

import styles from './Wrapper.module.scss';

interface WrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Wrapper: React.FC<WrapperProps> = ({ children, id, className }) => {
  return (
    <div className={cn(styles.wrapper, className)} id={id}>
      {children}
    </div>
  );
};
