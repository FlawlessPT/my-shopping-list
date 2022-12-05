/* React and React Native */
import React from 'react';

/* External Libs */
import { FlashList } from '@shopify/flash-list';

/* Styles */
import { HorizontalSafeMargin } from '~/styles';
import { Spacer } from './styles';

/* Components */
import ShoppingListCard from './ShoppingListCard';

/* Utils */
import { flashListContentContainer } from './utils';

/* Models */
import { ShoppingListProduct } from '~/models/ShoppingList';

interface ShoppingListProps {
  shoppingList: ShoppingListProduct[];
  onCheckProduct: (newState: boolean) => void;
}

const ShoppingList = ({ shoppingList, onCheckProduct }: ShoppingListProps): JSX.Element => {
  return (
    <FlashList
      data={shoppingList}
      renderItem={({ item, index }) => (
        <HorizontalSafeMargin>
          <ShoppingListCard key={index} {...item} isChecked={item.is_checked} onChangeValue={onCheckProduct} />
        </HorizontalSafeMargin>
      )}
      estimatedItemSize={shoppingList.length}
      ItemSeparatorComponent={() => <Spacer />}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={flashListContentContainer}
    />
  );
};

export default ShoppingList;
