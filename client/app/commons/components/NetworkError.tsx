import styled from "@emotion/styled";
import networkErrorImage from "../images/network-error.png";

export default function NetworkError() {
  return (
    <Wrapper>
      <Image src={networkErrorImage} alt="네트워크 에러" />
      <Title>네트워크 연결 오류</Title>
      <Description>
        서버와 연결할 수 없습니다.
        <br />
        인터넷 연결을 확인하고 다시 시도해 주세요.
      </Description>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 3rem 1.5rem;
  text-align: center;
`;

const Image = styled.img`
  width: 96px;
  height: 96px;
`;

const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1a1a2e;
  margin: 0;
`;

const Description = styled.p`
  font-size: 0.9rem;
  color: #6b7280;
  line-height: 1.6;
  margin: 0;
`;
