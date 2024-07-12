//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.

//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name, mass, scores) {//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
        class CrewCandidate{
            constructor(name, mass, scores = []){
                this.name = name;
                this.mass = mass;
                this.scores = scores;
            }
            addScores(newScore) {
                this.scores.push(newScore);
            }
        
            average(){
                let sum = 0;
                for(let i=0; i<this.scores.length; i++) {
                    sum += this.scores[i];
                }
                let average = sum/this.scores.length;
                return Math.round(10 * average) / 10;
            }
        
            status(){
                let newavg = this.average();
                if (newavg >= 90){
                    return "Accepted";
                }else if (newavg >= 80){
                    return "Reserve";
                }else if (newavg >= 70){
                    return "Probationary";
                }else {
                    return "Rejected";
                }
        
            }
        
        
        }
        
        let bubbaBear = new CrewCandidate("Bubba Bear", 135, [88,85,90]);
        console.log(bubbaBear);
        
        let merryMaltese = new CrewCandidate("Merry Maltese", 1.5, [93,88,97]);
        console.log(merryMaltese);
        
        let gladGator = new CrewCandidate("Glad Gator", 225, [75,78,62]);
        console.log(gladGator);
        
        //Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.
        
        bubbaBear.addScores(83);
        console.log(bubbaBear.scores);
        
        console.log(merryMaltese.average());
        console.log(bubbaBear.average());
        console.log(gladGator.average());
        
        console.log(`${bubbaBear.name} earned an average test score of ${bubbaBear.average()}% and has a status of ${bubbaBear.status()}.`);
        console.log(`${merryMaltese.name} earned an average test score of ${merryMaltese.average()}% and has a status of ${merryMaltese.status()}.`);
        console.log(`${gladGator.name} earned an average test score of ${gladGator.average()}% and has a status of ${gladGator.status()}.`);
        
        
        
        //Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.
        
        let test = 0;
        while(gladGator.status() !== "Accepted" && gladGator.status() !== "Reserve"){
            gladGator.addScores(100);
            test++; 
        }
        console.log(test);
        console.log(gladGator.status());
        console.log(gladGator.average());
        this.name = name;
        this.mass = mass;
        this.scores = scores
    }
}

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.