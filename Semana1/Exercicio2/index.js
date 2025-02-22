var numero = Number(prompt("Digite um número inteiro positivo: "));

if (numero > 1 && Number.isInteger(numero)) {
  let numeroPrimo = true;

  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      numeroPrimo = false;
      break;
    }
  }

  if (numeroPrimo) {
    alert("O número é primo.");
  } else {
    alert("O número não é primo.");
  }
} else {
  alert("Insira um número inteiro positivo maior que 1.");
}
