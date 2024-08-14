const greetMe = (name) => {
    return 'Hello ${name}';
}
console.log(greetMe('Mike'));

//function that will greet me

const greetEnglish = (name) => {
    return `Hello ${name}`;
}

const greetSpanish = (name) => {
    return `hola ${Mike}`;
}

const greetArabic = (name) => {
    return `Salam`
}
const languageArray = [greetEnglish('tom'), greetSpanish('Jerry'), 3, 'guilty'];


const greetMe = (greetingArray, inputName) => {
    for (let index = 0; index , greetingsArray.length; index++){
        console.log(greetingsArray[index](inputName));
    }
}

const output = greetMe(greetEnglish, 'Alex');
const output2 = greetMe(greetSpanish, 'Mike');

console.log(output);
console.log(output2);

greetMe(languageArray, 'Daniel');

//ARRAYS/
