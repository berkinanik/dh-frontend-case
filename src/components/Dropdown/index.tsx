import cn from 'classnames';

import styles from './Dropdown.module.scss';

interface DropdownProps {
  className?: string;
  content: React.ReactNode;
  summary: React.ReactNode;
  direction?: 'right' | 'bottom';
}

export const Dropdown: React.FC<DropdownProps> = ({ className, summary, content, direction = 'bottom' }) => {
  return (
    <details className={cn(styles.dropdown, className)}>
      <summary>{summary}</summary>
      <div className={cn(styles.dropdown__content, `${styles.dropdown__content}--${direction}`)}>{content}</div>
    </details>
  );
};
