export interface CartItem {
  product_id: string;
  quantity: number;
  product: Product;
}

export interface Product {
  name: string;
  thumbnail: string;
  price: number;
}

export type RemoveCartItem = (itemId: string) => void;
export type UpdateCartItem = (
  itemId: string,
  body: { quantity: number },
) => void;
export type onChangeSelected = (checked: boolean, id: string) => void;

export interface CartItemsProps {
  cartItems: CartItem[];
  updateItem: UpdateCartItem;
  removeItem: RemoveCartItem;
  onChangeSelected: onChangeSelected;
}
