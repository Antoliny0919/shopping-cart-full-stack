import { Link } from "react-router";
import Logo from "../images/logo.svg?react";
import Navigation from "../../../commons/components/Navigation";

export default function ShoppingCartNavigation() {
  return (
    <Navigation>
      <Link to="/">
        <Logo />
      </Link>
    </Navigation>
  );
}
