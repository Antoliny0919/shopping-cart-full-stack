import Checkbox from "../../../commons/components/Checkbox";
import { OnChangeAllSelected } from "../types";

export default function AllItemCheckbox({
  labelText,
  checked,
  onChangeAllSelected,
  allItemsId,
}: {
  labelText: string;
  checked: boolean;
  onChangeAllSelected: OnChangeAllSelected;
  allItemsId: string[];
}) {
  const onChange = () => {
    onChangeAllSelected(allItemsId);
  };
  return (
    <Checkbox
      checked={checked}
      labelText={labelText}
      onChange={onChange}
    ></Checkbox>
  );
}
