// import CategoryButton from "../src/categoryButton";
// import { CategoryBtn } from "../src/Category";

// import FormInput from "./Practice_R/FormInput";
// import { MESSAGE } from "./Practice_R/msg";

// function App() {
//   return (
//     <div className="App">
//       <Button
//         color="rgb(247, 103, 7)"
//         content="앱 다운로드"
//         backgroudColor="rgb(255, 244, 230)"
//       ></Button>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       {CategoryBtn.map((v) => (
//         <CategoryButton {...v}></CategoryButton>\
//       ))}
//     </div>
//   );
// }

// import Header from "./header";
// import { changeColorbyDay } from "./util/color";

// export default function App() {
//   return <Header />;
// }

// import Button from "./util/ButtonUtils";

// function App() {
//   return (
//     // <div className="App">
//     //   <div>
//     //     <FaFacebook />
//     //     <span>Continue with Facebook</span>
//     //   </div>

//     //   <div className="Google">
//     //     <FcGoogle />
//     //     <span>Continue with Coogle</span>
//     //   </div>

//     //   <div className="Apple">
//     //     <FaApple />
//     //     <span>Continue with Apple</span>눈
//     //   </div>
//     // </div>
//   // );

// }
// import { FaFacebook } from "react-icons/fa";
// import { FcGoogle } from "react-icons/fc";
// import { FaApple } from "react-icons/fa";

// import SNSlogin from "./sns/SNSlogin";

// function App() {
//   return (
//     <div className="App">
//       <SNSlogin SNSText={{sns:'Apple'}} SNSText={{sns:'Apple'}}></SNSlogin>
//     </div>
//   );
// }

// import Circle from "./pill/Circle";
// import Pill from "./pill/Pill";
// import Text from "./pill/Text";

// function App() {
//   return (
//     <div className="App">
//       <Pill CircleColor="#2196F3" TextContent={{ text: "JavaScript" }} />
//       <Pill CircleColor="#F44336" TextContent={{ text: "XML" }} />
//     </div>
//   );
// }
// import { click } from "@testing-library/user-event/dist/click";
// import NewButton from "./NewButton/NewButton";

// function App() {
//   return (
//     <div className="App">
//       <NewButton click={() => alert("리액트 어렵노")} />
//     </div>
//   );
// }

// export default App;

// import Counter from "./util/Counter";

// function App() {
//   return (
//     <div className="App">
//       <Counter />
//     </div>
//   );
// }

// export default App;

// import Counter from "./util/Counter";

// function App() {
//   return (
//     <div className="App">
//       <Counter />
//     </div>
//   );
// }
// import Banner from "./practice/BannerText";
// import Inner from "./practice/innerText";
// import ButtonElement from "./practice/Button";

// function App() {
//   return (
//     <div className="App">
//       <>
//         <Banner BannerText="아이디" />
//         <div>
//           <Inner InnerText />
//           <ButtonElement Text="중복 확인" />
//         </div>
//       </>
//     </div>
//   );
// }
// function App() {
// const
// const PillButtoncomponent = {
//   InputProps:{placeHolder:MESSAGE.ID},
//   Component: PillButton,
//   ComponentProps: { content: "중복확인" },
// };

// return (
//   <div className="App">
//     <FormInput
//       InputProps={{ placeHolder: MESSAGE.ID }}
//       {...PillButtoncomponent}
//     />
//     <FormInput InputProps={{ placeHolder: MESSAGE.PW }} />
//     <FormInput InputProps={{ placeHolder: MESSAGE.PWCHECK }} />
//   </div>
// );

// }

// import FormInput from "./fromInput/FormInput";
// import PillButton from "./fromInput/PillButton";
// import { MESSAGE } from "./fromInput/message";

// import { ChangeEvent, useState } from "react";
// import Input from "./fromInput/fromInput _/Input";
// import PillButton from "./fromInput/fromInput _/PillButton";

// const FormInputComponents = [
//   {
//     InputProps: { placeholoder: MESSAGE.ID },
//     Component: PillButton,
//     ComponentProps: { content: "중복확인" },
//   },
//   {
//     InputProps: { placeholoder: MESSAGE.PW },
//   },
//   {
//     InputProps: { placeholoder: MESSAGE.PWCHECK },
//   },
// ];
// type StudentType = {
//   name: string;
//   age: string;
//   address: string;
// };

// const [studentData, setStudentData] = useState<StudentType>({
//   name: "",
//   age: "",
//   address: "",
// });

// const handleNamechange = (e: ChangeEvent<HTMLInputElement>) => {
//   setStudentData((prev) => ({ ...prev, name: e.target.value }));
// };

// const handleAgechange = (e: ChangeEvent<HTMLInputElement>) => {
//   setStudentData((prev) => ({ ...prev, age: e.target.value }));
// };

// const handleAddresschange = (e: ChangeEvent<HTMLInputElement>) => {
//   setStudentData((prev) => ({ ...prev, address: e.target.value }));
// };

// const handleClick = () => {
//   const { address, age, name } = studentData;
//   const isPass =
//     address.length !== 0 && age.length !== 0 && name.length !== 0;
//   alert(isPass ? "등록됨 " : "빈칸 있음");
// };

// const handleClick = () => {
//   const { name } = studentData;
//   console.log(name);
//   fetch("http://localhost:3001/api/student", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ name }),
//   });
// };

// <div className="App">
//   <Input handleChange={handleNamechange} />
//   <Input handleChange={handleAgechange} />
//   <Input handleChange={handleAddresschange} />
//   <PillButton handleClick={handleClick} content="등록하기" />
// </div>
// import Button1 from "./Button1";
import {
  BrowserRouter,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

// import Main from "./route/main";
// import Home from "./route/Home";
// import Goods from "./route/Goods";

// function App() {
//   return (
//     // <>
//     //   <Button1 />
//     //   <Button1 />
//     // </>
//     // <BrowserRouter>
//     //   <Routes>
//     //     <Route path="/" Component={Main} />
//     //     <Route path="/home" Component={Home} />
//     //     <Route path="/Goods/:id" Component={Goods} />
//     //   </Routes>
//     // </BrowserRouter>

//   );
// }

import MainPage from "./Project_UM/Main_log";

function App() {
  return (
    <>
      <MainPage />
    </>
  );
}

export default App;
