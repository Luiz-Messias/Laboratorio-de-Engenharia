function calcularFatorialBigInt(n) {
  let fatorial = BigInt(1);
  for (let i = BigInt(2); i <= n; i++) {
    fatorial *= i;
  }
  return fatorial;
}

var numero = Number(prompt("Digite um número inteiro positivo: "));

if (numero >= 0 && Number.isInteger(numero)) {
  let resultado = calcularFatorialBigInt(BigInt(numero));
  alert(`O fatorial de ${numero} é: ${resultado}`);
} else {
  alert("Por favor, digite um número inteiro positivo válido.");
}
