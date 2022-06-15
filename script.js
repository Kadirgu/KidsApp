//Variables from html file
const title = document.getElementById('title');
const character = document.getElementById('character');
const character2 = document.getElementById('character2'); 
const question = document.getElementById('question');

//functions that do things
function changeColor () {
 title.style.backgroundColor = 'blue';
 title.style.color = 'white'
};

function returnColor () {
  title.style.backgroundColor = 'pink';
  title.style.color = 'white';
};

//Chose which problem you want to work on
const number = Math.ceil(Math.random()* 10);
let problem = 3;

function refreshQuestion() {
  question.innerHTML = `${number} + ${problem} =`;
};   

const number2 = Math.ceil(Math.random()* 10);

function refreshQuestion2() {
  question.innerHTML = `${number2} + ${problem} =`;
};   

function restart() {
  question.innerHTML = 'Let\'s Go!';
}

//event listeners that trigger functions
title.onmousedown = changeColor;
title.onmouseup = returnColor;
character.onmousedown = refreshQuestion;
character2.onmousedown = refreshQuestion2;
title.onclick = restart;
