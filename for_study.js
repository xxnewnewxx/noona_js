// 1부터 100까지 더하는 for문을 만들고 결과를 출력하시오

// 1부터 100까지 홀수만 출력하자
// 1부터 50까지 369게임 결과를 프린트하자

let num = 0;

for (let i = 1; i < 100; i++) {
  num = num + i;
}
console.log(num);

// let num_num = 0;

// for (let i = 1; i < 100; i++) {
//   num = num + i;

//   if (num % 2 != 0) {
//   }
//   console.log(num);
// }

// let num_num = 0;

// for (let i = 1; i < 100; i++) {
//   num_num = (num_num + i) % 1;
// }
// console.log(num_num);

// for (let i = 1; i < 100; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// function game(target) {
//   if (target == 3 || target == 6 || target == 9) {
//     document.write("짝");
//   } else {
//     document.write("통과");
//   }
// }
// game(3);
// game(8);
// game(12);
// game(9);

// function game(num) {
//   if (num % 3 == 0) {
//     console.log("박수");
//   } else {
//     console.log("통과");
//   }
// }

// for (var i = 0; i < 50; i++) {
//   var str = "" + (i + 1);
//   for (var j = 0; j < str.length; j++) {
//     if (str[j] == 3 || str[j] == 6 || str[j] == 9) {
//       str = "짝";
//     }
//   }
//   console.log(str);
// }
