// Starter code provided
let animal1 = {
   name: 'Miska',
   species: 'Dog',
   mass: 10,
   age: 5,
 };
 
 let animal2 = {
   name: 'Kiska',
   species: 'Cat',
   mass: 5,
   age: 3,
 };
 
 // Additional animals to be added
 let animal3 = {
   name: 'Brad',
   species: 'Chimpanzee',
   mass: 11,
   age: 6,
 };
 
 let animal4 = {
   name: 'Leroy',
   species: 'Beagle',
   mass: 14,
   age: 5,
 };
 
 let animal5 = {
   name: 'Almina',
   species: 'Tardigrade',
   mass: 0.0000000001,
   age: 1,
 };
 
// Function to generate random ID between 1 and 10
function generateID() {
   return Math.floor(Math.random() * 10) + 1;
 }
 
 // Assign astronautID to each animal
 animal1.astronautID = generateID();
 animal2.astronautID = generateID();
 animal3.astronautID = generateID();
 animal4.astronautID = generateID();
 animal5.astronautID = generateID();
 
// Function to add move method to each animal
function addMoveMethod(animal) {
   animal.move = function() {
     return Math.floor(Math.random() * 11); // Random number between 0 and 10
   };
 }
 
 // Add move method to each animal
 addMoveMethod(animal1);
 addMoveMethod(animal2);
 addMoveMethod(animal3);
 addMoveMethod(animal4);
 addMoveMethod(animal5);
 
 // Store all animal objects in a crew array
let crew = [animal1, animal2, animal3, animal4, animal5];

// After you have created the other object literals, add the astronautID property to each one.
// Function to generate crew report for an animal
function crewReports(animal) {
   return `${animal.name} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their ID is ${animal.astronautID}.`;
 }
 
 // Example usage
 console.log(crewReports(animal1));


 // Function to simulate fitness test for the crew
function fitnessTest(crew) {
  let results = [];
  
  crew.forEach(animal => {
    let steps = 0;
    let turns = 0;
    
    while (steps < 20) {
      steps += animal.move();
      turns++;
    }
    
    results.push(`${animal.name} took ${turns} turns to take 20 steps.`);
  });
  
  return results;
}

// Perform fitness test on the crew and print results
let fitnessResults = fitnessTest(crew);
fitnessResults.forEach(result => {
  console.log(result);
});

