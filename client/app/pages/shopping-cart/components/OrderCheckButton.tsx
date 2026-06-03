import { Button } from "../../../commons/styles/Button";

export default function OrderCheckButton({ onClick }: { onClick: () => void }) {
  return (
    <Button type="button" onClick={onClick}>
      주문 확인
    </Button>
  );
}
