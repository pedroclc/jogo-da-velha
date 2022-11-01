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
    } else {
      this.arrGameStatus[Number(this.arrVetor[posicao][0])][
        Number(this.arrVetor[posicao][1])
      ] = 2;
    }
  }

  verificarVencedor() {
    for (let i = 0; i <= 2; i++) {
      if (
        this.arrGameStatus[i][0] === 1 &&
        this.arrGameStatus[i][1] === 1 &&
        this.arrGameStatus[i][2] === 1
      ) {
        //alert("O jogador 1 venceu A");
        return 1;
      } else if (
        this.arrGameStatus[i][0] === 2 &&
        this.arrGameStatus[i][1] === 2 &&
        this.arrGameStatus[i][2] === 2
      ) {
        //alert("O jogador 2 venceu A");
        return 2;
      } else if (
        this.arrGameStatus[0][i] === 1 &&
        this.arrGameStatus[1][i] === 1 &&
        this.arrGameStatus[2][i] === 1
      ) {
        //alert("O jogador 1 venceu");
        return 1;
      } else if (
        this.arrGameStatus[0][i] === 2 &&
        this.arrGameStatus[1][i] === 2 &&
        this.arrGameStatus[2][i] === 2
      ) {
        //alert("O jogador 2 venceu");
        return 2;
      }
    }
    if (
      this.arrGameStatus[0][0] === 1 &&
      this.arrGameStatus[1][1] === 1 &&
      this.arrGameStatus[2][2] === 1
    ) {
      //alert("O jogador 1 venceu");
      return 1;
    } else if (
      this.arrGameStatus[0][0] === 2 &&
      this.arrGameStatus[1][1] === 2 &&
      this.arrGameStatus[2][2] === 2
    ) {
      //alert("O jogador 2 venceu");
      return 2;
    }
    if (
      this.arrGameStatus[0][2] === 1 &&
      this.arrGameStatus[1][1] === 1 &&
      this.arrGameStatus[2][0] === 1
    ) {
      //alert("O jogador 1 venceu");
      return 1;
    } else if (
      this.arrGameStatus[0][2] === 2 &&
      this.arrGameStatus[1][1] === 2 &&
      this.arrGameStatus[2][0] === 2
    ) {
      //alert("O jogador 2 venceu");
      return 2;
    }
  }

  fimDoJogo() {
    const temVencedor = this.verificarVencedor();
    if (temVencedor === 1) {
      alert(`O jogador ${this.player1} venceu`);
      let jogarNovamente = confirm("Deseja jogar novamente?");
      if (jogarNovamente === true) {
        window.location.reload();
      } else {
        alert("Jogo encerrrado");
      }
    } else if (temVencedor === 2) {
      alert(`O jogador ${this.player2} venceu`);
      let jogarNovamente = confirm("Deseja jogar novamente?");
      if (jogarNovamente === true) {
        window.location.reload();
      } else {
        alert("Jogo encerrrado");
      }
    } else if (this.count === 9) {
      alert("Fim do jogo - Não houve vencecedor!");
      let jogarNovamente = confirm("Deseja jogar novamente?");

      if (jogarNovamente === true) {
        window.location.reload();
      } else {
        alert("Jogo encerrrado");
      }
    }
  }
}
