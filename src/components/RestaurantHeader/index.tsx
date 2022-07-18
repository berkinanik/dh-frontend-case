import { Breadcrumb } from 'components/Breadcrumb';

import { Badge } from 'components/Badge';
import { formatMoney } from 'utils';

import styles from './RestaurantHeader.module.scss';

interface RestaurantHeaderProps {
  name: string;
  address: string;
  flavour: number;
  serving: number;
  speed: number;
  minimumPrice: number;
  deliveryTime: number;
  tags: string[];
}

export const RestaurantHeader: React.FC<RestaurantHeaderProps> = ({
  name,
  address,
  flavour,
  speed,
  serving,
  minimumPrice,
  deliveryTime,
  tags,
}) => {
  return (
    <header className={styles.container}>
      <div className={styles.details}>
        <img className={styles.details__logo} alt="Restaurant Logo" src="images/restaurant-logo.png" />
        <div className={styles.details__info}>
          <h1 className={styles.details__info__name}>{name + ' (' + address + ')'}</h1>
          <div className={styles.details__info__badges}>
            <div className={styles.details__info__badges__points}>
              <Badge mode="default" icon="icons/super-delivery.svg" />
              <Badge mode="point" value={speed.toFixed(1).replace('.', ',')} badgeText="Hız" />
              <Badge mode="point" value={serving.toFixed(1).replace('.', ',')} badgeText="Servis" />
              <Badge mode="point" value={flavour.toFixed(1).replace('.', ',')} badgeText="Lezzet" />
            </div>
            <div className={styles.details__info__badges__delivery}>
              <Badge mode="info" value={formatMoney(minimumPrice)} badgeText="Min. Tutar" icon="icons/min-amount.svg" />
              <Badge
                mode="info"
                value={deliveryTime.toFixed(2).replace('.', ',') + ' dk.'}
                badgeText="Servis Süresi"
                icon="icons/delivery.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <Breadcrumb items={tags} />
    </header>
  );
};
