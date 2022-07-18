import cn from 'classnames';

import styles from './Badge.module.scss';

type pointProps = {
  mode: 'point';
  badgeText: string;
  value: string;
  icon?: never;
};

type defaultProps = {
  mode: 'default';
  badgeText?: never;
  value?: never;
  icon: string;
};

type infoProps = {
  mode: 'info';
  badgeText: string;
  value: string;
  icon: string;
};

type BadgeProps = pointProps | defaultProps | infoProps;

export const Badge: React.FC<BadgeProps> = ({ mode, badgeText, value, icon }) => {
  const getBadgeContent = () => {
    switch (mode) {
      case 'point':
        return (
          <>
            <span className={styles.badge__label}>{badgeText}</span>
            <span className={styles.badge__point}>{value}</span>
          </>
        );
      case 'info':
        return (
          <>
            <img className={styles.badge__info__icon} src={icon.toLowerCase()} alt="badge icon" />
            <span className={styles.badge__info__label}>{badgeText}</span>
            <span className={styles.badge__info__value}>{value}</span>
          </>
        );
      default:
        return <img className={styles.badge__icon} src={icon.toLowerCase()} alt="badge icon" />;
    }
  };

  return (
    <div
      className={cn(styles.badge, {
        [styles['badge--point']]: mode === 'point',
        [styles['badge--default']]: mode === 'default',
        [styles['badge--info']]: mode === 'info',
      })}
    >
      {getBadgeContent()}
    </div>
  );
};
