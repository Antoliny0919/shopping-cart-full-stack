import { BASE_URL } from "../../constants";
import { NetworkError } from "../../commons/errors";

export interface OrderItem {
  product_id: string;
  quantity: number;
  product: {
    name: string;
    thumbnail: string;
    price: number;
  };
}

export interface Order {
  id: string;
  hard_delivery_place: boolean;
  selected_coupons: string[];
  selected_items: OrderItem[];
  price_summary: {
    order_price: number;
    discount_price: number;
    delivery_price: number;
    total_price: number;
  };
}

export async function getOrder(orderId: string): Promise<Order> {
  let response: Response;
  try {
    response = await fetch(`${BASE_URL}/api/orders/${orderId}/`);
  } catch {
    throw new NetworkError();
  }
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message);
  }
  return response.json();
}

export async function updateOrder(
  orderId: string,
  body: { selected_coupons?: string[]; hard_delivery_place?: boolean },
) {
  let response: Response;
  try {
    response = await fetch(`${BASE_URL}/api/orders/${orderId}/`, {
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
    const errorData = await response.json();
    throw new Error(errorData.message);
  }
  const data = await response.json();
  return data;
}

export async function getCoupons(orderId: string) {
  let response: Response;
  try {
    response = await fetch(`${BASE_URL}/api/orders/${orderId}/coupons/`);
  } catch {
    throw new NetworkError();
  }
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message);
  }
  return response.json();
}

export async function calculateCouponDiscountPrice(
  orderId: string,
  body: { selected_coupons: string[] },
) {
  let response: Response;
  try {
    response = await fetch(
      `${BASE_URL}/api/orders/${orderId}/discount-summary/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      },
    );
  } catch {
    throw new NetworkError();
  }
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message);
  }
  const data = await response.json();
  return data;
}
