import React from "react";
import { Steps, Button, message } from "antd";

const { Step } = Steps;

const steps = [
  {
    title: "영화/상영관 선택",
    content: "First-content",
  },
  {
    title: "좌석 선택",
    content: "Second-content",
  },
  {
    title: "결제",
    content: "Last-content",
  },
];

const Progress = () => {
  const [current, setCurrent] = React.useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <>
      <Steps current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            다음
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            결제하기
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
            이전단계
          </Button>
        )}
      </div>
    </>
  );
};

export { Progress };
