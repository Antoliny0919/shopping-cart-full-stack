import { BASE_URL } from "../../constants";

export async function getCartItems() {
  const response = await fetch(`${BASE_URL}/api/cart/`);
  const data = await response.json();
  return data;
}

export async function deleteCartItem(id: string) {
  await fetch(`${BASE_URL}/api/cart/items/${id}/`, {
    method: "DELETE",
  });
}
