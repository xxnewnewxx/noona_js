let animals = [
  "Aardvark",
  "Albatross",
  "Alligator",
  "Alpaca",
  "Ant",
  "Ape",
  "Armadillo",
  "Donkey",
  "Baboon",
  "Badger",
  "Barracuda",
  "Bat",
  "Bear",
  "Beaver",
  "Bee",
  "Bison",
  "Cat",
  "Caterpillar",
  "Cattle",
  "Chamois",
  "Cheetah",
  "Chicken",
  "Chimpanzee",
  "Chinchilla",
  "Chough",
  "Clam",
  "Cobra",
  "Cockroach",
  "Cod",
  "Cormorant",
  "Dugong",
  "Dunlin",
  "Eagle",
  "Echidna",
  "Eel",
  "Eland",
  "Elephant",
  "Elk",
  "Emu",
  "Falcon",
  "Ferret",
  "Finch",
  "Fish",
  "Flamingo",
  "Fly",
  "Fox",
  "Frog",
  "Gaur",
  "Gazelle",
  "Gerbil",
  "Giraffe",
  "Grasshopper",
  "Heron",
  "Herring",
  "Hippopotamus",
  "Hornet",
  "Horse",
  "Kangaroo",
  "Kingfisher",
  "Koala",
  "Kookabura",
  "Moose",
  "Narwhal",
  "Newt",
  "Nightingale",
  "Octopus",
  "Okapi",
  "Opossum",
  "Quail",
  "Quelea",
  "Quetzal",
  "Rabbit",
  "Raccoon",
  "Rail",
  "Ram",
  "Rat",
  "Raven",
  "Red deer",
  "Sandpiper",
  "Sardine",
  "Sparrow",
  "Spider",
  "Spoonbill",
  "Squid",
  "Squirrel",
  "Starling",
  "Stingray",
  "Tiger",
  "Toad",
  "Whale",
  "Wildcat",
  "Wolf",
  "Worm",
  "Wren",
  "Yak",
  "Zebra",
];

//마지막 아이템 “Zebra” 제거하기
//어레이에 “Dog” 추가하기
// “Mosquito”,“Mouse”,“Mule” 추가하기
// "Human"이 있는가?
//“Cat” 이 있는가?
//"Red deer"을 "Deer"로 바꾸시오
//"Spider"부터 3개의 아이템을 기존 어레이에서 제거하시오
//"Tiger"이후의 값을 제거하시오
//"B"로 시작되는 아이템인 "Baboon"부터 "Bison"까지 가져와 새로운 어레이에 저장하시오

// animals.pop();
// let popped = animals.pop();
// console.log(popped);

// animals.pop();
// console.log(animals);

// animals.push("dog");
// console.log(animals);

// animals.splice(61, 0, "Mosquito", "Mouse", "Mule");
// console.log(animals);

// console.log(animals.includes("human"));
// console.log(animals.includes("cat"));

// animals[animals.indexOf("Red deer")] = "Deer";
// console.log(animals);
console.log("========================================================");

animals.splice(animals.indexOf("Spider"), 3);
console.log(animals);

let gigi = ["dongho", "santa", "apple", "pear", "peach", "mango", "podo"];

gigi.splice(gigi.indexOf("apple"), 2);
console.log(gigi);

animals.splice(animals.indexOf("Tiger"));
console.log(animals);

// // let new_animals = animals.filter((item) =>
// //   item.indexOf(
// // "Baboon",
// // "Badger",
// // "Barracuda",
// // "Bat",
// // "Bear",
// // "Beaver",
// // "Bee",
// // "Bison"
// //   ));

// // let new_animals = animals.filter(function (item) {
// //   return item.indexOf("b");
// // });

// // let new_animals = animals.filter((animals) => animals.includes("b"[0]));

// // let new_animals = animals.filter((animals) =>
// //   animals.includes(
// //     "Baboon",
// //     "Badger",
// //     "Barracuda",
// //     "Bat",
// //     "Bear",
// //     "Beaver",
// //     "Bee",
// //     "Bison"
// //   )
// // );
console.log("========================================================");
let new_animals = animals.filter((item) => {
  return item.includes("B");
});
console.log(new_animals);
