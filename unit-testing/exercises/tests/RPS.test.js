const test = require('../RPS.js');

describe("whoWon", function() {
    test("Handles tie correctly", function() {
        let output = whoWon('rock', 'rock');
        expect(output).toEqual('TIE!');
    });

    test("Player 2 wins scenarios", function() {
        let output1 = whoWon('rock', 'paper');
        expect(output1).toEqual('Player 2 wins!');

        let output2 = whoWon('paper', 'scissors');
        expect(output2).toEqual('Player 2 wins!');

        let output3 = whoWon('scissors', 'rock');
        expect(output3).toEqual('Player 2 wins!');
    });

    test("Player 1 wins scenarios", function() {
        let output1 = whoWon('paper', 'rock');
        expect(output1).toEqual('Player 1 wins!');

        let output2 = whoWon('scissors', 'paper');
        expect(output2).toEqual('Player 1 wins!');

        let output3 = whoWon('rock', 'scissors');
        expect(output3).toEqual('Player 1 wins!');
    });
});


