import { CSSProperties } from "react";

type ButtonProrps = {
  content: string;
  backgroudColor: string;
  color: string;
};

const Button = ({ color, backgroudColor, content }: ButtonProrps) => {
  const butttonStyle: CSSProperties = {
    backgroundColor: backgroudColor,
    color: color,
    borderRadius: "5px",
    fontWeight: "600",
  };

  return (
    <>
      <div style={butttonStyle}>{content}</div>
    </>
  );
};

export default Button;
