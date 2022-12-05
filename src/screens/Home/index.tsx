/* React and React Native */
import React from 'react';

/* Components */
import { ShoppingList, Page, StartButton } from '~/components';

/* Texts */
import { texts } from '~/texts';

/* Hooks */
import useShoppingList from '~/hooks/ShoppingList';

const Home = (): JSX.Element => {
  const { shoppingList, onCheckProduct } = useShoppingList();

  return (
    <Page
      title={texts.shopping_list}
      subtitle={texts.home_subtitle}
      rightComponent={
        <StartButton
          onPress={() => {
            return;
          }}
        />
      }
    >
      <ShoppingList shoppingList={shoppingList} onCheckProduct={onCheckProduct} />
    </Page>
  );
};

export default Home;
