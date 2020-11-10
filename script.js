var number1; // both of these will randomly generate numbers when the game starts
var number2;

number1 = Math.floor((Math.random() * 10) + 1); //values have been set from variable declarations
number2 = Math.floor((Math.random() * 10) + 1); // Math.floor is used to return largest integer that is less than or equal to a given number
// functions need a paramater, Math.random is used to return random numbers between 0 (inclusive) and 1 (exclusive)
document.getElementById("number1").innerHTML = number1; //.innerHTML is to be replaced by the "id" in the .html document
document.getElementById("number2").innerHTML = number2;

var answer = number1 + number2;

var checkAnswer = document.querySelector('input[type=text]');
var value = checkAnswer.value;
var btn = document.querySelector('input[type=button][value=check]');

btn.onclick = function() {
    value = checkAnswer.value;
    if (value == answer) {
        alert ('You are correct!');
    } else {
        alert ('You\'re incorrect, the answer was ' + answer);
    }

    document.querySelector('input[type=text]').value = "";
    document.getElementById('number1').innerHTML = "";
    document.getElementById('number2').innerHTML = "";
    number1 = Math.floor((Math.random() * 10) + 1);
    number2 = Math.floor((Math.random() * 10) + 1);
    document.getElementById('number1').innerHTML = number1;
    document.getElementById('number2').innerHTML = number2;

    answer = number1 + number2;
}