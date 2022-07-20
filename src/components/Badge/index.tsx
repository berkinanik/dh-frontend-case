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
  icon: {
    src: string;
    width: number;
    height: number;
  };
};

type infoProps = {
  mode: 'info';
  badgeText: string;
  value: string;
  icon: {
    src: string;
    width: number;
    height: number;
  };
};

type BadgeProps = pointProps | defaultProps | infoProps;

export const Badge: React.FC<BadgeProps> = ({ mode, badgeText, value, icon }) => {
  const getBadgeContent = () => {
    switch (mode) {
      case 'point':
        return (
          <>
            <span className={styles.badge__point__label}>{badgeText}</span>
            <span className={styles.badge__point__value}>{value}</span>
          </>
        );
      case 'info':
        return (
          <>
            <img
              className={styles.badge__info__icon}
              src={icon.src}
              alt="badge icon"
              width={icon.width}
              height={icon.height}
            />
            <span className={styles.badge__info__label}>{badgeText}</span>
            <span className={styles.badge__info__value}>{value}</span>
          </>
        );
      default:
        return (
          <img
            className={styles.badge__default__icon}
            src={icon.src}
            alt="badge icon"
            width={icon.width}
            height={icon.height}
          />
        );
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
