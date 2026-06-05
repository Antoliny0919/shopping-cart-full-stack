export interface SelectedItemStorage {
  get: () => string[] | null;
  save: (value: string[]) => void;
}

const KEY = "cart-selected-items";

export class SelectedItemLocalStorage implements SelectedItemStorage {
  get() {
    const stored = localStorage.getItem(KEY);
    return stored ? JSON.parse(stored) : null;
  }

  save(value: string[]) {
    localStorage.setItem(KEY, JSON.stringify(value));
  }
}
