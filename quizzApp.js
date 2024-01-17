///User Data

let quizData;


function userData(){
  quizData = document.querySelector('#nameBox').value;
  if(quizData == ''){
    alert('Please Write Your Name!');
    document.querySelector('#nameBox').innerText = '';
  }else{
  localStorage.setItem("quizData", quizData);
  document.querySelector('#user-name-here').innerHTML = localStorage.getItem("quizData");
  }
}

//Question and Answer Portion

let qstnSlDisplay = document.querySelector('#qstn-sl-count');
//This variable is to define question serial number.

let displayQstn = document.querySelector('.question-display-board');
let optionA = document.querySelector('#keyAnswer-a');
let optionB = document.querySelector('#keyAnswer-b');
let optionC = document.querySelector('#keyAnswer-c');
let optionD = document.querySelector('#keyAnswer-d');
let correctAnswer;
// Above are question and answer variables...

let userClickedOption;

let scoreDisplay = document.querySelector('#my-score');
let catagoryHeadingg = localStorage.getItem('catagoryHeading');
let questionCounter = localStorage.getItem("startsl");
let qstnSlCounter = 1;
let wholeQnO;
let timeSpanCount;
let scoreCounter = 0;
let attemptedQuestions = 0;
let saveScore = localStorage.getItem('finalscore',scoreCounter);

let totalTimeTaken = 0;
//Above are variables...

function selectA(){
  userName = document.querySelector('#nameBox').value;
  if(userName == ''){
    document.querySelector('#input-enter').click();
    document.querySelector('.category-1').href = 'quizApp.html';
  }else{
    document.querySelector('#input-enter').click();
    localStorage.setItem('catagoryHeading', 'Pipe And Cisterns');
    localStorage.setItem("startsl", 0);
    questionCounter = localStorage.getItem("startsl");
    qstnSlCounter = 1;
    loadQuestions();
  }
}

function selectB(){
  userName = document.querySelector('#nameBox').value;
  if(userName == ''){
    document.querySelector('#input-enter').click();
    document.querySelector('.category-2').href = 'quizApp.html';
  }else{
    document.querySelector('#input-enter').click();
    localStorage.setItem('catagoryHeading', 'Probability');
    localStorage.setItem("startsl", 10);
    questionCounter = localStorage.getItem("startsl");
    qstnSlCounter = 1;
    loadQuestions();
  }
}

function selectC(){
  userName = document.querySelector('#nameBox').value;
  if(userName == ''){
    document.querySelector('#input-enter').click();
    document.querySelector('.category-3').href = 'quizApp.html';
  }else{
    document.querySelector('#input-enter').click();
    localStorage.setItem('catagoryHeading', 'Problem on Age');
    localStorage.setItem("startsl", 20);
    questionCounter = localStorage.getItem("startsl");
    qstnSlCounter = 1;
    loadQuestions();
  }
}

function selectD(){
  userName = document.querySelector('#nameBox').value;
  if(userName == ''){
    document.querySelector('#input-enter').click();
    document.querySelector('.category-4').href = 'quizApp.html';
  }else{
    document.querySelector('#input-enter').click();
    localStorage.setItem('catagoryHeading', 'Profit and Loss');
    localStorage.setItem("startsl", 30);
    questionCounter = localStorage.getItem("startsl");
    qstnSlCounter = 1;
    loadQuestions();
  }
}
// The above codes are for main page...
//
//


let loadQuestions = () =>{
  document.querySelector('#catagory-heading').innerText = catagoryHeadingg;

  qstnSlDisplay.innerText =qstnSlCounter;

  wholeQnO = qstnAns[questionCounter];

  displayQstn.innerText = wholeQnO.question;
  optionA.innerText = wholeQnO.a;
  optionB.innerText = wholeQnO.b;
  optionC.innerText = wholeQnO.c;
  optionD.innerText = wholeQnO.d;

  correctAnswer = wholeQnO.answer;
  timeSpanCount = 10;
};
//Above function is for load question...
//


