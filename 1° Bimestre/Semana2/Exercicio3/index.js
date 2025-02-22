function verificarPalindromo() {
  let texto = prompt("Digite o texto para verificar se é um palíndromo:");
  let textoLimpo = texto.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  let textoReverso = textoLimpo.split("").reverse().join("");
  if (textoLimpo === textoReverso) {
    alert("O texto é um palíndromo!");
  } else {
    alert("O texto não é um palíndromo.");
  }
}

verificarPalindromo();
