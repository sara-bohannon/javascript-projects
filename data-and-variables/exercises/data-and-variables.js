// Declare and assign the variables below
let shuttleName = "Sarandipity";
let shuttleSpeedMph = 17500;
let distanceToMarsKm = 225000000;
let distanceToMoonKm = 384400;
const milesPerKm = 0.621;
// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof "shuttleName");
console.log(typeof shuttleSpeedMph);
console.log(typeof distanceToMarsKm);
console.log(typeof distanceToMoonKm);
console.log(typeof milesPerKm);
// Calculate a space mission below

// Print the results of the space mission calculations below

// Calculate a trip to the moon below

let MilesToMoon = distanceToMoonKm * milesPerKm;
let hoursToMoon = distanceToMoonKm / shuttleSpeedMph;
let daystoMoon = hoursToMoon / 24;

console.log(shuttleName, " will take", daystoMoon, "days to reach the Moon." )

let milesToMars = distanceToMarsKm * milesPerKm;
let hoursToMars = milesToMars / shuttleSpeedMph;
let daysToMars = hoursToMars / 24;
// Print the results of the trip to the moon below
 
 console.log(shuttleName,"will take", daysToMars,"days to reach Mars.")