//Below datas and functions are for checking correct/wrong answers...
//
function checkOptionA(){
  userClickedOption = document.querySelector('#keyAnswer-a').value;
  attemptedQuestions++;
  localStorage.setItem('attemptedqstn', attemptedQuestions);

  if (userClickedOption == correctAnswer){
    scoreCounter++;
    localStorage.setItem('finalscore', scoreCounter)
    scoreDisplay.innerText = scoreCounter;
    document.querySelector('#keyAnswer-a').innerText = 'Correct';
    document.querySelector('#keyAnswer-a').style.backgroundColor = 'green';
    function resetQuestion() {
      // Reset background color to default (assuming default background color is white)
      document.querySelector('#keyAnswer-a').innerText = ''; // Reset the text
      document.querySelector('#keyAnswer-a').style.backgroundColor = 'white';
      nextQuestion();
    }
  }
  else{
    document.querySelector('#keyAnswer-a').innerText = 'Wrong';
    document.querySelector('#keyAnswer-a').style.backgroundColor = 'red';
    scoreDisplay.innerText = scoreCounter;
    function resetQuestion() {
      // Reset background color to default (assuming default background color is white)
      document.querySelector('#keyAnswer-a').innerText = ''; // Reset the text
      document.querySelector('#keyAnswer-a').style.backgroundColor = 'white';
      nextQuestion();
    }
  }

  // Call resetQuestion after a delay
  setTimeout(resetQuestion, 100);
}



function checkOptionB(){
  userClickedOption = document.querySelector('#keyAnswer-b').value;
  attemptedQuestions++;
  localStorage.setItem('attemptedqstn', attemptedQuestions);

  if (userClickedOption == correctAnswer){
    scoreCounter++;
    localStorage.setItem('finalscore', scoreCounter)
    scoreDisplay.innerText = scoreCounter;
    document.querySelector('#keyAnswer-b').innerText = 'Correct';
    document.querySelector('#keyAnswer-b').style.backgroundColor = 'green';
    function resetQuestion() {
      // Reset background color to default (assuming default background color is white)
      document.querySelector('#keyAnswer-b').innerText = ''; // Reset the text
      document.querySelector('#keyAnswer-b').style.backgroundColor = 'white';
      nextQuestion();
    }
  }
  else{
    document.querySelector('#keyAnswer-b').innerText = 'Wrong';
    document.querySelector('#keyAnswer-b').style.backgroundColor = 'red';
    scoreDisplay.innerText = scoreCounter;
    function resetQuestion() {
      // Reset background color to default (assuming default background color is white)
      document.querySelector('#keyAnswer-b').innerText = ''; // Reset the text
      document.querySelector('#keyAnswer-b').style.backgroundColor = 'white';
      nextQuestion();
    }
  }

  // Call resetQuestion after a delay
  setTimeout(resetQuestion, 100);
}



function checkOptionC(){
  userClickedOption = document.querySelector('#keyAnswer-c').value;
  attemptedQuestions++;
  localStorage.setItem('attemptedqstn', attemptedQuestions);

  if (userClickedOption == correctAnswer){
    scoreCounter++;
    localStorage.setItem('finalscore', scoreCounter)
    scoreDisplay.innerText = scoreCounter;
    document.querySelector('#keyAnswer-c').innerText = 'Correct';
    document.querySelector('#keyAnswer-c').style.backgroundColor = 'green';
    function resetQuestion() {
      // Reset background color to default (assuming default background color is white)
      document.querySelector('#keyAnswer-c').innerText = ''; // Reset the text
      document.querySelector('#keyAnswer-c').style.backgroundColor = 'white';
      nextQuestion();
    }
  }
  else{
    document.querySelector('#keyAnswer-c').innerText = 'Wrong';
    document.querySelector('#keyAnswer-c').style.backgroundColor = 'red';
    scoreDisplay.innerText = scoreCounter;
    function resetQuestion() {
      // Reset background color to default (assuming default background color is white)
      document.querySelector('#keyAnswer-c').innerText = ''; // Reset the text
      document.querySelector('#keyAnswer-c').style.backgroundColor = 'white';
      nextQuestion();
    }
  }

  // Call resetQuestion after a delay
  setTimeout(resetQuestion, 100);
}

