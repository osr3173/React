// import CategoryButton from "../src/categoryButton";
// import { CategoryBtn } from "../src/Category";

// import { useEffect, useState } from "react";

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
// import {
//   BrowserRouter,
//   Route,
//   BrowserRouter as Router,
//   Routes,
// } from "react-router-dom";

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

// import MainPage from "./Project_UM/Main_log";

// function App() {
//   return (
//     <>
//       <MainPage />
//     </>
//   );
// }

// import { useEffect, useState } from "react";
// import Skeleton from "./skeleton";

// function App() {
//   // const [data, setData] = useState(null);

//   // useEffect(() => {
//   //   fetch("https://fakerapi.it/api/v1/texts?_quantity=1&_characters=10")
//   //     .then((res) => res.json())
//   //     .then((v) => setData(v));
//   // }, [setData]);
//   // return <div>{data ? <p>{}</p> : <p>Loading...</p>}</div>;

//   const [data, setData] = useState<any[] | null>(null);

//   const geAddress = async () => {
//     const data = await fetch(
//       "https://fakerapi.it/api/v1/addresses?_quantity=10"
//     );
//     const jsonData = await data.json();
//     const getData = await [...jsonData.data];
//     setData((prev) => [...getData.map((v) => v.street)]);
//   };

//   useEffect(() => {
//     geAddress();
//   }, []);

//   return (
//     <div>
//       {data ? (
//         <div>
//           {data.map((v, i) => (
//             <span key={i}>{v}</span>
//           ))}
//         </div>
//       ) : (
//         <Skeleton></Skeleton>
//       )}
//     </div>
//   );
// }

// export default App;

// import { DataGrid } from "@mui/x-data-grid";

// const Data1 = [
//   ["id", "이름", "이메일", "전화번호", "학년", "로그인 ID", "로그인 PW"],
//   [1, "a", "123", "123", "1", "ab", "11"],
//   [2, "b", "123", "123", "2", "ab", "12"],
//   [3, "c", "123", "123", "3", "ab", "13"],
// ];
// return (
//   <div id="hot-app">
//     <HotTable
//       data={Data1}
//       colHeaders={false} //header 직접 설정 가능 ex) {['2019','2020','2021']}
//       rowHeaders={false}
//       width="900"
//       height="150"
//       licenseKey="non-commercial-and-evaluation"
//     />
//     <HotTable
//       data={Data1}
//       colHeaders={false} //header 직접 설정 가능 ex) {['2019','2020','2021']}
//       rowHeaders={false}
//       width="900"
//       height="150"
//       licenseKey="non-commercial-and-evaluation"
//     />
//     <HotTable
//       data={Data1}
//       colHeaders={false} //header 직접 설정 가능 ex) {['2019','2020','2021']}
//       rowHeaders={false}
//       width="900"
//       height="150"
//       licenseKey="non-commercial-and-evaluation"
//     />
//   </div>
// );
// const Data = [
//   {
//     name: "a",
//     age: 20,
//   },
//   {
//     name: "b",
//     age: 30,
//   },
//   {
//     name: "c",
//     age: 40,
//   },
// ];
// const columns = [
//   { field: "name", headerName: "이름", width: 150 },
//   { field: "email", headerName: "이메일", editable: true },
//   { field: "", headerName: "전화번호", width: 150 },
//   { field: "email", headerName: "학년", editable: true },
//   { field: "name", headerName: "로그인 ID", width: 150 },
//   { field: "email", headerName: "Email", editable: true },
// ];
// return <DataGrid columns={} rows={} />;

// const [num, setNum] = useState<number>(0);
// const [test, setTest] = useState<number>(0);
//1. 데이터 가져오기
//2. 비동기 관련 코드
//3. Dom 조작

// useEffect(() => {
//   console.log("Num 시작함");
// }, [num]); // 의존성 배열(trigger->rendering->DOM)    , // num을 넣으면 변화가 생기면 trigger를 함 -> Rerendering

// useEffect(() => {
//   console.log("Test 시작함");
// }, [test]); // 의존성 배열(trigger->rendering->DOM)    , // Test을 넣으면 변화가 생기면 trigger를 함 -> Rerendering

import Commander from "./zustand/Commander";
// import { useBearStore } from "./store/useStroe";
import { useEmergencyStore } from "./store/useStroe";

import axios from "axios";
import { useEffect } from "react";

function App() {
  // const { increase } = useBearStore();
  const { bell } = useEmergencyStore();
  return (
    // <div>
    //   <div onClick={() => setNum((v) => v + 1)}>{num}</div>
    //   <div onClick={() => setTest((v) => v + 1)}>{test}</div>
    // </div>
    <div>
      {/* <button onClick={increase}>곰 늘리기</button> */}
      <button onClick={bell}>곰 늘리기</button>
      <Commander msg="군기유지" />
    </div>
  );
  // const URL = "http://localhost:3000";

  // useEffect(() => {
  //   //   axios.get(URL,{params:{studentId:""}}).then((v)=>console.log);

  //   // });

  //   axios.post(URL, { id: "엄", pw: "1234" });
  // }, []);
  // return <div></div>;
}
export default App;
// 비상 버튼 누르면 '중대장 께서 군기 유지' 글자색 빨강
