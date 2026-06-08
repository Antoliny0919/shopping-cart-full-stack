import { useEffect } from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

type ToastProps = {
  message: string;
  onClose: () => void;
  duration?: number;
};

export default function Toast({ message, onClose, duration = 3000 }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <ToastWrapper duration={duration}>
      <ToastMessage>{message}</ToastMessage>
    </ToastWrapper>
  );
}

const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const ToastWrapper = styled.div<{ duration: number }>`
  position: fixed;
  top: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
  animation:
    ${slideDown} 0.25s ease forwards,
    ${fadeOut} 0.3s ease ${({ duration }) => duration - 300}ms forwards;
`;

const ToastMessage = styled.p`
  background-color: #333;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  white-space: nowrap;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`;
