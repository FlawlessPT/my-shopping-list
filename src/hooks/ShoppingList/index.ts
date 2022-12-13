/* React and React Native */
import { useEffect, useState } from 'react';

/* Models */
import { ShoppingListProduct } from '~/models/ShoppingList';

/* Data */
// TODO: Create a mock environment to use this mock
// import { shoppingList } from '~/data/shoppingList';

/* Services */
import { getShoppingListService, checkProductService } from '~/services/ShoppingList';

interface UseShoppingListResult {
  shoppingList: ShoppingListProduct[] | undefined;
  hasError: boolean;
  checkProduct: (id: string, newState: boolean) => Promise<void>;
}

const useShoppingList = (): UseShoppingListResult => {
  const [shoppingList, setShoppingList] = useState<ShoppingListProduct[]>();

  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    const subscriber = getShoppingListService().onSnapshot(
      (documentSnapshot) => {
        const productList: ShoppingListProduct[] = [];

        documentSnapshot.forEach((document) => {
          const product = document.data() as ShoppingListProduct;
          productList.push({
            ...product,
            id: document.id,
          });
        });
        setShoppingList(productList);
      },
      (err) => {
        // eslint-disable-next-line no-alert
        alert(err);
        setHasError(true);
      }
    );

    // Cleanup function to stop listening firestore when it isnt needed
    return () => subscriber();
  }, []);

  const checkProduct = async (id: string, newState: boolean): Promise<void> => {
    return checkProductService(id, newState).catch((err) => {
      alert(err);
    });
  };

  return {
    shoppingList,
    hasError,
    checkProduct,
  };
};

export default useShoppingList;
