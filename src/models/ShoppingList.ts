import { Product } from './Product';

export interface ShoppingListProduct extends Product {
  is_checked: boolean;
}