function checkOptionD(){
  userClickedOption = document.querySelector('#keyAnswer-d').value;
  attemptedQuestions++;
  localStorage.setItem('attemptedqstn', attemptedQuestions);

  if (userClickedOption == correctAnswer){
    scoreCounter++;
    localStorage.setItem('finalscore', scoreCounter)
    scoreDisplay.innerText = scoreCounter;
    document.querySelector('#keyAnswer-d').innerText = 'Correct';
    document.querySelector('#keyAnswer-d').style.backgroundColor = 'green';
    function resetQuestion() {
      // Reset background color to default (assuming default background color is white)
      document.querySelector('#keyAnswer-d').innerText = ''; // Reset the text
      document.querySelector('#keyAnswer-d').style.backgroundColor = 'white';
      nextQuestion();
    }
  }
  else{
    document.querySelector('#keyAnswer-d').innerText = 'Wrong';
    document.querySelector('#keyAnswer-d').style.backgroundColor = 'red';
    scoreDisplay.innerText = scoreCounter;
    function resetQuestion() {
      // Reset background color to default (assuming default background color is white)
      document.querySelector('#keyAnswer-d').innerText = ''; // Reset the text
      document.querySelector('#keyAnswer-d').style.backgroundColor = 'white';
      nextQuestion();
    }
  }

  // Call resetQuestion after a delay
  setTimeout(resetQuestion, 100);
}



//Above datas and functions are for checking correct/wrong answers...
//

function nextQuestion(){
  if (qstnSlCounter < 10){
    ++qstnSlCounter;
    ++questionCounter;
  }else{
    qstnSlCounter = 10;
    document.querySelector('#submit').click();
  }
  
  loadQuestions();
}
//Next question function...
//

function PreviousQuestion(){
  if (qstnSlCounter != 0 && qstnSlCounter > 1){
    --qstnSlCounter;
    --questionCounter;
  }else{
    qstnSlCounter = 1;
  }
  loadQuestions();
}
//Previous question function which is terminatted...
//


// loadQuestions();



let timeSpan = ()=>{
  document.querySelector('.time-span').innerHTML = timeSpanCount;
  timeSpanCount--;
  totalTimeTaken++;
  localStorage.setItem('totaltimetaken', totalTimeTaken);
  if (timeSpanCount < 0  && qstnSlCounter < 10){
    // timeSpanCount = 10;
    nextQuestion()
  }
  if(timeSpanCount < -1){
    setTimeout(nextPage, 300);
  }
}
//The above function is for time counter...
//


function nextPage(){
  document.querySelector('#submit').click();
}
//Final page loder function...
//

let theInterval = setInterval(timeSpan, 1000);
// setTimeout (theTimeInterval, 10000);
//
function stopInterval(){
  clearInterval(theInterval);
}
//Above code/function is to clear time interval...



//Below data is for result page...
//

function loadAllData(){
  stopInterval();
  document.querySelector('#name-display').innerText = localStorage.getItem("quizData");
  document.querySelector('#attempted-counter').innerText = localStorage.getItem('attemptedqstn') || 0;
  document.querySelector('#un-attempted-counter').innerText = 10-localStorage.getItem('attemptedqstn') || 0;
  document.querySelector('#correct-ans-counter').innerText = saveScore || 0;
  document.querySelector('#wrong-ans-counter').innerText = localStorage.getItem('attemptedqstn')-saveScore;
  document.querySelector('#Percentage-checker').innerText = (saveScore/10)*100;
  document.querySelector('#time-counter').innerText =Math.ceil(localStorage.getItem('totaltimetaken')-(localStorage.getItem('totaltimetaken')*0.105));
}
//Above data loaded in result page...
//

function scoreBoardDel(){
  localStorage.removeItem('attemptedqstn');
  localStorage.removeItem('finalscore');
  localStorage.removeItem('totaltimetaken');
}
// Above function is for Start Again...
//

function homePage(){
  localStorage.clear();
};
//Above function is for GOTO HOME Button...