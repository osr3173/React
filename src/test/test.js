// async - await (함수화)

// async는 항상 promise를 리턴함
async function Hello() {
  return "엄";
}

Hello().then((v) => console.log); // 데이터 타입 : Promise

const getPizza = async () => {
  return { name: "하와이안", price: "15000" };
};

getPizza().then((v) => console.log(v.price));

//await는 async 내부 함수에서만 사용가능, promise가 처리될 때 까지 중지,
//promise의 결과값을 반환
const getAPI = async () => {
  const data = await fetch(
    "https://fakerapi.it/api/v1/texts?_quantity=1&_characters=10"
  );
  const jsonData = await data.json();
  return jsonData;
};

getAPI().then((v) => console.log(v));
