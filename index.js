

let leia = require('readline-sync'); // Adicionei esta linha para importar o módulo readline-sync


let escolha = parseInt(leia.question('\n"Escolha uma opção: 1. Para reproduzir a música completa, 2. Para reproduzir apenas a primeira parte, 3. Para reproduzir apenas a segunda parte, ou 0. Para sair: "\n'));

//fiz um menu para deixar o código interativo e fácil de ler


function playOp1(erguei, delay) {
    let i = 0;
    let intervalId = setInterval(function() {
        if(i < erguei.length) {
            console.log(erguei[i]);
            i++;
        } else {
            clearInterval(intervalId);
        }
    }, delay * 1000);
}
//nessa função criei o decorrer da música e o delay para o tempo de espera entre as letras;

if(escolha == 1){

  let animal1 = leia.question("Participe, escreva o nome de um animal: ");
  let animal2 = leia.question("Participe, escreva o nome de um animal no plural: ");
  let partCorpo = leia.question("Participe, escreva uma parte do corpo: ");

    let erguei = [
        "Erguei as mãos e dai glória a Deus!",
        "Erguei as mãos e dai glória a Deus!",
        "Erguei as mãos",
        "E cantai como os filhos do Senhor",
        "Os animaizinhos subiram de dois em dois",
        "Os animaizinhos subiram de dois em dois",
        "O "+animal1,
        "E os "+ animal2+", como os filhos do Senhor",
        "O senhor tem muitos filhos",
        "Muitos filhos ele tem",
        "Eu sou um deles, você também",
      "Louvemos ao senhor, " + partCorpo+" !"
    ];
    let delay = 2; 

    for (let i = 0; i < 1; i++) {
        for (let j = 0; j < 1; j++) {
            console.log(`Reprodução ${i+1}, opção ${j+1}`);
            playOp1(erguei, delay);
        }
    }
} else if(escolha == 2){

  let animal1 = leia.question("Participe, escreva o nome de um animal: ");
  let animal2 = leia.question("Participe, escreva o nome de um animal no plural: ");


    function playOp2(part1, delay) {
        let i = 0;
        let intervalId = setInterval(function() {
            if(i < part1.length) {
                console.log(part1[i]);
                i++;
            } else {
                clearInterval(intervalId);
            }
        }, delay * 1000);
    }


    let part1 = [
        "Erguei as mãos e dai glória a Deus!",
        "Erguei as mãos e dai glória a Deus!",
        "Erguei as mãos",
        "E cantai como os filhos do Senhor",
        "Os animaizinhos subiram de dois em dois",
        "Os animaizinhos subiram de dois em dois",
        "O "+animal1,
        "E os "+ animal2+", como os filhos do Senhor",
    ];
  let delay = 2;

  for (let i = 0; i < 1; i++) {
      for (let j = 0; j < 1; j++) {
          console.log(`Reprodução ${i+1}, linha ${j+1}`);
          playOp2(part1, delay);
      }
  }

} else if(escolha == 3){
  let partCorpo = leia.question("Participe, escreva uma parte do corpo: ");
  function playOp3(part2, delay) {
      let i = 0;
      let intervalId = setInterval(function() {
          if(i < part2.length) {
              console.log(part2[i]);
              i++;
          } else {
              clearInterval(intervalId);
          }
      }, delay * 1000);
  }


  let part2=[
  "O senhor tem muitos filhos",
      "Muitos filhos ele tem",
      "Eu sou um deles, você também",
      "Louvemos ao senhor, " + partCorpo+" !"
  ];
  let delay = 2; 

  for (let i = 0; i < 1; i++) {
      for (let j = 0; j < 1; j++) {
          console.log(`Reprodução ${i+1}, Linha ${j+1}`);
          playOp3(part2, delay);
      }};
} else if (escolha == 0) { console.log('Saindo...'); process.exit();
} else { console.log("Opção inválida. Tente novamente."); }
