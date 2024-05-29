const input = require('readline-sync');
// let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
// const first3Letters = str.slice(0, 3);
// const removedLetters = str.slice(3)
// const newString = removedLetters + first3Letters;

//Use a template literal to print the original and modified string in a descriptive phrase.

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

// const str = input.question('What do you want to translate?');
// const letterstoRelocate = input.question('How many letters to move?');
// const first3Letters = str.slice(0, letterstoRelocate);
// const removedLetters = str.slice(letterstoRelocate);
// const newString = removedLetters + first3Letters;
// console.log(`${newString} translates to ${str} in pseudo-pig latin.`);
//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

const str = input.question('What do you want to translate?');
const letterstoRelocate = input.question('How many letters to move?');

if (letterstoRelocate > str.length) {
    const first3Letters = str.slice(0, letterstoRelocate);
    const removedLetters = str.slice(letterstoRelocate);
    const newString = removedLetters + first3Letters;
    console.log(`Can't do that many letters! ${newString} translates to ${str} in pseudo-pig latin.`);

} else { 

const first3Letters = str.slice(0, letterstoRelocate);
const removedLetters = str.slice(letterstoRelocate);
const newString = removedLetters + first3Letters;
console.log(`${newString} translates to ${str} in pseudo-pig latin.`);
}