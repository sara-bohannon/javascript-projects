function runProgram() {
    askForName();
    // TODO 1.1c: Greet candidate using their name //
     console.log(`Hello, ${firstName} ${lastName}!`;);
    askQuestion();
    gradeQuiz(this.candidateAnswers);
