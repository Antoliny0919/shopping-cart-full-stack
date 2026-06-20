import styled from "@emotion/styled";
import { Link } from "react-router";
import GoBack from "../../commons/images/go-back.svg?react";
import Navigation from "../../commons/components/Navigation";
import Section from "../order-check/components/Section";

export default function OrderCheckPage() {
  return (
    <OrderCheckPageContainer>
      <Navigation>
        <Link to="/cart/">
          <GoBack />
        </Link>
      </Navigation>
      <Section />
    </OrderCheckPageContainer>
  );
}

const OrderCheckPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`;
