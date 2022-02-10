// // this will return undefined
// var num2;
// console.log(num2);

// // concatenation in javascript
// var firstname = "lanre";
// var surname = "bigman";

// var fullname = firstname + " " + surname;
// console.log(fullname);

// var verb = "is";
// var name1 = "davidson jose";
// var age = 200;

// var presentationOne =
//   "my name" +
//   " " +
//   verb +
//   " " +
//   name1 +
//   " " +
//   "and i am" +
//   " " +
//   age +
//   "years old";

// // var presentationTwo = "and i am a programmer";

// // var fullPresentation = presentationOne + presentationTwo;
// console.log(presentationOne);

// //TODO:Yaradua was the president of Nigeria in the year 2007, later on was taken by President Jonathan in 2015, now the Baton is not found
// // where Yaradua, president, Nigeria, 2007, Jonathan, 2015 and baton are assigned as a variable

// var firstPresident = "Yaradua";
// var president = "president";
// var country = "Nigeria";
// var secondPresident = "Jonathan";
// var firstYear = 2007;
// var secondYear = 2015;
// var baton = "baton";

// //todo correction
// var fullStatement =
//   firstPresident +
//   " " +
//   "was the" +
//   " " +
//   president +
//   " " +
//   "of" +
//   " " +
//   country +
//   " " +
//   "in the year" +
//   " " +
//   firstYear +
//   ", " +
//   "later on was taken by" +
//   " " +
//   president +
//   " " +
//   secondPresident +
//   " " +
//   "in the year" +
//   " " +
//   secondYear +
//   ", " +
//   "now the" +
//   " " +
//   baton +
//   " " +
//   "is not found";

// console.log(fullStatement);

// //the arithmetic operator

// //addition operator
// var num1 = 7;
// var num3 = 8;

// var sum = num1 + num3;
// console.log(sum);

// //subtraction operator
// var num2 = 10;
// var num9 = 9;

// var substraction = num2 - num9;
// console.log(substraction);

// // division operator
// var div1 = 10;
// var div2 = 2;

// var division = div1 / div2;
// console.log(division);

// // multiplication operator
// var mul1 = 5;
// var mul2 = 6;

// var multiplication = mul1 * mul2;
// console.log(multiplication);

// // increment operator
// var inc1 = 5;
// inc1++;
// console.log(inc1);

// // comparison operator
// // Greater than >
// // Less than <
// // Greater than or equal to >=
// // Less than or equal to <=
// // Soft equality ==
// // Strict equality ===
// // Soft inequality !=
// // Strict inequality !==

// //array
// var quizQuestions = ["davivson", "jose", "programmer"];

// //replacing an array
// quizQuestions[0] = "lanre";

// //adding rto anarray
// quizQuestions[3] = "zainab";

// //deleting from an array
// // delete quizQuestions[1];

// console.log(quizQuestions);

// //array properties and method

// var quizQuestions = [
//   ["What is the capital of Lagos State?", "Ikeja", "Agege", "Mushin", "Ikeja"],
//   [
//     "What is the capital of Kaduna State?",
//     "Kagoro",
//     "Kachia",
//     "Kaduna",
//     "Kaduna",
//   ],
// ];

// console.log(quizQuestions[0][0]);

// //LOGIC

// var myCup = "red";

// if (myCup == "red") {
//   console.log("my cup is red hurray 😊🙂🙂🙂");
// }

// var num20 = 5;
// var num10 = 17;

// if (num20 == num10) {
//   console.log("numbe 20 is equal to number 10 😁😁😁");
// } else {
//   console.log("number 20is not equal to number 10 be wise 🤣🤣🤣🤣🤣🤣");
// }

// //else if
// var ten1 = 4;
// var ten2 = 20;

// if (ten1 == ten2) {
//   console.log("ten one is equal to ten2");
// } else if (ten1 >= ten2) {
//   console.log("ten one is greater than or equal to ten2");
// } else if (ten1 == ten2) {
//   console.log("ten one is less than ten two");
// } else if (ten1 > ten2) {
//   console.log("ten 1 is greater than ten 2");
// } else {
//   console.log("none of the equation is correct");
// }

// let currentDate = new Date();
// let time = currentDate.getHours();

// console.log(time);

// if (time > 12) {
//   alert("good morning");
// } else if (time < 12) {
//   alert("good afternoon");
// } else {
//   alert("hello boy");
// }

//TODO create an even numbers using while loops
//from 0 -20

// var x = 0;

// while (x <= 10) {
//   console.log(x);
//   x++;
// }

// while loop printing odd numbers
// var x = 1;

// while (x <=20) {
//   console.log(x);
//   x+=2;
// }

// while loop printing even numbers
// var x = 0;

// while (x <= 50) {
//   console.log(x);
//   x+=2;
// }

// // for loop printing from one to 50
// for (let x = 0; x <= 50; x++) {
//     console.log(x);
// }

// // for loop printing odd numbers and even numbers
// for (let x = 0; x <=50; x+=2) {
//     console.log(x);
// }

// for (let x = 1; x <= 50; x+=2) {
//     console.log(x);
// }

// functions
// function name(){
//   console.log("function has been created successfully");
// }

// console.log(name());

function addition(num1, num2) {
  let add = num1 + num2;
  console.log(add);
}

addition(5, 7);

// TODO: create a function that can subtract and add any inputed value
// TODO correction subtraction
function substraction(num1, num5, num3) {
  let sub = num1 - num5 - num3;
  console.log(sub);
}

substraction(50, 10, 3);

// correction multiplication
function multiplication(num1, num2, num3) {
  let mul = num1 * num2 * num3;
  console.log(mul);
}

multiplication(4, 5, 8);

// TODO: create a function thats print even numbers range 50
//TODO: create a function that print odd numbers range 50
//TODO: create a function that print numbers range 50
// NOTE: using while and for loop

//TODO: create a function that calculates the area of a triangle
//TODO: create a function that calculates the perimeter of a square
// TODO: create a function that calculates the area of a tranpezium

// TODO correction

// area of a triangle
// function areaOfAtriangle(breath, height) {
//   let areaOfAtriangle = (1 / 2) * breath * height;
//   return areaOfAtriangle;
// }

// var breath = 5;
// var height = 7;
// let calculate = areaOfAtriangle(breath, height);
// console.log(calculate);

// // perimeter of a square
// function perimeterOfAsquare(length, breadth) {
//   let perimeterOfAsquare = 2 * (length + breadth);
//   return perimeterOfAsquare;
// }

// let lengthPeri = 10;
// let breadthPeri = 10;

// let calculate2 = perimeterOfAsquare(lengthPeri, breadthPeri);
// console.log(calculate2);

// area of a tranpezium
function areaOfTrapezium(a, b, height) {
    let areaOfTrapezium = 1 / 2 * (a + b) * height;
    return areaOfTrapezium;
}

let a = 7;
let b = 12;
let height = 15;

let calculate3 = areaOfTrapezium(a, b, height);
console.log(calculate3);
