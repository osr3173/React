import { useParams } from "react-router-dom";

const Goods = () => {
  const { id } = useParams();
  return <div>굿즈{id}</div>;
};

// id[33]
// 33 -> serveer -> db -> 33인 학생 엄준식
// json -> student.tsx 프롭스 뿌려줌 -> 학생 : 엄준식 ,나이: 23, 반:저녁반
//

export default Goods;
