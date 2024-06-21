// 오늘 할일 - 2024 06 14
// +) 토요일이면 파란색, 일요일이면 빨간색 글씨

// import { CSSProperties } from "react";

// function Date() {
//   return (const Day=New Date();)
// }

// export default function DateUpdate() {
//   return (
//     <>
//       <h1>오늘 할일</h1>;
//       <Date />
//     </>
//   );
// }
import { changeColorbyDay } from "./util/color";

const Header = () => {
  const [year, month, date] = new Date()
    .toLocaleString()
    .replaceAll(".", "")
    .split(" ");

  const day = new Date().getDay();
  return (
    <div>
      <span>오늘 할일 </span>
      <span style={{ color: changeColorbyDay(day) }}>
        {year} {month} {date}
      </span>
    </div>
  );
};

export default Header;
