// Toglogchiin eelj xadgalax xuwisagch, 1-r toglogch 0, 2-r toglogchiig 1 geye
var activePlayer = 0;
// Toglogchiin onoo tsugluulax xuwisagch
var scores = [0, 0];
// Tsugluulsan shoo xayax eeljindee tsugluulsan onoog xadgalax xuwisag
var roundScore = 0;
// Shoonii ali talaaraa buussaniig xadgalax xuwisagch mon 1-6 toonii sanamsargvi utga uusgene
//var diceNumber = Math.floor(Math.random() * 6) + 1;

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

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

// Shoog shidex event listener
document.querySelector(".btn-roll").addEventListener("click", function () {
  // 1-6 xurtlex toog gargaj awax
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  // Shoonii zurgiig web deer gargax
  diceDom.style.display = "block";
  // Buusan sanamsargvi shoonii toogoor shoonii zurag gargax
  diceDom.src = "dice-" + diceNumber + ".png";
  // Buusan too ni 1-ees yalgaatai bol idewxitei toglogchiin eeljiin onoog nemegdelvvx
  if (diceNumber !== 1) {
    // 1-ees yalgaatai buuwal toglogchiin xayasan shoonii toonuudiig nemex
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    //  Toglogchiin shoo 1 buusan tul tsugluulsan toog ni 0 bolgono
    document.getElementById("current-" + activePlayer).textContent = 0;

    // 1 buuwal daraagiin toglogchruugaa shoog shiljuulj tsugluulsan toonuudig ustgax
    // xerew idewxitei toglogch 0 bwal 1 bolgoj, 1 baiwal 0 bolgox
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    // if (activePlayer === 0) {
    //   activePlayer = 1;
    // } else {
    //   activePlayer = 0;
    // }

    // Ulaan tseg shiljuulex code
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    // Shoog tur alga bolgox
    diceDom.style.display = "none";
  }
});
