import { CSSProperties } from "react";

type ButtonProps = {
  content: string;
  color: string;
  backgroudColor: string;
};

const Button = ({ color, backgroudColor, content }: ButtonProps) => {
  const buttonStyle: CSSProperties = {
    backgroundColor: backgroudColor,
    color: color,
    borderRadius: "5px",
    fontWeight: "900",
  };

  return (
    <>
      <div style={buttonStyle}>{content}</div>
    </>
  );
};

export default Button;

// 1877F2
