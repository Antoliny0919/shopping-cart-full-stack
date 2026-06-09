export interface ProductType {
  id: string;
  name: string;
  price: number;
  thumbnail: string;
}

class Product {
  #id: string;
  #name: string;
  #price: number;
  #thumbnail: string;

  constructor({ name, price, thumbnail }: Omit<ProductType, "id">) {
    this.#validate({ name, price, thumbnail });
    this.#id = crypto.randomUUID();
    this.#name = name;
    this.#price = price;
    this.#thumbnail = thumbnail;
  }

  #validate({ name, price }: Omit<ProductType, "id">) {
    if (!name || name.trim() === "") {
      throw new Error("상품명은 빈 값이어서는 안됩니다.");
    }
    if (!Number.isFinite(price) || price <= 0) {
      throw new Error("가격은 0보다 큰 숫자여야 합니다.");
    }
  }

  getId() {
    return this.#id;
  }

  toObject() {
    return {
      id: this.#id,
      name: this.#name,
      price: this.#price,
      thumbnail: this.#thumbnail,
    };
  }
}

export default Product;
