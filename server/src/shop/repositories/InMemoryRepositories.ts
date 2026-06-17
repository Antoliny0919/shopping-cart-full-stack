import Cart from "../models/Cart.js";
import Product from "../models/Product.js";
import TempOrder from "../models/TempOrder.js";

export interface CartRepository {
  get: () => Cart;
}

export interface ProductRepository {
  findById: (id: string) => Product | undefined;
  save: (id: string, obj: Product) => Map<string, Product>;
  exists: (id: string) => boolean;
  update: (id: string, obj: Product) => Map<string, Product>;
  delete: (id: string) => void;
  findAll: () => Product[];
  clearAll: () => void;
}

export class InMemoryCartRepository implements CartRepository {
  private cart = new Cart();

  get() {
    return this.cart;
  }
}

export class InMemoryProductRepository implements ProductRepository {
  private products = new Map<string, Product>();

  findById(id: string) {
    return this.products.get(id);
  }

  save(id: string, obj: Product) {
    return this.products.set(id, obj);
  }

  exists(id: string): boolean {
    return this.products.has(id);
  }

  update(id: string, obj: Product) {
    return this.products.set(id, obj);
  }

  delete(id: string) {
    return this.products.delete(id);
  }

  findAll() {
    return [...this.products.values()];
  }

  clearAll() {
    return (this.products = new Map());
  }
}

export interface TempOrderRepository {
  save: (id: string, obj: TempOrder) => void;
}

export class InMemoryTempOrderRepository implements TempOrderRepository {
  private tempOrders = new Map<string, TempOrder>();

  save(id: string, obj: TempOrder) {
    this.tempOrders.set(id, obj);
  }
}
