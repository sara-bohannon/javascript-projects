const checkFive = require('../checkFive.js');

describe("checkFive", function() {
    test("Returns correct message for number less than 5", function() {
        let output = checkFive(2);
        expect(output).toEqual("2 is less than 5.");
    });

    test("Returns correct message for number equal to 5", function() {
        let output = checkFive(5);
        expect(output).toEqual("5 is equal to 5.");
    });

    test("Returns correct message for number greater than 5", function() {
        let output = checkFive(8);
        expect(output).toEqual("8 is greater than 5.");
    });
});
