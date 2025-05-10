// QUESTION - 1
// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

//ANSWER - 1
// function areYouPlayingBanjo(name) {
//   return name.startsWith("R") || name.startsWith("r")
//     ? `${name} plays banjo`
//     : `${name} does not play banjo`;
// }

// Example usage:
console.log(areYouPlayingBanjo("Robert")); // Output: "Robert plays banjo"
console.log(areYouPlayingBanjo("rick")); // Output: "rick plays banjo"
console.log(areYouPlayingBanjo("Alice")); // Output: "Alice does not play banjo"

// QUESTION - 2
// Create a function with two arguments that will return an array of the first n multiples of x.

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// ANSWER - 2
// function multiples(n, x) {
//   let result = [];
//   for (let i = 1; i <= n; i++) {
//     result.push(i * x);
//   }
//   return result;
// }

// Example usage:
console.log(multiples(5, 3)); // Output: [3, 6, 9, 12, 15]

// QUESTION - 3
// Complete the square sum function so that it squares each number passed into it and then sums the results together.

//ANSWER - 3
// function squareSum(numbers) {
//   return numbers.reduce((sum, num) => sum + num ** 2, 0);
// }

// squareSum([1, 2, 2]);

// Question - 4
// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// ANSWER - 4
// function sum(numbers) {
//   return numbers.reduce((sum, num) => sum + num, 0);
// }

// sum([1, 2, 3, 4]);
// sum([-1, -2, 3, 4]);
// sum([]);

// QUESTION 5
//Write a function to split a string and convert it into an array of words.

// ANSWER - 5
function stringToArray(string) {
  // code code code
  return string.trim().split(" ");
}

stringToArray("Sunday, Aniekan, Bright");

// QUESTION 6
// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return true if yes, false otherwise :)

// ANSWER 6
function hero(bullets, dragons) {
  //Get Coding!
  if (bullets >= dragons * 2) return true;
  else return false;
}

hero(10, 5);
hero(7, 4);

// QUESTION 7
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// ANSWER - 7
function century(year) {
  // Finish this :)
  return Math.ceil(year / 100);
}

century(1705);
century(1900);
century(1601);
century(2000);
century(2742);

// QUESTION - 8
//i will be an integer. Double it and return it.

// ANSWER - 8
function doubleInteger(i) {
  // i will be an integer. Double it and return it.
  return i, i * 2;
}

doubleInteger(4);

// QUESTION - 9
// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.

// For example:

// "GCAT"  =>  "GCAU"

// ANSWER - 9
function DNAtoRNA(dna) {
  // 1. create a function which returns an RNA sequence from the given DNA sequence
  return dna.replace(/T/g, "U");
}

DNAtoRNA("GCAT");

// 2.

function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  return dna.split("T").join("U");
}

DNAtoRNA("GCAT");

// QUESTION - 10
// There was a test in your class and you passed it. Congratulations!

// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return true if you're better, else false!

// Note:
// Your points are not included in the array of your class's points. Do not forget them when calculating the average score!

// ANSWER - 10
function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  const average =
    classPoints.reduce((sum, score) => sum + score, 0) / classPoints.length;
  return yourPoints > average;
}

betterThanAverage([50, 60, 70, 80, 90], 85);
betterThanAverage([100, 90, 80, 70], 75);

// QUESTION - 11
// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively. Each function returns one number.

// Examples (Input -> Output)
// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]                             -> min = 5, max = 5

// ANSWER - 11
// 1.
function min(list) {
  return Math.min(...list);
}

function max(list) {
  return Math.max(...list);
}

min([4, 6, 2, 1, 9, 63, -134, 566]);
max([4, 6, 2, 1, 9, 63, -134, 566]);

// 2.
function min(list) {
  let min = list[0];
  for (let i = 0; i < list.length; i++) {
    let cur = list[i];
    if (cur < min) min = cur;
  }
  return min;
}

function max(list) {
  let max = list[0];
  for (let i = 0; i < list.length; i++) {
    let cur = list[i];
    if (cur > max) max = cur;
  }

  return max;
}

min([-52, 56, 30, 29, -54, 0, -110]);
min([42, 54, 65, 87, 0]);

// QUESTION - 12
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

// ANSWER - 12
function fakeBin(x) {
  return x.replace(/\d/g, (digits) => (digits < 5 ? "0" : "1"));
}

fakeBin("45385593107843568");

// QUESTION - 13
// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

// ANSWER - 13
function filter_list(l) {
  // Return a new array with the strings filtered out
  return l.filter((item) => typeof item === "number");
}

