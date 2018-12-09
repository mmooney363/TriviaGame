var correct=0;
var incorrect=0;
var missed=0;

var totalTime = 180;
var totalMin = parseInt(totalTime/60);
var totalSec = parseInt(totalTime%60);

function Countdown() {
    document.getElementById("TimeLeft").innerHTML
    ='Time Left: ' + totalMin + ' minutes ' + totalSec + ' seconds ';
    if(totalTime <= 0){
        window.location = "results.html";
        
    } else{
        totalTime = totalTime -1;
        totalMin = parseInt(totalTime/60);
        totalSec = parseInt(totalTime%60);
     setTimeout("Countdown()",1000)   
    }}
setTimeout("Countdown()",1000);

function Start() {
    document.getElementById("mainQuiz").style.visibility = "visible";
}

function onSubmit(){
    var NumberofQuestions = 8;
    var correctAnswer = ['d', 'a', 'c', 'c', 'a', 'b', 'd', 'c'];
    

    var q1 = document.forms['quiz']['q1'].value;
    var q2 = document.forms['quiz']['q2'].value;
    var q3 = document.forms['quiz']['q3'].value;
    var q4 = document.forms['quiz']['q4'].value;
    var q5 = document.forms['quiz']['q5'].value;
    var q6 = document.forms['quiz']['q6'].value;
    var q7 = document.forms['quiz']['q7'].value;
    var q8 = document.forms['quiz']['q8'].value;

    
    
    for(var i = 1; i <= NumberofQuestions; i++){
        if(eval('q' + i) === correctAnswer[i-1]){
            correct++;
        }
        else
            incorrect++;
    }
        if(eval('q' + i) == ''){
            missed++;
        }

    var finalScore = document.getElementById('results.html')
    results.innerHTML=("<h2>Correct Answers: " + correct + "</h2>" <br> "<h2>Incorrect Answers: " + incorrect + "</h2>" <br> "<h2>Missed Questions: " + missed + "</h2>")
}
