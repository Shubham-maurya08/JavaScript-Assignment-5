//Solution:1

// let checkNum = prompt("Enter your number ");

// if(checkNum % 2 == 0){
//     console.log("Number is even");
// }else{
//     console.log("Number is odd");
// }

// function isEvenOrOdd(num) {
//     if (num % 2 == 0) {
//         console.log("Number is even");
//     } else {
//         console.log("Number is odd");
//     }
// }
// isEvenOrOdd(+prompt("Enter a number : "));

//Solution:2
// function largestNumber(num1, num2) {
//     if (num1 > num2) {
//         console.log(`${num1}` + "is the largest");
//     } else if (num1 < num2) {
//         console.log(`${num2}` + "is the largest");
//     } else {
//         console.log(`${num1}` + "and" +`${num2}`+ "are equal");
//     }
// }
// largestNumber(+prompt("Enter num1 : "), +prompt("Enter num2 : "));


//Solution: 3
// function largestNumber(num1, num2, num3) {
//     if (num1 > num2 && num1 > num3) {
//         console.log(`${num1}` + "is the largest");
//     } else if (num2 > num1 && num2 > num3) {
//         console.log(`${num2}` + "is the largest");
//     } else {
//         console.log(`${num3}` + "is the largest");
//     }
// }
// largestNumber(+prompt("Enter num1 : "), +prompt("Enter num2 : "), +prompt("Enter num3 : "));

//Solution: 4
// function operators(num1, num2, operator) {
//     switch (operator) {
//       case "add":
//         console.log(num1 + num2);
//         break;
//       case "subtract":
//         console.log(num1 - num2);
//         break;
//       case "multiply":
//         console.log(num1 * num2);
//         break;
//       case "divide":
//         console.log(num1 / num2);
//         break;
//       case "modulus":
//         console.log(num1 % num2);
//         break;
//       default :
//       console.log("Invalid operator");
//     }
//   }
//   operators(+prompt("Enter num1 : "), +prompt("Enter num2 : "), prompt("Enter operator : "));

//Solution: 5

// function checkLeapYear(year) {
//     if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
//         console.log(`${year}` + "is a leap year");
//     } else {
//         console.log(`${year}` + "is not a leap year");
//     }
// }
// checkLeapYear(+prompt("Enter a year : "));