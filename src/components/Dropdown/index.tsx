import cn from 'classnames';
import { forwardRef, useImperativeHandle, useRef } from 'react';

import styles from './Dropdown.module.scss';

interface DropdownProps {
  className?: string;
  content: React.ReactNode;
  summary: React.ReactNode;
  direction?: 'right' | 'bottom';
}

export interface DropdownHandle {
  close: () => void;
}

const Dropdown = forwardRef<DropdownHandle, DropdownProps>(
  ({ className, summary, content, direction = 'bottom' }, ref) => {
    const detailsRef = useRef<HTMLDetailsElement>(null);

    useImperativeHandle(ref, () => ({
      close() {
        detailsRef.current?.removeAttribute('open');
      },
    }));

    return (
      <details className={cn(styles.dropdown, className)} ref={detailsRef}>
        <summary>{summary}</summary>
        <div className={cn(styles.dropdown__content, `${styles.dropdown__content}--${direction}`)}>{content}</div>
      </details>
    );
  }
);

Dropdown.displayName = 'Dropdown';

export { Dropdown };
