// "안녕 내이름은 제시카야" 라는 문장을 출력하는 함수 greet를 만드시오

// 이름을 매개변수로 전달받아서 다양한 이름을 출력하는 함수를 만드세요
// 안녕 내 이름은 '에밀리' 라고해  , 안녕 내 이름은 '삼순이' 라고해

// 매개변수로 전달받은 이름을 반환하게 함수를 수정하시오

// meetAt 함수를 만들어주세요
// 인자를 3개 받습니다.
// 첫번째 인자는 년도에 해당하는 숫자
// 2번째 인자는 월에 해당하는 숫자
// 3번째 인자는 일에 해당하는 숫자
// 년도 인자만 받았을경우 = "1234" 와 같은 형식의 문자열을 리턴해주세요
//

// arr의 가장 작은 값을 리턴해주세요
//만일 arr이 비어있다면 0을 반환하세요

// 돈을 매개변수로 받으면 몇개의 지폐와 동전이 필요한지 최소 개수를 계산해주는 함수를 만드세요
function greet() {
  console.log("안녕 내이름은 제시카야 ");
}
greet();

function name_maker(type) {
  console.log("안녕 내 이름은" + " " + type + " " + "라고해");
}
name_maker("movie");
name_maker("santa");
name_maker("brityney");
name_maker("kylie");
name_maker("samantha");

function re_name(a, b) {
  return a + b;
}
// console.log("호출된 이름들은" + a + b + "입니다");

console.log(re_name("태희", "혜교"));

// function meet_year(year, month, day) {
//   console.log(year + "년도 입니다");
// }
// meet_year("2025");

// function meetAt(year, month, day) {
//   if (year && month && day) {
//     return `${year} /${month} / ${day}`;
//   } else if (year && month) {
//     return `${year}년 ${month}월`;
//   } else if (year) {
//     return `${year}년`;
//   }
// }
// console.log(meetAt(2044, 5));
// console.log(meetAt(2044, 5, 21));
// console.log(meetAt(1998));

// function findSall(arr) {
//   if (Math.min(arr)) {
//     return arr;
//   } else if (" ") {
//     return 0;
//   }
// }
// console.log(findSall(2, 5, 9, 66, 46, 31));
// console.log(findSall());

// let unit = [50000, 10000, 5000, 1000, 500, 100];

// function change(money) {
//   for (let i = 0; i < unit.length; i++) {
//     let num = Math.floor(money / unit[i]);
//     console.log(`${unit[i]}X${num}`);
//     money = money - unit[i] * num;
//   }
// }
// change(12500);
