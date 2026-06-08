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

export async function updateCartItem(id: string, body: { quantity: number }) {
  const response = await fetch(`${BASE_URL}/api/cart/items/${id}/`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  if (!response.ok) {
    const { errors } = await response.json();
    throw new Error(errors.message);
  }
  const data = await response.json();
  return data;
}
