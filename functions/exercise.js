const { link } = require("fs");

function makeLine(size) {
    let line = '';
    for (let i = 0; i < size; i++) {
      line += '#';
    }
    return line;

  }

console.log("A:", makeLine(5));

console.log("")

  function makeSquare(size){
    return makeRectangle(size,size)

  }

  console.log("B:", makeSquare(5,3));

  console.log("");

  function makeRectangle(width, height) {
    let rectangle = '';
    for (let i = 0; i < height; i++) {
        rectangle += "\n" + (makeLine(5));
  }
  return rectangle
}
console.log(makeRectangle(5));

  function makeRectangle(width, height) {
    let rectangle = '';
    for(let i = 0; i < height; i++) {
        rectangle += (makeLine(width)+ '/n');     
    }
    return rectangle.slice(0, -1);
  }
  console.log("C: \n" + makeRectangle(5, 3));

  console.log("");


  function makeDownwardStairs(height) {
    let stairs = '';
    for (let i =0; i < height; i++) {
        stairs += "\n" + makeLine(i+1) ;
    }
    return stairs;
  }
  console.log("E: \n" + makeDownwardStairs(5));

  console.log("");

  function makeSpaceLine(numSpaces, numChars) {
    spaces = '';
    for (let i = 0; i < numSpaces; i++) {
      spaces += " "
    }
    for (let j = 0; j < numChars; j++) {
      spaces += '#'
    }
    for (let i = 0; i < numSpaces; i++) {
      spaces += " "
    }
    return spaces
  }
  console.log("F: \n", makeSpaceLine(3, 6));
  
  //g 
  console.log("______________________");
  
  
  
  function makeIsoscelesTriangle(height) {
     let triangle = '';
     for (let i = 0; i < height; i++) {
        triangle += (makeSpaceLine(height - i - 1, 2*i + 1) + '\n');
     }
     return triangle.slice(0, -1);
  }
  console.log("G: \n", makeIsoscelesTriangle(5));
  
  
  function makeDiamond(height, sym) {
   let triangle = ''
    for (let i = 0; i < height; i++) {
        triangle += (makeSpaceLine(height - i - 1, 2*i + 1) + '\n');
     }
  }

 

