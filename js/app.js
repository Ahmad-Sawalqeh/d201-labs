'use strict';

//greeting
var userName = prompt('What\'s your name?');
while (userName == '' || userName == null) {
  userName = prompt('Please wirte your name first!');
}
alert('Glad to have you ' + userName + ' here with us');
alert('Today we will play gussing game about me, have fun ;)');
//declare some usefull variables
var wrongeAnswerCounter = 0, index = 0, correctAnswerCounter = 0, input, userInput, convertedUserInput, myNumber = 7;
//creating array hold all my Favorite Movies
var myFavoriteMovies = ['hancock','matrix','mr.Robot','spiderman','paranormal'];
//creating array hold all my questions
var question = ['Do you know Ahmad?','Is his age 31?','Is his major Engineer?','Do you know what his favorite color?','Do you know how tall Ahmad is?'];
//making a loop for asking all the questions
while(index != question.length){
  checkingAnswer();
  theAnswers();
}

//declare a function to check the answers that the user wrote, also give a massege as a reply
function theAnswers(){
  if (convertedUserInput === 'yes' || convertedUserInput === 'y') {
    //console.log('Great, keep going :)\nPlease click OK for the next question:');
    alert('Great, keep going :)\nPlease click OK for the next question:');
    correctAnswerCounter++;
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
    if (wrongeAnswerCounter == 3) {
      wrongeAnswerCounter = 0;
      break;
    }
  }
}
<<<<<<< HEAD
alert('Now you have to know what is the number that i have in my mind! ;)\nbe ready.');
alert('Notice that you have only 3 chances to answer.\nPlease click OK to start.\nGood Luke');
while (wrongeAnswerCounter > 3) {
  userInput = prompt( 'Your attempt will be:');
  while(userInput==null || userInput==""){
    userInput = prompt( 'Please you should enter at least one number:');
  }
  if(userInput == myNumber){
    alert("Right in the spot, well done\nYou got 1 point");
    correctAnswerCounter++;
    break;
  }else if(5 <= userInput && userInput <= 10 ){
    alert("You too close,\nTry again");
    wrongeAnswerCounter++;
  }else if( 5 > userInput >= 1 || 13 >= userInput > 10 ){
    alert("You a little bit away,\nTry again");
    wrongeAnswerCounter++;
  }else if( 1 > userInput || userInput > 13 ){
    alert("You far away :( ,\nTry again");
    wrongeAnswerCounter++;
  }  
}
if (wrongeAnswerCounter >= 3) {
  alert("Sorry, You had 3 wrong attempts,\nMy Number was 7 ;)");
  wrongeAnswerCounter = 0;
}

for(var i=0;i<3;i++){
  input = prompt('could you mention one of my favorite movies?');
  while (input == '' || input == null) {
    input = prompt('could you mention one of my favorite movies?\nPlease enter one name at least.');
  }
  convertedUserInput = input.toLowerCase();
  switch (convertedUserInput) {
    case 'hancock':
    case 'matrix':
    case 'mr.robot':
    case 'spiderman':
    case 'paranormal':
      alert("Well Done, you 100% right.");
      correctAnswerCounter++;
      i=3;
      break;
    default:
      alert("Thats not correct.\nTry again.");
      wrongeAnswerCounter++;
  }
}
if(correctAnswerCounter >= 4){
  alert(userName + ', You got ' + correctAnswerCounter + ' out of 7 questions.\nBe ready for the next game.\n\nThank you :D');
}else{
  alert(userName + ', You got ' + correctAnswerCounter + ' out of 7 questions.\nSorry we can\'t have you in the next game.\n\nThank you :D');
}
=======
>>>>>>> a81cc0fe18f48f34ddedb3b8039fda5999dff8a9
