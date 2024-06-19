// 엄준식  클릭 -> 살아있음 이라 바뀜

//  타입 지정
type Ummprops = {
  name: string;
};

import { useState } from "react";

const Umm = ({ name }: Ummprops) => {
  const [str, setStr] = useState(name);
  // handle + 이벤트
  const handleClick = () => {
    setStr((prev) => "살아있음");
  };

  return <div onClick={handleClick}>{str}</div>;
};
// ????????????
export default Umm;
