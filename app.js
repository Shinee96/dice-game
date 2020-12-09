// Toglogchiin eelj xadgalax xuwisagch, 1-r toglogch 0, 2-r toglogchiig 1 geye
var activePlayer = 0;
// Toglogchiin onoo tsugluulax xuwisagch
var scores = [0, 0];
// Tsugluulsan shoo xayax eeljindee tsugluulsan onoog xadgalax xuwisag
var roundScore = 0;

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
    switchToNextPlayer();
  }
});

// HOLD towchnii event listener
document.querySelector(".btn-hold").addEventListener("click", function () {
  // Ug toglogchiin tsugluulsan onoog undsen onoo deer ni nemex
  scores[activePlayer] = scores[activePlayer] + roundScore;

  //   <div class="player-score" id="score-0">10</div>
  document.getElementById("score-" + activePlayer).textContent =
    scores[activePlayer];
  // Ug toglogchiin xojison esexiig shalgax
  if (scores[activePlayer] >= 20) {
    // Yalagchiin nernii orond WINNER gesen bicheg gargax
    document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.add("winner");
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.remove("active");
  } else {
    switchToNextPlayer();
  }
});

// Ene function ni toglox eeljiig daraagiin toglogchruu shiljuulex
function switchToNextPlayer() {
  //  Toglogchiin shoo 1 buusan tul tsugluulsan toog ni 0 bolgono
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;

  // 1 buuwal daraagiin toglogchruugaa shoog shiljuulj tsugluulsan toonuudig ustgax
  // xerew idewxitei toglogch 0 bwal 1 bolgoj, 1 baiwal 0 bolgox
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  // Ulaan tseg shiljuulex code
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  // Shoog tur alga bolgox
  diceDom.style.display = "none";
}
