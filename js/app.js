'use strict';
//greeting
var userName = prompt('What\'s your name?');
while (userName == '' || userName == null) {
  userName = prompt('Please wirte your name first!');
}
alert('welcome ' + userName);
alert('Today we will play gussing game about me, have fun ;)');
//declare some usefull variables
var wrongeAnswerCounter = 0, index = 0, correctAnswers = 0, userInput, convertedUserInput;
//creating array hold all my questions
var question = ['Do you know Ahmad?','Is his age 31?','Is his major Engineer?','Do you know what his favorite color?','Do you know how tall Ahmad is?'];
//making a loop for asking all the questions
while(index != question.length){
  checkingAnswer();
  theAnswers();
}
alert(userName + ', You got ' + correctAnswers + ' out of 5 questions.\n\nThank you :D');
//declare a function to check the answers that the user wrote, also give a massege as a reply
function theAnswers(){
  if (convertedUserInput === 'yes' || convertedUserInput === 'y') {
    //console.log('Great, keep going :)\nPlease click OK for the next question:');
    alert('Great, keep going :)\nPlease click OK for the next question:');
    correctAnswers++;
    index++;
  } else if (convertedUserInput === 'no' || convertedUserInput === 'n') {
    //console.log('You should try harder to know Ahmad well\nPlease click OK for the next question:');
    alert('You should try harder to know Ahmad well\nPlease click OK for the next question:');
    index++;
  } else if (wrongeAnswerCounter == 3) {
    alert('You wrote 3 wrong answers!, No hell you have knew Ahmad before\nYou can Try again');
    wrongeAnswerCounter = 0;
  }
}
//declare function to be sure of the user input yes/no or y/n as an answer for the questions
function checkingAnswer() {
  userInput = prompt( question[index] + '\nYou should write yes/no or y/n as an answer.');
  convertedUserInput = userInput.toLowerCase();
  wrongeAnswerCounter++;
  while ( convertedUserInput !== 'yes' && convertedUserInput !== 'y' && convertedUserInput !== 'no' && convertedUserInput !== 'n') {
    userInput = prompt(question[index] + '\nPlease answer either yes/no or y/n!');
    convertedUserInput = userInput.toLowerCase();
    wrongeAnswerCounter++;
    if (wrongeAnswerCounter == 3) {break;}
  }
}
