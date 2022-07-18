import cn from 'classnames';
import styles from './Breadcrumb.module.scss';

interface BreadcrumbProps {
  items: string[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  const renderItems = () => {
    const moreThanOneItem = items.length > 1;
    return (
      <>
        {items.map((item, index) => (
          <>
            <li className={cn(styles.item, styles.item__text)} key={item}>
              {item}
            </li>
            {moreThanOneItem && index < items.length - 1 && <span className={styles.item}>{'>'}</span>}
          </>
        ))}
      </>
    );
  };

  return <ul className={styles.container}>{renderItems()}</ul>;
};
