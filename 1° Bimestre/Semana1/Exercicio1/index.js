var numero = Number(prompt("Digite um número: "));

if (numero > 0) {
  if (numero % 2 == 0) {
    alert("O número é par.");
  } else {
    alert("O número é ímpar.");
  }
} else {
  alert("O número é negativo.");
}
