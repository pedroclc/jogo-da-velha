const match = new jogoDaVelha();

const startScreen = document.getElementById("startScreen");
const inputName1 = document.querySelector("#inputName1");
const inputName2 = document.querySelector("#inputName2");
const btnStart = document.getElementById("btnStart");
const gameScreen = document.querySelector("#gameScreen");
const gamePlayer1 = document.getElementById("name1");
const gamePlayer2 = document.getElementById("name2");
const nextPlay = document.getElementById("nextPlay");

btnStart.addEventListener("click", (event) => {
  // se a função está recarregando a página use:
  event.preventDefault();

  if (inputName1.value === "" || inputName2.value === "") {
    alert("Digite os nomes dos jogadores para iniciar a jogada.");
    return;
  }

  startScreen.style.display = "none";
  gameScreen.style.display = "flex";

  match.player1 = inputName1.value;
  gamePlayer1.innerText = match.player1;
  match.player2 = inputName2.value;
  gamePlayer2.innerText = match.player2;
  nextPlay.innerText = match.player1;
});

// inicio da partida
