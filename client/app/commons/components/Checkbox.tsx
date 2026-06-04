import styled from "@emotion/styled";
import UnChecked from "../images/un-checked.svg?react";
import Checked from "../images/checked.svg?react";

type CheckboxProps = React.ComponentPropsWithoutRef<"input"> & {
  labelText?: string;
};

export default function Checkbox({ labelText, checked, ...props }: CheckboxProps) {
  return (
    <CheckboxLabel>
      <input type="checkbox" {...props} checked={checked} />
      {checked ? <Checked /> : <UnChecked />}
      {labelText && <span>{labelText}</span>}
    </CheckboxLabel>
  );
}

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 4px;
  input {
    display: none;
  }

  span {
    font-weight: 500;
    font-size: 12px;
  }
`;
