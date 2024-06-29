// 유저가 입력하는 숫자가 0인지 음수인지, 양수인지 판단하는 프로그램
// 레포트 점수에따라 등급을 매기는 프로그램
// 90~100: 에이 , 80~89: 비  , 70~79: C , 60~69:D , 59이하는 F
//JS랑 리액트 둘다 하면 합격, 둘중하나만 하면 예비, 둘다못하면 탈락하는 취업프로그램

let number = prompt("숫자를 입력하세요");

if (number == 0) {
  alert("0입니다");
} else if (number <= -1) {
  alert("음수를 입력했습니다");
} else if (number >= 1) {
  alert("양수를 입력했습니다");
}

let skills = ["HTML", "CSS", "Javascript", "React"];

if (skills.includes("Javascript") && skills.includes("React")) {
  console.log("합격!");
} else if (skills.includes("Javascript") || skills.includes("React")) {
  console.log("예비");
} else {
  console.log("탈락!");
}
