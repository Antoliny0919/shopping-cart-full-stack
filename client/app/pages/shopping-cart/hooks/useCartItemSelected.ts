import { useState } from "react";
import { SelectedItemStorage } from "../storages/selected-item-storage";

export default function useCartItemSelected(storage: SelectedItemStorage) {
  const [selectedItemId, setSelectedItemId] = useState<string[] | null>(() => {
    if (typeof window === "undefined") return null;
    return storage.get();
  });

  const initSelectedItemId = (allCartItemsId: string[]) => {
    storage.save(allCartItemsId);
    setSelectedItemId(allCartItemsId);
  };

  const onChangeSelected = (checked: boolean, id: string) => {
    const prev = selectedItemId ?? [];
    const newSelectedItem = checked
      ? [...prev, id]
      : prev.filter((itemId) => itemId !== id);
    storage.save(newSelectedItem);
    setSelectedItemId(newSelectedItem);
  };

  const onChangeAllSelected = (allCartItemsId: string[]) => {
    const isAllChecked =
      (selectedItemId ?? []).length === allCartItemsId.length;
    const newSelectedItem = isAllChecked ? [] : allCartItemsId;
    storage.save(newSelectedItem);
    setSelectedItemId(newSelectedItem);
  };

  return {
    selectedItemId,
    initSelectedItemId,
    onChangeSelected,
    onChangeAllSelected,
  };
}
