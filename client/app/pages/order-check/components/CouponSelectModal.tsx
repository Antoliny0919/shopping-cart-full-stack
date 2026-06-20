import styled from "@emotion/styled";
import Modal from "../../../commons/components/Modal";
import InfoText from "../../../commons/components/InfoText";
import Checkbox from "../../../commons/components/Checkbox";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function CouponSelectModal({ isOpen, onClose }: Props) {
  const couponItems = [
    {
      id: "FIXED5000",
      name: "5,000원 할인 쿠폰",
      expiriation_date: "2026년 11월 30일",
      description: "최소 주문 금액: 100,000원",
    },
    {
      id: "BOGO",
      name: "2+1 쿠폰",
      expiriation_date: "2026년 6월 30일",
      description: "",
    },
    {
      id: "FREESHIPPING",
      name: "무료 배송 쿠폰",
      expiriation_date: "2026년 8월 31일",
      description: "최소 주문 금액: 50,000원",
    },
    {
      id: "MIRACLESALE",
      name: "30% 시간제 할인 쿠폰",
      expiriation_date: "2026년 7월 31일",
      description: "사용 가능 시간: 오전 4시부터 7시까지",
    },
  ];
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Title>쿠폰을 선택해 주세요</Title>
      <InfoText>쿠폰은 최대 2개까지 사용할 수 있습니다.</InfoText>
      <CouponList>
        {couponItems.map(
          (item: {
            id: string;
            name: string;
            expiriation_date: string;
            description: string;
          }) => {
            return (
              <CouponItem key={item.id}>
                <CouponLayout>
                  <CouponHeader>
                    <Checkbox
                      labelText={item.name}
                      onChange={() => {}}
                      checked={false}
                    ></Checkbox>
                  </CouponHeader>
                  <div>
                    <SubText>만료일: {item.expiriation_date}</SubText>
                    <SubText>{item.description}</SubText>
                  </div>
                </CouponLayout>
              </CouponItem>
            );
          },
        )}
      </CouponList>
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

const CouponItem = styled.li`
  list-style: none;
  display: flex;
  gap: 12px;
  width: 100%;
  width: 318px;
  height: 82px;
  border-top: 1px solid #0000001a;
`;
