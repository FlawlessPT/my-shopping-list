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
import { ActivityIndicator, Text } from 'react-native';

interface ShoppingListProps {
  shoppingList: ShoppingListProduct[] | undefined;
  checkProduct: (id: string, newState: boolean) => Promise<void>;
}

const ShoppingList = ({ shoppingList, checkProduct }: ShoppingListProps): JSX.Element => {
  return shoppingList ? (
    <FlashList
      data={shoppingList}
      renderItem={({ item }) => (
        <HorizontalSafeMargin>
          <ShoppingListCard
            key={item.id}
            {...item}
            isChecked={item.is_checked}
            onChangeValue={(newState: boolean) => {
              if (item.id) checkProduct(item.id, newState);
            }}
          />
        </HorizontalSafeMargin>
      )}
      estimatedItemSize={shoppingList.length}
      ItemSeparatorComponent={() => <Spacer />}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={flashListContentContainer}
      ListEmptyComponent={<Text>List empty...</Text>}
      // TODO: Validate whats will change using this prop
      ListHeaderComponent={<></>}
    />
  ) : (
    <ActivityIndicator />
  );
};

export default ShoppingList;
