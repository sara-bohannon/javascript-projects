// Initialize Variables below
const date = "Monday 2019-03-18";
const time = "10:05:34 AM";
const astronautCount = 7;
const astronautStatus = "ready";
const averageAstronautMassKg = 80.7;
const crewMassKg = astronautCount * averageAstronautMassKg;
const fuelMassKg = 760000;
const shuttleMassKg = 74842.31;
const totalMassKg = crewMassKg + fuelMassKg +shuttleMassKg;
const maximumMassLimit = 850000;
const fuelTempCelsius  = -225;
const minimumFuelTemp = -300;
const maximumFuelTemp = -150;
const fuelLevel = "100%";
const weatherStatus = "clear";
const preparedForLiftOff = "true";

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7

// add logic below to verify all astronauts are ready

// add logic below to verify the total mass does not exceed the maximum limit of 850000

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300

// add logic below to verify the fuel level is at 100%

// add logic below to verify the weather status is clear

// Verify shuttle launch can proceed based on above conditions

if (astronautCount > 7) {
console.log("Scrub Launch now");
}
if (!astronautStatus === "ready") {
    console.log("Scrub Launch promptly");
}
if (totalMassKg > maximumMassLimit) {
    console.log("Scrub Launch and diet")
}
if (fuelTempCelsius < minimumFuelTemp || fuelTempCelsius > maximumFuelTemp) {
    console.log("Scrub Launch it's gonna blow");
}
if (fuelLevel !== "100%") {
    console.log("Scrub Launch ain't no gas in it");
}
if (!weatherStatus === "clear") {
    console.log("Scrub Launch It's raining men")
}

console.log(date);
console.log(time);
console.log(astronautCount);
console.log(crewMassKg);
console.log(fuelMassKg);
console.log(shuttleMassKg);
console.log(totalMassKg);
console.log(fuelTempCelsius);
console.log(weatherStatus);
console.log("have a safe flight");





   


 