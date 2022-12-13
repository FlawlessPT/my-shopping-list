import firestore, { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import { ShoppingListProduct } from '~/models/ShoppingList';

export const getShoppingListService = (): FirebaseFirestoreTypes.Query<FirebaseFirestoreTypes.DocumentData> => {
  return firestore().collection('Products').where('is_added', '==', true);
};

export const checkProductService = (id: string, newState: boolean) => {
  return firestore().collection<ShoppingListProduct>('Products').doc(id).update({
    is_checked: newState,
  });
};
