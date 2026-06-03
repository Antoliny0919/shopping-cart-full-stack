import { BASE_URL } from "../../constants";

export async function getCartItems() {
  const response = await fetch(`${BASE_URL}/api/cart/`);
  const data = response.json();
  return data;
}
