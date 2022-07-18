import { useId, useRef, useState } from 'react';

import { formatMoney } from 'utils';

import styles from './ProductItem.module.scss';

export interface ProductItemProps {
  title: string;
  description: string;
  price: number;
}

export const ProductItem: React.FC<ProductItemProps> = ({ title, description, price }) => {
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
        <button className={styles.actions__button} type="submit" title="Sepete Ekle">
          +
        </button>
      </form>
      <div className={styles.info}>
        <span className={styles.info__title}>{title}</span>
        <p className={styles.info__description}>{description}</p>
      </div>
      <div className={styles.price}>{formatMoney(price)}</div>
    </div>
  );
};
