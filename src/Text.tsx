import { VFC } from "react";

type StyleType = {
  color: string;
  fontSize: string;
};

export const Text: VFC<StyleType> = (props) => {
  const { color, fontSize } = props;
  return (
    <div>
      <p style={{ color, fontSize }}>テキスト</p>
    </div>
  );
};
