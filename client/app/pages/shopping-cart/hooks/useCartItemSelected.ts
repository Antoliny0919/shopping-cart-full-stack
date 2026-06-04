import { useState } from "react";

export default function useCartItemSelected() {
  const [selectedItemId, setSelectedItemId] = useState<string[] | null>(() => {
    if (typeof window === "undefined") return null;
    const stored = localStorage.getItem("selectedItems");
    return stored ? JSON.parse(stored) : null;
  });

  const initSelectedItemId = (allCartItemsId: string[]) => {
    localStorage.setItem("selectedItems", JSON.stringify(allCartItemsId));
    setSelectedItemId(allCartItemsId);
  };

  const onChangeSelected = (checked: boolean, id: string) => {
    const prev = selectedItemId ?? [];
    const newSelectedItem = checked
      ? [...prev, id]
      : prev.filter((itemId) => itemId !== id);
    localStorage.setItem("selectedItems", JSON.stringify(newSelectedItem));
    setSelectedItemId(newSelectedItem);
  };

  return { selectedItemId, initSelectedItemId, onChangeSelected };
}
