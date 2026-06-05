import styled from "@emotion/styled";
import { Link } from "react-router";
import Section from "../order-check/Section";
import Navigation from "../../commons/components/Navigation";
import Logo from "../../commons/images/logo.svg?react";

export default function ShoppingCartPage() {
  return (
    <ShoppingCartPageContainer>
      <Navigation>
        <Link to="/">
          <Logo />
        </Link>
      </Navigation>
      <Section />
    </ShoppingCartPageContainer>
  );
}

const ShoppingCartPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`;
