import Checkbox from "../../../commons/components/Checkbox";

export default function ItemCheckbox({
  itemId,
  checked,
  onChangeSelected,
}: {
  itemId: string;
  checked: boolean;
  onChangeSelected: (checked: boolean, id: string) => void;
}) {
  const onChange = () => {
    onChangeSelected(!checked, itemId);
  };
  return <Checkbox checked={checked} onChange={onChange}></Checkbox>;
}
