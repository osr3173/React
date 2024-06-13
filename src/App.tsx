import CategoryButton from "../src/categoryButton";
import { CategoryBtn } from "../src/Category";

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

function App() {
  return (
    <div className="App">
      {CategoryBtn.map((v) => (
        <CategoryButton {...v}></CategoryButton>
      ))}
    </div>
  );
}

export default App;
