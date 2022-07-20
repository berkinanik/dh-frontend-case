import cn from 'classnames';
import React, { useId, useRef, useState } from 'react';

import { Button } from 'components/Button';
import { Dropdown } from 'components/Dropdown';
import { formatMoney } from 'utils';
import { CartActionTypes, useCartContext } from 'context';
import { ProductList, ProductListProps } from './ProductList';

import styles from './Product.module.scss';

type _commonProps = {
  className?: string;
  item: { id: string; name: string; description: string; price: number };
  amountOnCart?: number;
  lastItem?: boolean;
};

type onCartProps = _commonProps & {
  onCart?: true;
  onCartPage?: boolean;
  amountOnCart: number;
};

type onProductListProps = _commonProps & {
  onCart?: false;
  onCartPage?: never;
};

export type ProductProps = onCartProps | onProductListProps;

interface ProductSubComponents {
  List: React.FC<ProductListProps>;
}

const Product: React.FC<ProductProps> & ProductSubComponents = ({
  className,
  item: { id, name, description, price },
  onCart = false,
  onCartPage,
  amountOnCart,
  lastItem = false,
}) => {
  const { cartDispatch } = useCartContext();
  const [orderAmount, setOrderAmount] = useState(1);
  const formId = useId();
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOrderAmount(1);
    inputRef.current?.blur();
    cartDispatch({
      type: CartActionTypes.ADD_ITEM,
      payload: {
        id,
        name,
        description,
        price,
        amount: orderAmount,
      },
    });
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOrderAmount(parseInt(e.target.value) || 1);
  };

  const onRemove = (e: React.MouseEvent<HTMLButtonElement>, removeAll = false) => {
    e.preventDefault();
    if (removeAll) {
      cartDispatch({
        type: CartActionTypes.REMOVE_ITEM_COMPLETELY,
        payload: {
          id,
        },
      });
    } else {
      cartDispatch({
        type: CartActionTypes.REMOVE_ITEM,
        payload: {
          id,
          amount: orderAmount,
        },
      });
    }
  };

  return (
    <>
      <li
        className={cn(
          styles.container,
          {
            [styles.container + '--on-cart']: onCart,
            [styles.container + '--on-cart--last']: onCart && lastItem,
            [styles.container + '--on-cart--page']: onCartPage,
          },
          className
        )}
        id={`product-${id}`}
      >
        {onCart ? (
          <span className={styles.amount}>x{amountOnCart}</span>
        ) : (
          <form className={styles.actions} onSubmit={onSubmit} id={formId}>
            <input
              ref={inputRef}
              className={styles.actions__input}
              type="number"
              min={1}
              max={99}
              id={formId + 'amount'}
              value={orderAmount}
              onChange={onChange}
            />
            <Button
              className={styles.actions__button}
              mode="primary"
              type="submit"
              title={`Sepete Ekle: ${name.substring(0, 20)} (${orderAmount} adet)`}
            >
              +
            </Button>
          </form>
        )}
        <div
          className={cn(styles.info, {
            [styles.info + '--on-cart']: onCart,
            [styles.info + '--on-cart--page']: onCartPage,
          })}
        >
          <span className={styles.info__name}>{name}</span>
          {onCart && (
            <Dropdown
              className={cn(styles['cart-actions__container'], {
                [styles['cart-actions__container--on-page']]: onCartPage,
              })}
              summary={
                <img src="icons/edit.svg" width={onCartPage ? 20 : 12} height={onCartPage ? 20 : 12} alt="Edit Icon" />
              }
              content={
                <form className={styles['cart-actions']} onSubmit={onSubmit} id={formId}>
                  <Button
                    className={styles.actions__button}
                    mode="secondary"
                    type="button"
                    title={`Sepetten Çıkar: ${name.substring(0, 20)} (${orderAmount} adet)`}
                    onClick={onRemove}
                  >
                    -
                  </Button>
                  <input
                    ref={inputRef}
                    className={styles.actions__input}
                    type="number"
                    min={1}
                    max={99}
                    id={formId + 'amount'}
                    value={orderAmount}
                    onChange={onChange}
                  />
                  <Button
                    className={styles.actions__button}
                    mode="primary"
                    type="submit"
                    title={`Sepete Ekle: ${name.substring(0, 20)} (${orderAmount} adet)`}
                  >
                    +
                  </Button>
                  <Button
                    className={styles['cart-actions__remove-all']}
                    type="button"
                    mode="text"
                    onClick={(e) => onRemove(e, true)}
                    title={`Sepetten Kaldır: ${name.substring(0, 20)}`}
                  >
                    Sepetten Kaldır
                  </Button>
                </form>
              }
              direction={onCartPage ? 'bottom' : 'right'}
            />
          )}
          {(!onCart || onCartPage) && <p className={styles.info__description}>{description}</p>}
        </div>
        <div
          className={cn(styles.price, {
            [styles.price + '--on-cart']: onCart,
            [styles.price + '--on-cart--page']: onCartPage,
          })}
        >
          {onCart && amountOnCart && amountOnCart > 1 && (
            <span className={styles.price__single}>
              <span className={styles['amount--small-phone']}>x{amountOnCart}</span>({formatMoney(price)})
            </span>
          )}
          <span className={styles.price__total}>
            {formatMoney(onCart && amountOnCart ? price * amountOnCart : price)}
          </span>
        </div>
      </li>
    </>
  );
};

Product.List = ProductList;

export { Product };
