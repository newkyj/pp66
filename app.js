let round = prompt("how many round ?");
for (var i = 1; i <= round; i++) {
  var answer = prompt("h or t ?");
  var random_answer = "";
  var sum = 0;
  if (Math.floor(Math.random() * 10) <= 4) {
    random_answer = "h";
  } else {
    random_answer = "t";
  }

  if (answer == random_answer) {
    alert("correct");
    sum++;
  } else {
    alert("incorrect");
    sum++;
  }

  document.getElementById("game-list").innerHTML =
    "you play " + round + " round";
  document.getElementById("game-a").innerHTML +=
    "round " +
    i +
    " answer is " +
    answer +
    " The Correct is a " +
    random_answer +
    "<br>";
}
document.getElementById("game-sum").innerHTML = "You got Score : " + sum;
console.log(sum);
