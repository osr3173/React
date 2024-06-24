import { CSSProperties, ChangeEvent, useState } from "react";

export type InputProps = {
  placeholoder?: string;
  inputType?: "text" | "password";
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  placeholoder = "",
  inputType = "text",
  handleChange,
}: InputProps) => {
  const style: CSSProperties = {
    border: "1px solid #dbdbdb",
    outline: "none",
    backgroundColor: "#f5f5f5",
    color: "#242424",
    padding: "16px",
    fontSize: "20px",
    width: "80%",
  };

  const [input, setInt] = useState<string>("");

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInt((prev) => e.target.value); // 기존값
  };

  return (
    <input
      onChange={handleOnChange}
      placeholder={placeholoder}
      style={style}
      type={inputType}
    />
  );
};
export default Input;

//input글을 쓰면 콘솔에 나오도록 ex) hi -> hi

// onInput, onChange   -> Onchange 권장

// 셋 중 빈문자열 있으면 문자를 입력해야 한다고 알림
