export type ButtonTextProps = {
  Text: "중복 확인";
};

const ButtonElement = ({ Text }: ButtonTextProps) => {
  return <button>{Text}</button>;
};

export default ButtonElement;
