var numeroSecreto = parseInt(Math.random() * 11);
var contador = 0;

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);

  if (contador < 3) {
    contador++;

    if (chute == numeroSecreto) {
      elementoResultado.innerHTML = "PARABÊNSSS, você acertou!";
    } else if (chute > 10 || chute < 0) {
      elementoResultado.innerHTML =
        "Número inválido. Você deve digitar um número entre 0 e 10";
    } else if (chute < numeroSecreto) {
      elementoResultado.innerHTML =
        "A dica é: o número secreto é maior. Tente novamente!";
    } else if (chute > numeroSecreto) {
      elementoResultado.innerHTML =
        "A dica é: o número secreto é menor. Tente novamente!";
    }
  } else
    elementoResultado.innerHTML = `Tentativas esgotadas. O número secreto é ${numeroSecreto}`;
}
