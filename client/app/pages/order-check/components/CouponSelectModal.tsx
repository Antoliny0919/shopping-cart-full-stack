import styled from "@emotion/styled";
import Modal from "../../../commons/components/Modal";
import InfoText from "../../../commons/components/InfoText";
import Checkbox from "../../../commons/components/Checkbox";
import { Button } from "../../../commons/styles/Button";
import { Coupon } from "../types";

interface Props {
  coupons: Coupon[];
  isOpen: boolean;
  onClose: () => void;
}

export default function CouponSelectModal({ coupons, isOpen, onClose }: Props) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Title>쿠폰을 선택해 주세요</Title>
      <InfoText>쿠폰은 최대 2개까지 사용할 수 있습니다.</InfoText>
      <CouponList>
        {coupons.map(
          (item: {
            id: string;
            name: string;
            expiration_date: string;
            description: string;
            is_active: boolean;
          }) => {
            return (
              <CouponItem key={item.id} isActive={item.is_active}>
                <CouponLayout>
                  <CouponHeader>
                    <Checkbox
                      labelText={item.name}
                      onChange={() => {}}
                      checked={false}
                    ></Checkbox>
                  </CouponHeader>
                  <div>
                    <SubText>만료일: {item.expiration_date}</SubText>
                    <SubText>{item.description}</SubText>
                  </div>
                </CouponLayout>
              </CouponItem>
            );
          },
        )}
      </CouponList>
      <CouponUseButton>총 6,000원 할인 쿠폰 사용하기</CouponUseButton>
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

const SubText = styled.p`
  font-weight: 500;
  font-size: 12px;
  margin: 4px 0;
`;

const CouponLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

const CouponHeader = styled.div`
  margin: 8px 0;
`;

const CouponUseButton = styled(Button)`
  padding: 12px 0;
  border-radius: 5px;
  margin-top: auto;
`;

const CouponItem = styled.li<{ isActive: boolean }>`
  list-style: none;
  display: flex;
  gap: 12px;
  width: 100%;
  width: 318px;
  height: 82px;
  border-top: 1px solid #0000001a;
  opacity: ${(props) => (props.isActive ? 1 : 0.3)};
`;
