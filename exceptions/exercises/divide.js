// Write a function called 'divide' that takes two parameters: a numerator and a denominator.

// Your function should return the result of numerator / denominator.

// However, if the denominator is zero you should throw the error, "Attempted to divide by zero."

// Code your divide function here:
// test-student-labs.js

function gradeLabs(labs) {
    for (let i = 0; i < labs.length; i++) {
      let lab = labs[i];
      let result;
      try {
        result = lab.runLab(3);
      } catch (error) {
        result = "Error thrown";
      }
      console.log(`${lab.student} code worked: ${result === 27}`);
    }
  }
  
  // Example student labs
  let studentLabs = [
    {
      student: 'Carly',
      runLab: function (num) {
        return Math.pow(num, num);
      }
    },
    {
      student: 'Erica',
      runLab: function (num) {
        return num * num;
      }
    }
  ];
  
  // Example student labs with missing or incorrect function names
  let studentLabs2 = [
    {
      student: 'Blake',
      myCode: function (num) {
        return Math.pow(num, num);
      }
    },
    {
      student: 'Jessica',
      runLab: function (num) {
        return Math.pow(num, num);
      }
    },
    {
      student: 'Mya',
      runLab: function (num) {
        return num * num;
      }
    }
  ];
  
  // Test gradeLabs function
  console.log("Testing studentLabs:");
  gradeLabs(studentLabs);
  
  console.log("\nTesting studentLabs2:");
  gradeLabs(studentLabs2);
  