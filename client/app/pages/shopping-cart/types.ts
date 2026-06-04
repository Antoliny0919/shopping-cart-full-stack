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

export type handleUpdateCartItemType = (
  itemId: string,
  body: { quantity: number },
) => void;
