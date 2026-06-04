import { useState } from "react";
import Checkbox from "../../../commons/components/Checkbox";
import { onChangeSelected } from "../types";

export default function ItemCheckbox({
  itemId,
  labelText,
  onChangeSelected,
}: {
  itemId: string;
  labelText?: string;
  onChangeSelected: onChangeSelected;
}) {
  const [checked, setChecked] = useState(
    localStorage.getItem("selectedItems")?.includes(itemId),
  );
  const onChange = () => {
    onChangeSelected(!checked, itemId);
    setChecked(!checked);
  };
  return (
    <Checkbox
      checked={checked}
      labelText={labelText}
      onChange={onChange}
    ></Checkbox>
  );
}
