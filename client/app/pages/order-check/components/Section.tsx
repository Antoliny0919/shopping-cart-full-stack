import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import styled from "@emotion/styled";
import { FixedButton } from "../../../commons/styles/Button";
import OrderItemList from "./OrderItemList";
import Checkbox from "../../../commons/components/Checkbox";
import OrderSummary from "./OrderSummary";
import Info from "../../../commons/images/info.svg?react";
import CouponSelectModal from "./CouponSelectModal";
import {
  getOrder,
  Order,
  getCoupons,
  calculateCouponDiscountPrice,
  updateOrder,
} from "../api";
import NetworkError from "../../../commons/components/NetworkError";

interface Props {
  orderId: string;
}

export default function Section({ orderId }: Props) {
  const [isCouponModalOpen, setIsCouponModalOpen] = useState(false);
  const [coupons, setCoupons] = useState([]);
  const [order, setOrder] = useState<Order | null>(null);
  const [loadStatus, setLoadStatus] = useState<"loading" | "success" | "error">(
    "loading",
  );

  const navigate = useNavigate();

  useEffect(() => {
    getOrder(orderId)
      .then((data) => {
        setOrder(data);
        setLoadStatus("success");
      })
      .catch(() => {
        setLoadStatus("error");
      });
  }, [orderId]);

  function onClose() {
    setIsCouponModalOpen(false);
  }

  if (loadStatus === "error") return <NetworkError />;

  async function couponModalOpen() {
    setIsCouponModalOpen(true);
    const data = await getCoupons(orderId);
    setCoupons(data);
  }

  async function calculateDiscountPrice(
    selectedCoupons: string[],
  ): Promise<number> {
    if (order) {
      const data = await calculateCouponDiscountPrice(order.id, {
        selected_coupons: selectedCoupons,
      });
      return data.discount_price;
    }
    return 0;
  }

  async function onSubmitCoupon(selected: string[]) {
    const order = await updateOrder(orderId, {
      selected_coupons: selected,
    });
    setOrder(order);
    onClose();
  }

  async function onToggleDeliveryPlace(state: boolean) {
    const order = await updateOrder(orderId, {
      hard_delivery_place: state,
    });
    setOrder(order);
  }

  const orderItemsTypeLength = order?.selected_items.length ?? 0;
  const orderItemsLength =
    order?.selected_items.reduce((count, item) => count + item.quantity, 0) ??
    0;
  function goToPurchaseCheckPage() {
    if (order)
      navigate(`/cart/check/purchase/`, {
        state: {
          orderItemsTypeLength,
          orderItemsLength,
          totalPrice: order.price_summary.total_price,
        },
      });
  }

  return (
    <SectionLayout>
      <Title>주문 확인</Title>
      {order && (
        <>
          <SubText>
            총 {orderItemsTypeLength}종류의 상품 {orderItemsLength}
            개를 주문합니다.
          </SubText>
          <SubText>최종 결제 금액을 확인해 주세요.</SubText>
          <OrderItemList items={order.selected_items} />
          <CouponApplyButton onClick={couponModalOpen}>
            쿠폰 적용
          </CouponApplyButton>
          <CouponSelectModal
            selectedCoupons={order.selected_coupons}
            coupons={coupons}
            initialDiscountPrice={order.price_summary.discount_price}
            calculateDiscountPrice={calculateDiscountPrice}
            isOpen={isCouponModalOpen}
            onClose={onClose}
            onSubmit={onSubmitCoupon}
          />
          <DeliveryOption>
            <p>배송 정보</p>
            <Checkbox
              labelText={"제주도 및 도서 산간 지역"}
              checked={order.hard_delivery_place}
              onChange={() => onToggleDeliveryPlace(!order.hard_delivery_place)}
            ></Checkbox>
          </DeliveryOption>
          <SubText className="icon-text">
            <Info aria-label="정보" />총 주문 금액이 100,000원 이상일 경우 무료
            배송됩니다.
          </SubText>
          <OrderSummary
            price={order.price_summary.order_price}
            couponDiscount={order.price_summary.discount_price}
            deliveryFee={order.price_summary.delivery_price}
            totalPrice={order.price_summary.total_price}
          />
        </>
      )}
      <FixedButton
        type="button"
        onClick={goToPurchaseCheckPage}
        disabled={loadStatus !== "success"}
      >
        결제하기
      </FixedButton>
    </SectionLayout>
  );
}

const SectionLayout = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1.5rem;
  margin-bottom: 4rem;
  overflow: scroll;

  .icon-text {
    display: flex;
    align-items: center;
    gap: 4px;
    margin-bottom: 8px;
  }
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 24px;
`;

const SubText = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 12px;
  margin: 2px 0;
`;

const CouponApplyButton = styled.button`
  background-color: transparent;
  font-weight: 700;
  padding: 1rem 0;
  font-size: 16px;
  text-align: center;
  color: #333333bf;
  border: solid #333333bf 1px;
  border-radius: 5px;
  width: 100%;
  max-width: 768px;
`;

const DeliveryOption = styled.div`
  padding: 2rem 0;
  p {
    font-weight: 700;
    font-size: 16px;
  }
`;
