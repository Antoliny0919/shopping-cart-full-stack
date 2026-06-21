import styled from "@emotion/styled";
import { useState } from "react";
import Modal from "../../../commons/components/Modal";
import InfoText from "../../../commons/components/InfoText";
import { Button } from "../../../commons/styles/Button";
import { Coupon as CouponType } from "../types";
import Coupon from "./Coupon";
import Toast from "../../../commons/components/Toast";
import { formatToKoreanPrice } from "../../../commons/utils";

interface Props {
  selectedCoupons: string[];
  coupons: CouponType[];
  initialDiscountPrice: number;
  calculateDiscountPrice: (selectedCoupons: string[]) => Promise<number>;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (selected: string[]) => void;
}

export default function CouponSelectModal({
  selectedCoupons,
  coupons,
  initialDiscountPrice,
  calculateDiscountPrice,
  isOpen,
  onClose,
  onSubmit,
}: Props) {
  const [localSelected, setLocalSelected] = useState<string[]>(selectedCoupons);
  const [discountPrice, setDiscountPrice] =
    useState<number>(initialDiscountPrice);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function onToggle(item: CouponType) {
    const next = localSelected.includes(item.id)
      ? localSelected.filter((id) => id !== item.id)
      : [...localSelected, item.id];
    try {
      const price = await calculateDiscountPrice(next);
      setLocalSelected(next);
      setDiscountPrice(price);
    } catch (err) {
      setErrorMessage(
        err instanceof Error ? err.message : "오류가 발생했습니다.",
      );
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {errorMessage && (
        <Toast message={errorMessage} onClose={() => setErrorMessage(null)} />
      )}
      <Title>쿠폰을 선택해 주세요</Title>
      <InfoText>쿠폰은 최대 2개까지 사용할 수 있습니다.</InfoText>
      <CouponList>
        {coupons.map((item: CouponType) => {
          return (
            <Coupon
              key={item.id}
              item={item}
              onToggle={() => onToggle(item)}
              isSelect={localSelected.includes(item.id)}
            />
          );
        })}
      </CouponList>
      <CouponUseButton onClick={() => onSubmit(localSelected)}>
        총 {formatToKoreanPrice(discountPrice)} 할인 쿠폰 사용하기
      </CouponUseButton>
    </Modal>
  );
}

const Title = styled.h2`
  font-weight: 700;
  font-size: 18px;
  margin: 0;
`;

const CouponList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0;
  width: 100%;
  overflow: scroll;
`;

const CouponUseButton = styled(Button)`
  padding: 12px 0;
  border-radius: 5px;
  margin-top: auto;
`;
