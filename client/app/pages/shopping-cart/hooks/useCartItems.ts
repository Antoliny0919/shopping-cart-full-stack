import { useState, useEffect } from "react";
import { CartItem } from "../types";
import { FetchStatus } from "../../../commons/types";
import { getCartItems, deleteCartItem, updateCartItem } from "../api";
import { mutate } from "../../../commons/utils";

export default function useCartItems() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [fetchStatus, setFetchStatus] = useState<FetchStatus>("idle");

  async function removeItem(
    itemId: string,
  ): Promise<{ success: boolean; error?: unknown }> {
    const response = await mutate({
      api: () => deleteCartItem(itemId),
      onSuccess: () =>
        setItems((prev) => prev.filter((item) => item.product_id !== itemId)),
    });
    return response;
  }

  async function updateItem(
    itemId: string,
    body: { quantity: number },
  ): Promise<{ success: boolean; error?: unknown }> {
    const original = items.find((item) => item.product_id === itemId);
    const response = await mutate({
      api: () => updateCartItem(itemId, body),
      onMutate: () => {
        setItems((prev) =>
          prev.map((item) =>
            item.product_id === itemId ? { ...item, ...body } : item,
          ),
        );
        return () =>
          setItems((prev) =>
            prev.map((item) => (item.product_id === itemId ? original! : item)),
          );
      },
    });
    return response;
  }

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
