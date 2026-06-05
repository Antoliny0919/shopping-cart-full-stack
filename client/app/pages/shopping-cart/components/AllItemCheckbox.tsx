import Checkbox from "../../../commons/components/Checkbox";

interface Props {
  labelText: string;
  checked: boolean;
  onChangeAllSelected: (allCartItemsId: string[]) => void;
  allItemsId: string[];
}

export default function AllItemCheckbox({
  labelText,
  checked,
  onChangeAllSelected,
  allItemsId,
}: Props) {
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
