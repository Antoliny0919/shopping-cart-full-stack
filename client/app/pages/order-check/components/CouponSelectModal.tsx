import styled from "@emotion/styled";
import Modal from "../../../commons/components/Modal";
import InfoText from "../../../commons/components/InfoText";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function CouponSelectModal({ isOpen, onClose }: Props) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Title>쿠폰을 선택해 주세요</Title>
      <InfoText>쿠폰은 최대 2개까지 사용할 수 있습니다.</InfoText>
    </Modal>
  );
}

const Title = styled.h2`
  font-weight: 700;
  font-size: 18px;
  margin: 0;
`;
