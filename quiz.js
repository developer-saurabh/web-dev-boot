function Quiz(questions){
    this.score=0;
    this.questions=questions;
    this.questionIndex=0;
}
Quiz.prototype.getQuestionIndex = function(){
    return this.questions(this.questionIndex);
}
Quiz.prototype.guess = function(answer){
    if(this.getQuestionIndex().isCorrectAnswer(answer)){
        this.score++;
    }
    this.questionIndex++;
}
Quiz.prototype.isEnded = function(){
    return this.questionIndex === this.question.length;
}
function Question(text,choices,answer){
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
Question.prototype.isCorrectAnswer = function(choice){
    return this.answer === choice;
}
function populated(){
    if(Quiz.isEnded()){
        showscores();
    }else{
        var element = document.getElementById("questions")
        element.innerHTML = quiz.getQuestionIndex().text;
        var choices = quiz.questionIndex().text;
        for(var i=0;i < choices.length;i++){
            var element = document.getElementById("choice" + i)
            element.innerHTML = choices[1];
            guess("btn" + i.choices[i]);
        }
        showProgress();
    }
};
function guess(id,guess){
    var button = document.getElementById(id);
    quiz.guess(guess);
    populate();
};

function showProgress(){
    var currentQuestionNumber = quiz.questionIndex + 1 ;
    var element = document.getElementById("progress");
    element.innerHTML = "Question" + currentQuestionNumber + "of" + quiz.question.length;
};
function showScores(){
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id= 'score'>Your Scores:" + quiz.score + "</h2>";
    var element =  document.getElementById("quiz");
    element.innerText = gameOverHTML;
};

var questions = [
    new question("What is a lint?", ["C compiler","Interactive debugger","Analyzing tool" , "C interpreter"] , "Analyzing tool"),
    new question("MS-Word is an example of_____", [" Application software","An operating system","A processing device" , "An input device"] , " Application software"),
    new question("Junk e-mail is also called ______", [" Spam","Spoof","Sniffer script" , "Spool"] , " Spam"),
    new question("By default, your documents print in ________ mode", ["Landscape","Portrait","Page Setup" , "Print View"] , "Portrait")
];












var quiz = new Quiz(question);
//Display 
populate();