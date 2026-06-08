import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import Toast from "../Toast";

const meta = {
  title: "commons/Toast",
  component: Toast,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onClose: () => {},
  },
  argTypes: {
    duration: {
      control: { type: "number" },
      description: "Toast가 사라지기까지의 시간 (ms)",
    },
  },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    message: "요청을 처리하는 중 오류가 발생했습니다.",
    duration: 3000,
  },
};

export const ShortDuration: Story = {
  args: {
    message: "잠시 후 사라집니다.",
    duration: 1500,
  },
};

export const LongMessage: Story = {
  args: {
    message: "수량은 1개 이상 99개 이하로 입력해 주세요.",
    duration: 3000,
  },
};

function ToastToggle() {
  const [visible, setVisible] = useState(false);
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
      <button
        onClick={() => setVisible(true)}
        style={{ padding: "0.5rem 1rem", cursor: "pointer" }}
      >
        Toast 띄우기
      </button>
      {visible && (
        <Toast
          message="요청을 처리하는 중 오류가 발생했습니다."
          duration={3000}
          onClose={() => setVisible(false)}
        />
      )}
    </div>
  );
}

export const Interactive: Story = {
  args: {
    message: "",
  },
  render: () => <ToastToggle />,
};
