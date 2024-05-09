//String methods can be combined in a process called method chaining.

let word = 'JavaScript';
console.log(word.toUpperCase());
console.log(word.slice(4).toUpperCase());

//Returns ``JAVASCRIPT``

//What does ``word.slice(4).toUpperCase()`` return?


//Experiment with other combinations (chains) of string methods.
word.replace('JavaScript', 'JS');
console.log(word);