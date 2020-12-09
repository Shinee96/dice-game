// Toglogchiin eelj xadgalax xuwisagch, 1-r toglogch 0, 2-r toglogchiig 1 geye
var activePlayer = 0;
// Toglogchiin onoo tsugluulax xuwisagch
var scores = [0, 0];
// Tsugluulsan shoo xayax eeljindee tsugluulsan onoog xadgalax xuwisag
var roundScore = 0;
// Shoonii ali talaaraa buussaniig xadgalax xuwisagch mon 1-6 toonii sanamsargvi utga uusgene
var diceNumber = Math.floor(Math.random() * 6) + 1;

// <div class="player-score" id="score-0">10</div>
// window.document.querySelector("#score-0").textContent = dice;
// <div class="player-score" id="score-1">10</div>
// document.querySelector("#score-1").textContent = dice;
//<img src="dice-5.png" alt="Dice" class="dice" />

//Programaa exlexed yamar baixiig beldey

// <div class="player-score" id="score-0">10</div>
document.getElementById("score-0").textContent = 0;
// <div class="player-score" id="score-1">10</div>
document.getElementById("score-1").textContent = 0;

//<div class="player-current-score" id="current-0">10</div>
document.getElementById("current-0").textContent = 0;
//<div class="player-current-score" id="current-1">10</div>
document.getElementById("current-1").textContent = 0;

var dicDom = document.querySelector(".dice");
dicDom.style.display = "none";
document.querySelector(".btn-roll").addEventListener("click", function () {
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  dicDom.style.display = "block";

  dicDom.src = "dice-" + diceNumber + ".png";
});
