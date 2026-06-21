import { useState } from "react";
import { getCoupons as getCouponsApi } from "../api";

export default function useCoupons(orderId: string) {
  const [coupons, setCoupons] = useState([]);

  async function getCoupons() {
    const data = await getCouponsApi(orderId);
    setCoupons(data);
  }

  return { coupons, getCoupons };
}
