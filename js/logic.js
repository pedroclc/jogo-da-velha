// Criar classe "Jogo da velha"
class JogoDaVelha {
  constructor() {
    this.player1 = "";
    this.player2 = "";
    this.count = 0;
    this.images = ["./img/x.jpg", "./img/bola.jpg", "./img/branco.png"];
    this.arrGameStatus = [
      [undefined, undefined, undefined],
      [undefined, undefined, undefined],
      [undefined, undefined, undefined],
    ];
    this.arrVetor = ["00", "01", "02", "10", "11", "12", "20", "21", "22"];
  }

  realizarJogada(jogador, posicao) {
    if (jogador === 0) {
      this.arrGameStatus[Number(this.arrVetor[posicao][0])][
        Number(this.arrVetor[posicao][1])
      ] = 1;
      //console.log("jogador 1");
    } else {
      this.arrGameStatus[Number(this.arrVetor[posicao][0])][
        Number(this.arrVetor[posicao][1])
      ] = 2;
      //console.log("jogador 2");
    }
    //console.log(this.arrGameStatus);
  }

  verificarVencedor(){
    for (let i=0; i<=2; i++){
      if (this.arrGameStatus[])
      for (let j=0; j<=2)
    }
  }

  fimDoJogo() {
    if (this.count === 9) {
      alert("Fim do jogo - Não houve vencecedor!");
      let resposta = confirm("Deseja iniciar uma nova partida?");
      if (resposta === "Ok") {
        alert("Jogar novamente!");
      } else {
        alert("Finalizar.");
      }
    }
  }
}

// Método para iniciar jogo
// Quem começa jogando? Sempre o usuário, sempre o computador, ou alterna (ou escolhe um aleatoriamente)?

// Método para testar se o jogo acabou e, se for o caso, finalizar (dizer quem ganhou, ou se deu empate)
// O jogo pode acabar de 2 maneiras: se alguém ganhar, ou quando todas as 9 casas são preenchidas sem um vencedor
//Rodar esse método depois de todas as jogadas

// Método para o computador jogar
// Encontra todas as casas vazias, e o computador joga aleatoriamente em uma delas (se der tempo, pensar em uma solução melhor)
