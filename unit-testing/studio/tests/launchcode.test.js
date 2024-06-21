// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
  test("Checks that organization = nonprofit", function() {
    expect(launchcode.organization).toBe("nonprofit")
  })
  test("Check that executiveDirector = Jeff", function() {
    expect(launchcode.executiveDirector).toBe("Jeff")
  })
  test("Check percentageCoolEmployees = 100", function() {
    expect(launchcode.percentageCoolEmployees).toBe(100)
  })
  test("Check that programsOffered contains web development, data analysis, and liftoff, and length = 3", function() {
    expect(launchcode.programsOffered).toContain("Web Development"),
    expect(launchcode.programsOffered).toContain("Data Analysis"),
    expect(launchcode.programsOffered).toContain("Liftoff"),
    expect(launchcode.programsOffered.length).toBe(3)
  })
  test("When passed a number that is only divisible by 2 launch output returns Launch!", function() {
    expect(launchcode.launchOutput(4)).toBe("Launch!")
  })  
  test("When passed a number that is only divisible by 3 launch output returns Launch!", function() {
    expect(launchcode.launchOutput(9)).toBe("Code!")
  })
  test("When passed a number that is only divisible by 5 launch output returns Rocks!", function() {
    expect(launchcode.launchOutput(25)).toBe("Rocks!")
  })
  test("When passed a number that is divisible by 2 and 3 launch output returns LaunchCode!", function() {
    expect(launchcode.launchOutput(6)).toBe("LaunchCode!")
  })
})
