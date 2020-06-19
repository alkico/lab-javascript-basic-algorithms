// Iteration 1: Names and Input

let hacker1 = "Robert";
let hacker2 = "Marcia";

console.log(`"The driver's name is ${hacker1}"`);
console.log(`"The navigator's name is ${hacker2}"`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops

//3.1 Print all the characters of the driver's name, separated by a space & in capitals
//i.e. "J O H N"
let myString = "";
for (let i = 0; i < hacker1.length; i++) {
  myString += hacker1[i].toUpperCase() + " ";
}
console.log(myString);

console.log(hacker2.split("").join(" ").toUpperCase());

//3.2 Print all the characters of the navigator's name, in reverse order.
// i.e. "nhoJ"
let myReverseString = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  myReverseString += hacker2[i];
}
console.log(myReverseString);

console.log(hacker1.split("").reverse().join(""));

//3.3 Depending on the lexicographic order of the strings, print:
//The driver's name goes first.
//Yo, the navigator goes first.
//What?! You both have the same name?

if (hacker1.localeCompare(hacker2) < 0) {
  console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) > 0) {
  console.log("Yo, the navigator goes first");
} else {
  console.log("What?! You both have the same name?");
}

switch (hacker1.localeCompare(hacker2)) {
  case -1:
    console.log("The driver's name goes first.");
    break;
  case 1:
    console.log("Yo, the navigator goes first");
    break;
  default:
    console.log("What?! You both have the same name?");
}

//Bonus 1: Count the number of words in a string
let loremIpsum =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
let wordCounter = 1;
for (let i = 0; i < loremIpsum.length; i++) {
  if (loremIpsum[i] === " ") {
    wordCounter++;
  }
}
console.log(wordCounter);

const wordCount = (str) => str.split(" ").length;

console.log(wordCount(loremIpsum));
//NB: There is room for error in this solution (e.g. what if there are no words in the string, it starts with one word; or what if
// theree are two spaces between two words, this would give false value)

//Count the number of times the Latin word et appears:
const foundEt = (str) => {
  foundEtCounter = 0;
  for (let i = 0; i < str.length; i++) {
    if (`${str[i]}${str[i + 1]}` === "et") {
      foundEtCounter++;
    }
  }
  return foundEtCounter;
};
console.log(foundEt(loremIpsum));

//Bonus 2:
//Create a new variable phraseToCheck and have it contain some string value.
//Write a code that will check if the value we assigned to this variable is a Palindrome.

let palindrome = "stackcats";

function isPalindrome0(str) {
  for (i = 0; i < str.length; i++) {
    if (str[i] === str[str.length - 1 - i]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}

function isPalindrome(str) {
  let reverseStr = str.split("").reverse().join("");
  console.log(reverseStr);
  if (str === reverseStr) {
    return true;
  } else return false;
}

//Refactored solution:
const isPalindrome2 = (str) => {
  return str === str.split("").reverse().join("") ? true : false;
};

console.log(isPalindrome0(palindrome));
