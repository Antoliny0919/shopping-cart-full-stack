import { useState } from "react";
import styled from "@emotion/styled";
import UnChecked from "../images/un-checked.svg?react";
import Checked from "../images/checked.svg?react";

export default function Checkbox({ labelText }: { labelText?: string }) {
  const [checked, setChecked] = useState(false);

  return (
    <CheckboxLabel>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
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
