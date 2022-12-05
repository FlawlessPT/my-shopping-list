/* Models */
import { ShoppingListProduct } from '~/models/ShoppingList';

import { shoppingList } from '~/data/shoppingList';

interface UseShoppingListResult {
  shoppingList: ShoppingListProduct[];
  onCheckProduct: (newState: boolean) => void;
}

const useShoppingList = (): UseShoppingListResult => {
  const checkProduct = (newState: boolean) => {
    console.log(newState);
  };

  return {
    shoppingList,
    onCheckProduct: checkProduct,
  };
};

export default useShoppingList;
