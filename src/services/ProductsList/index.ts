import firestore from '@react-native-firebase/firestore';

import { Product } from '~/models/Product';

const collection = 'Products';

export const getProductsListService = async (): Promise<Product[]> => {
  const documentsList = await firestore().collection(collection).get();

  return documentsList.docs.map((queryDocumentSnapshot) => {
    return queryDocumentSnapshot.data() as Product;
  });
};

export const updateShoppingListProductService = (id: string, newState: boolean) => {
  return firestore().collection<Product>(collection).doc(id).update({
    is_added: newState,
  });
};

export const createProductService = (product: Product) => {
  return firestore().collection(collection).add(product);
};

export const editProductService = (product: Product) => {
  return firestore().collection(collection).doc(product.id).update(product);
};

export const deleteProductService = (id: string) => {
  return firestore().collection(collection).doc(id).delete();
};