filter_list([1, 2, "a", "b"]);
filter_list([1, "a", "b", 0, 15]);

// QUESTION - 14
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5"); // return "5 1"

// ANSWER - 15

function highAndLow(numbers) {
  // ...
  let strArray = numbers.split(" ").map(Number);
  return `${Math.max(...strArray)} ${Math.min(...strArray)}`;
}

highAndLow("1 2 3 4 5");
highAndLow("1 2 -3 4 5");

// ANSWER - 16
// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// ANSWER - 16
function squareSum(numbers) {
  return numbers.reduce((sum, num) => sum + num ** 2, 0);
}

squareSum([1, 2, 3]);

// QUESTION - 17
// Your task is to write a function which returns the time since midnight in milliseconds.

// ANSWER - 17

function past(h, m, s) {
  return h * 3600000 + m * 60000 + s * 1000;
}

past(0, 1, 1); // Output: 61000

// 1 hour = 3600000 milliseconds (1 * 60 * 60 * 1000)
// 1 minute = 60000 milliseconds (1 * 60 * 1000)
// 1 second = 1000 milliseconds (1 * 1000)

//QUESTION - 18
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// ANSWER - 18
function evenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

evenOrOdd(6);
evenOrOdd(5);

// QUESTION - 19
// You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

// However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

// Task
// Given an integral number, determine if it's a square number:

// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

// ANSWER - 19
const isSquare = function (n) {
  //return false; // fix me
  if (Number.isInteger(Math.sqrt(n))) {
    return true;
  } else {
    return false;
  }
};

// or

// const isSquareRoot = (n) => {
//   return Number.isInteger(Math.sqrt(n));
// }

isSquare(15);
isSquare(16);

// QUESTION - 20
// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater than or equal to p = 1200 inhabitants?

// At the end of the first year there will be:
// 1000 + 1000 * 0.02 + 50 => 1070 inhabitants

// At the end of the 2nd year there will be:
// 1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

// At the end of the 3rd year there will be:
// 1141 + 1141 * 0.02 + 50 => 1213

// It will need 3 entire years.
// More generally given parameters:

// p0, percent, aug (inhabitants coming or leaving each year), p (population to equal or surpass)

// the function nb_year should return n number of entire years needed to get a population greater or equal to p.

// aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

// ANSWER - 20

function nbYear(p0, percent, aug, p) {
  // your code
  let years = 0;
  while (p0 < p) {
    p0 = p0 + Math.floor(p0 * (percent / 100) + aug);
    years++;
  }
  return years;
}

nbYear(nbYear(1000, 2, 50, 1200));

// 1. Initialize years to 0.
// 2. Use a while loop that runs until p0 (current population) reaches or exceeds p (target population).
// 3. Each year:
//Increase p0 by p0 * (percent / 100) (percentage growth) plus aug (additional population).
//Use Math.floor() to ensure population remains an integer.
//Increment years.
// 4. Return the total number of years needed.

// QUESTION - 21
// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// ANSWER - 21
function squareSum(numbers) {
  return numbers.reduce((sum, number) => sum + number * number, 0);
}

squareSum([9, 3, 2]);

// QUESTION - 22
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// ANSWER - 22

function descendingOrder(n) {
  return parseInt(
    n
      .toString()
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
}

descendingOrder(783773);

/////////////////////////
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

// export const baseUrl='http://172.20.10.2:3000';
// export const baseUrl='https://learnlift-backend-1.onrender.com';
export const baseUrl = "http://104.248.27.149";

// export const baseUrl='http://192.168.88.13:3000';
// export const BASE_URL = https://learnlift.onrender.com;

export const request = async ({ method, data, endpoint, params }) => {
  const url = baseUrl + endpoint;
  const token = await AsyncStorage.getItem("token");

  const response = await axios({
    method,
    url,
    data,
    params: { ...params },
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  return response;
};

request({ endpoint: "/students/me", method: "GET" })
  .then(async (response) => {
    dispatch(setCurrentUser(response?.data?.data));
    console.log(response.data);
    dispatch(setAlert({ success: true, message: response?.data?.message }));
    await AsyncStorage.setItem("luser", JSON.stringify(response?.data?.data));
    navigation.navigate("Main");
  })
  .catch((error) => {
    alert(error);
    if (error?.response?.data?.message) {
      dispatch(
        setAlert({ success: false, message: error?.response?.data?.message })
      );
    } else {
      dispatch(setAlert({ success: false, message: error?.message }));
    }
  })
  .finally(() => {
    dispatch(setLoader(null));
  });
