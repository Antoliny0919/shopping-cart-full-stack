import { BASE_URL } from "../../constants";

export class NetworkError {
  message: string;
  status: number;
  constructor(
    message: string = "네트워크 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.",
    status: number = 500,
  ) {
    this.message = message;
    this.status = status;
  }
}

export async function getCartItems() {
  try {
    const response = await fetch(`${BASE_URL}/api/cart/`);
    const data = await response.json();
    return data;
  } catch {
    throw new NetworkError();
  }
}

export async function deleteCartItem(id: string) {
  let response: Response;
  try {
    response = await fetch(`${BASE_URL}/api/cart/items/${id}/`, {
      method: "DELETE",
    });
  } catch {
    throw new NetworkError();
  }
  if (!response.ok) {
    const { message } = await response.json();
    throw new Error(message);
  }
}

export async function updateCartItem(id: string, body: { quantity: number }) {
  let response: Response;
  try {
    response = await fetch(`${BASE_URL}/api/cart/items/${id}/`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  } catch {
    throw new NetworkError();
  }
  if (!response.ok) {
    const { errors } = await response.json();
    throw new Error(errors.message);
  }
  const data = await response.json();
  return data;
}
