import Navigation from "../../../commons/components/Navigation";
import GoBack from "../../../commons/images/go-back.svg?react";
import { Link } from "react-router";

export default function OrderCheckNavigation() {
  return (
    <Navigation>
      <Link to="/cart/">
        <GoBack />
      </Link>
    </Navigation>
  );
}
