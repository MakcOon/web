var fight_button = document.getElementById("fight_button");
fight_button.addEventListener("click", fight, false);
function promptName() {
  let value = prompt("Capitan zalupa run out, enter your name and bring it back");
  while (value == ""){
      value = prompt("Enter your name dude ");
  }
  document.getElementById("first_player_name").innerText = value;
};
document.addEventListener("DOMContentLoaded", promptName);
function fight() {;
  var p1 = document.getElementById("first_player_value");
  var p2 = document.getElementById("second_player_value");
  fight_button.removeEventListener("click", fight);
  let rand_first = getRandomInt(100);
  let rand_second = getRandomInt(100);
  p1.innerHTML=rand_first;
  p2.innerHTML=rand_second;
  if (rand_first == rand_second) {
      
  } else if (rand_first > rand_second){
      setTimeout(addPlayerScore, 900);
  } else {
      setTimeout(addComputerScore, 900);
  }
  setTimeout(AddClick, 1000);
  setTimeout(checkWinner, 1000);
}
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function AddClick(){
  fight_button.addEventListener("click", fight, false);
}
function addPlayerScore(){
  var el = document.getElementById("player_score");
  el.innerHTML = parseInt(el.innerText)+1;
}
function addComputerScore(){
  var el = document.getElementById("computer_score");
  el.innerHTML = parseInt(el.innerText)+1;
}
function ComputerWin(){
  let p1=document.getElementById("hit");
  p1.style.display = "block";
}
function PlayerWin(){
  let p1=document.getElementById("lasthit");
  p1.style.display = "block";
}
function Win(){
  document.getElementById("hit").style.display= alert("Captain zalupa is back"); 
}
function Win1(){
document.getElementById("lasthit").style.display=alert("Captain zalupa run out");
}
function checkWinner(){
  let p1=document.getElementById("player_score");
  let p2=document.getElementById("computer_score");
  let firstValue = parseInt(p1.innerText);
  let secondValue = parseInt(p2.innerText);
  if (firstValue==5){
      PlayerWin();
      p1.innerText = "0";
      p2.innerText = "0";
  } 
  else if (secondValue==5){
      ComputerWin();
      p1.innerText = "0";
      p2.innerText = "0";
  }
}
