import NavLayout from "../../commons/components/Navigation";
import GoBack from "../../../commons/images/go-back.svg?react";
import { Link } from "react-router";

export default function Navigation() {
  return (
    <NavLayout>
      <Link to="/cart/">
        <GoBack />
      </Link>
    </NavLayout>
  );
}
