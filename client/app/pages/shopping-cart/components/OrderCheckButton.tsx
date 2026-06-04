import { Button } from "../../../commons/styles/Button";

export default function OrderCheckButton(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>,
) {
  return (
    <Button type="button" {...props}>
      주문 확인
    </Button>
  );
}
