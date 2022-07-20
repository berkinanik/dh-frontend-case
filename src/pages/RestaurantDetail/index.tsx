import { Cart } from 'components/Cart';
import { Product } from 'components/Product';
import { RestaurantHeader } from 'components/RestaurantHeader';
import { Wrapper } from 'layouts/Wrapper';
import { CartActionTypes, useCartContext } from 'context';

import menuData from 'lib/menuData.json';
import restaurantData from 'lib/restoranData.json';
import { useEffect } from 'react';

import styles from './RestaurantDetail.module.scss';

export const RestaurantDetail: React.FC = () => {
  const menu = menuData.d.ResultSet;
  const restaurant = restaurantData.d.ResultSet;
  const dummySelectedAddress = restaurant.DeliveryAreas[0];

  const { cartDispatch } = useCartContext();

  useEffect(() => {
    cartDispatch({
      type: CartActionTypes.SET_INITIAL_RESTAURANT_DATA,
      payload: {
        restaurant: restaurant.DisplayName,
        address: dummySelectedAddress.AreaName,
      },
    });
  });

  return (
    <Wrapper id="restaurant-detail-wrapper" className={styles.container}>
      <Cart className={styles.cart} />
      <section className={styles.detail} id="restaurant-detail">
        <RestaurantHeader
          name={restaurant.DisplayName}
          address={restaurant.AddressText}
          minimumPrice={dummySelectedAddress.MinimumPrice}
          deliveryTime={dummySelectedAddress.DeliveryTime}
          speed={restaurant.Speed}
          flavour={restaurant.Flavour}
          serving={restaurant.Serving}
          tags={restaurant.ResturantCuisines.map((cuisine) => cuisine.Name)}
        />
        {menu.map((category) => (
          <Product.List key={category.CategoryName} title={category.CategoryDisplayName}>
            {category.Products.map((product) => (
              <Product
                key={product.ProductId}
                item={{
                  id: product.ProductId,
                  description: product.Description,
                  name: product.DisplayName,
                  price: parseFloat(product.ExtendedPrice) || parseFloat(product.ListPrice),
                }}
              />
            ))}
          </Product.List>
        ))}
      </section>
    </Wrapper>
  );
};
