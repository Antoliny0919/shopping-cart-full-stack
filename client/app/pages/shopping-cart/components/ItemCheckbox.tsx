import Checkbox from "../../../commons/components/Checkbox";
import { onChangeSelected } from "../types";

export default function ItemCheckbox({
  itemId,
  checked,
  onChangeSelected,
}: {
  itemId: string;
  checked: boolean;
  onChangeSelected: onChangeSelected;
}) {
  const onChange = () => {
    onChangeSelected(!checked, itemId);
  };
  return <Checkbox checked={checked} onChange={onChange}></Checkbox>;
}
