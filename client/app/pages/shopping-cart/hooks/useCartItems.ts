import { useState, useEffect } from "react";
import { CartItem } from "../types";
import { FetchStatus } from "../../../commons/types";
import { getCartItems, deleteCartItem, updateCartItem } from "../api";
import { RemoveCartItem, UpdateCartItem } from "../types";

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
    getItems();
  };

  const updateItem: UpdateCartItem = async (itemId, body) => {
    const data = await updateCartItem(itemId, body);
    return data;
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
