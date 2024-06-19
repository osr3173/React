//  변수 -> 메모리에 저장

// 변수 선언 하면 바뀐 값만 메모리 저장되고 렌더링에는 반영에 안됨.

// import { useState } from "react";

// // function
// const Counter = () => {
//   // 초기값과 값을 변경하는 함수를 같이 선언한고 생각하면 됨.
//   const [num, setNum] = useState(0); // useState(0) : 초기값 0

//   const handleClick = () => {
//     setNum((prev) => prev + 1); // setNum 함수
//   };

//   return <div onClick={handleClick}>{num}</div>;
// };

// export default Counter;

// Counter - 0 +

import { useState } from "react";

const Counter = () => {
  const [num, setNum] = useState<number>(0); // generic

  const handleClickplus = () => {
    setNum((prev) => prev + 1);
  };

  const handleClickminus = () => {
    setNum((prev) => prev - 1);
  };
  return (
    <>
      <div onClick={handleClickplus}>+</div>
      <div>{num}</div>
      <div onClick={handleClickminus}>-</div>
    </>
  );
};

export default Counter;
