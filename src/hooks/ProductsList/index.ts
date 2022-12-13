/* React and React Native */
import { useEffect, useState } from 'react';

/* Data */
// TODO: Create a mock environment to use this mock
// import { shoppingList } from '~/data/shoppingList';

/* Services */
import {
  getProductsListService,
  updateShoppingListProductService,
  createProductService,
  editProductService,
  deleteProductService,
} from '~/services/ProductsList';

/* Models */
import { Product } from '~/models/Product';

interface UseProductsListProps {
  shouldFetchOnRender?: boolean;
}

interface UseProductsListResult {
  productsList: Product[];
  isLoading: boolean;
  hasError: boolean;
  updateShoppingListProduct: (id: string, newState: boolean) => Promise<void>;
  createProduct: (product: Product) => Promise<void>;
  editProduct: (product: Product) => Promise<void>;
  deleteProduct: (id: string) => Promise<void>;
}

const useProductsList = ({ shouldFetchOnRender }: UseProductsListProps): UseProductsListResult => {
  const [productsList, setProductsList] = useState<Product[]>([]);

  const [hasError, setHasError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getProductsListService();
        if (products.length > 0) {
          setProductsList(productsList);
        }
      } catch (err) {
        // eslint-disable-next-line no-alert
        alert(err);
        setHasError(true);
      }
    };

    if (shouldFetchOnRender) {
      fetchProducts();
    }
  }, [productsList, shouldFetchOnRender]);

  const updateShoppingListProduct = async (id: string, newState: boolean): Promise<void> => {
    return updateShoppingListProductService(id, newState).catch((err) => {
      alert(err);
    });
  };

  const createProduct = async (product: Product): Promise<void> => {
    try {
      setIsLoading(true);
      await createProductService(product);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      alert('error creating product');
    }
  };

  const editProduct = async (product: Product): Promise<void> => {
    try {
      setIsLoading(true);
      await editProductService(product);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.log(err);
      alert('error updating product');
    }
  };

  const deleteProduct = async (id: string): Promise<void> => {
    try {
      setIsLoading(true);
      await deleteProductService(id);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      alert('error deleting product');
    }
  };

  return {
    productsList,
    isLoading,
    hasError,
    updateShoppingListProduct,
    createProduct,
    editProduct,
    deleteProduct,
  };
};

export default useProductsList;
