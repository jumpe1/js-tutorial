import "./styles.css";

let val2 = "let変数";
console.log(val2);

let val4 = {
  name: "testname",
  age: 28
};
console.log(val4);

const name = "test";
const age = 20;
console.log(`私の名前は${name}です。年齢は${age}です。`);

// アロー関数
function func1(str) {
  return str;
}
const func2 = function (str) {
  return str;
};
console.log(func1("func1"), func2("func2"));

// const func3 = (str) => str;
const func3 = (str) => {
  return str;
};
console.log(func3("func3"));

// 分割代入
const myProfile = {
  name: "test",
  age: 30
};
const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
console.log(message1);
const { name2, age2 } = myProfile;
const message2 = `名前は${name2}です。年齢は${age2}歳です。`;
console.log(message2);

const myProfile2 = ["test", 28];
const [name3, age3] = myProfile2;
const message3 = `名前は${name3}です。年齢は${age3}歳です。`;
console.log(message3);

// スプレッド構文
// 配列の展開
const arr1 = [1, 2];
console.log(arr1);
console.log(...arr1);
const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(...arr1);
// まとめる
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;
console.log(num1, num2, arr3);
// 配列のコピー、結合
const arr4 = [10, 20];
const arr5 = [30, 40];
const arr6 = [...arr4];
const arr7 = [...arr4, ...arr5];
console.log(arr6);
console.log(arr7);

// mapやfilter
const nameArr = ["田中", "山田"];
nameArr.map((name, index) => {
  console.log(name, index);
});

const numArr = [1, 2, 3, 4, 5];
console.log(
  numArr.filter((num) => {
    return num % 2 === 1;
  })
);

// 三項演算子
const val5 = 1 > 0 ? "true" : "false";
console.log(val5);

const num = 1300;
const formattedNum =
  typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
console.log(formattedNum);

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
