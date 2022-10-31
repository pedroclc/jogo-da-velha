// Criar classe "Jogo da velha"
class jogoDaVelha {
  constructor() {
    this.player1 = "";
    this.player2 = "";
    this.bola = "./img/bola.jpg";
    this.bola = "./img/x.jpg";
    this.count = 0;
    this.arrGameStatus = [
      [undefined, undefined, undefined],
      [undefined, undefined, undefined],
      [undefined, undefined, undefined],
    ];
  }
}

// Método para iniciar jogo
// Quem começa jogando? Sempre o usuário, sempre o computador, ou alterna (ou escolhe um aleatoriamente)?

// Método para testar se o jogo acabou e, se for o caso, finalizar (dizer quem ganhou, ou se deu empate)
// O jogo pode acabar de 2 maneiras: se alguém ganhar, ou quando todas as 9 casas são preenchidas sem um vencedor
//Rodar esse método depois de todas as jogadas

// Método para o computador jogar
// Encontra todas as casas vazias, e o computador joga aleatoriamente em uma delas (se der tempo, pensar em uma solução melhor)
