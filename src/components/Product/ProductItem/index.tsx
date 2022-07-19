import { Button } from 'components/Button';
import { useId, useRef, useState } from 'react';

import { formatMoney } from 'utils';

import styles from './ProductItem.module.scss';

export interface ProductItemProps {
  name: string;
  description: string;
  price: number;
}

export const ProductItem: React.FC<ProductItemProps> = ({ name, description, price }) => {
  const [amount, setAmount] = useState(1);
  const amountId = useId();
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAmount(1);
    inputRef.current?.blur();
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(parseInt(e.target.value) || 1);
  };

  return (
    <div className={styles.container}>
      <form className={styles.actions} onSubmit={onSubmit}>
        <input
          ref={inputRef}
          className={styles.actions__input}
          type="number"
          min={1}
          max={99}
          id={amountId}
          value={amount}
          onChange={onChange}
        />
        <Button mode="primary" size="m" type="button" title={`Sepete Ekle: ${name} (${amount} adet)`}>
          +
        </Button>
      </form>
      <div className={styles.info}>
        <span className={styles.info__name}>{name}</span>
        <p className={styles.info__description}>{description}</p>
      </div>
      <div className={styles.price}>{formatMoney(price)}</div>
    </div>
  );
};
