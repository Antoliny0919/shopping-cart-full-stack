import { useState, useEffect } from "react";
import { CartItem } from "../types";
import { FetchStatus } from "../../../commons/types";
import { getCartItems, deleteCartItem, updateCartItem } from "../api";

type RemoveCartItem = (
  itemId: string,
) => Promise<
  { success: boolean; error?: undefined } | { success: boolean; error: unknown }
>;

type UpdateCartItem = (
  imemId: string,
  body: { quantity: number },
) => Promise<
  { success: boolean; error?: undefined } | { success: boolean; error: unknown }
>;

export default function useCartItems() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [fetchStatus, setFetchStatus] = useState<FetchStatus>("idle");

  const removeItem: RemoveCartItem = async (itemId) => {
    try {
      await deleteCartItem(itemId);
      setItems((prev) => prev.filter((item) => item.product_id !== itemId));
      return { success: true };
    } catch (err) {
      return { success: false, error: err };
    }
  };

  const updateItem: UpdateCartItem = async (itemId, body) => {
    const original = items.find((item) => item.product_id === itemId);
    setItems((prev) =>
      prev.map((item) =>
        item.product_id === itemId ? { ...item, ...body } : item,
      ),
    );
    try {
      await updateCartItem(itemId, body);
      return { success: true };
    } catch (err) {
      setItems((prev) =>
        prev.map((item) => (item.product_id === itemId ? original! : item)),
      );
      return { success: false, error: err };
    }
  };

  useEffect(function initialCartItems() {
    async function fetchItems() {
      setFetchStatus("loading");
      try {
        const data = await getCartItems();
        setItems(data);
        setFetchStatus("success");
      } catch {
        setFetchStatus("error");
      }
    }
    fetchItems();
  }, []);

  return {
    items,
    fetchStatus,
    removeItem,
    updateItem,
  };
}
