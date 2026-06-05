import styled from "@emotion/styled";

export default function CartLoading() {
  return (
    <SkeletonContainer>
      <SkeletonBlock width="160px" height="28px" />
      <SkeletonBlock width="200px" height="16px" style={{ marginTop: "8px" }} />
      {[...Array(3)].map((_, i) => (
        <SkeletonItem key={i}>
          <SkeletonBlock width="80px" height="80px" />
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <SkeletonBlock width="60%" height="16px" />
            <SkeletonBlock width="40%" height="14px" />
            <SkeletonBlock width="30%" height="14px" />
          </div>
        </SkeletonItem>
      ))}
      <SkeletonBlock width="100%" height="80px" style={{ marginTop: "16px" }} />
      <SkeletonBlock
        width="100%"
        height="48px"
        style={{ marginTop: "12px", borderRadius: "8px" }}
      />
    </SkeletonContainer>
  );
}

const shimmer = `
  @keyframes shimmer {
    0% { background-position: -400px 0; }
    100% { background-position: 400px 0; }
  }
`;

const SkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  gap: 16px;
`;

const SkeletonBlock = styled.div<{ width: string; height: string }>`
  ${shimmer}
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 4px;
  background: linear-gradient(90deg, #e8e8e8 25%, #f5f5f5 50%, #e8e8e8 75%);
  background-size: 800px 100%;
  animation: shimmer 1.4s infinite linear;
`;

const SkeletonItem = styled.div`
  display: flex;
  gap: 16px;
  align-items: flex-start;
  padding: 12px 0;
  border-bottom: 1px solid #f0f0f0;
`;
