export type Buttoninfo = {
  Text: "XML" | "JavaScript" | "UI";
};

const Button_Text = ({ Text }: Buttoninfo) => {
  return <span>{Text}</span>;
};

export default Button_Text;

// --> 리팩토링 ~
