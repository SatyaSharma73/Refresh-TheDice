// var player1=prompt("Enter 1st Player's Name");
// var player2=prompt("Enter 2nd Player's Name");
// alert("Welcome");
//
// document.getElementById("p1").innerHTML =player1;
// document.getElementById("p2").innerHTML = player2;

var randomNumber1=Math.floor(Math.random()*6)+1;
var randomNumber2=Math.floor(Math.random()*6)+1;
var randomDiceImage1="images/dice"+randomNumber1+".png";
var randomDiceImage2="images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomDiceImage1);
document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage2);

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML=" 🚩Player 1 wins !";
}
else if(randomNumber1===randomNumber2){
  document.querySelector("h1").innerHTML="Draw !";
}
else{
  document.querySelector("h1").innerHTML=" 🚩Player 2 wins !";
}
