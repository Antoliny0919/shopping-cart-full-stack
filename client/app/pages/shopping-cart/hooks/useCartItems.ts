import { useState, useEffect } from "react";
import { CartItem } from "../types";
import { FetchStatus } from "../../../commons/types";
import { getCartItems, deleteCartItem, updateCartItem } from "../api";

type RemoveCartItem = (itemId: string) => void;
type UpdateCartItem = (
  imemId: string,
  body: { quantity: number },
) => void | Promise<void>;

export default function useCartItems() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [fetchStatus, setFetchStatus] = useState<FetchStatus>("idle");

  const getItems = async () => {
    setFetchStatus("loading");
    try {
      const data = await getCartItems();
      setItems(data);
      setFetchStatus("success");
    } catch {
      setFetchStatus("error");
    }
  };

  const removeItem: RemoveCartItem = async (itemId) => {
    await deleteCartItem(itemId);
    setItems((prev) => prev.filter((item) => item.product_id !== itemId));
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
    } catch {
      setItems((prev) =>
        prev.map((item) => (item.product_id === itemId ? original! : item)),
      );
    }
  };

  useEffect(function initialCartItems() {
    getItems();
    return;
  }, []);

  return {
    items,
    fetchStatus,
    removeItem,
    updateItem,
  };
}
