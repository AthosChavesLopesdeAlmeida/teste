const alph = [
  'a', 'b', 'c', 'd,', 'e',
  'f', 'g', 'h', 'i', 'j',
  'k', 'l', 'm', 'n', 'o',
  'p', 'q', 'r', 's', 't',
  'u', 'v', 'w', 'x', 'y', 'z'
]



/* str.forEach(el = > {
  str.[i] = str[i + alph[num]]
}) */





function caesar(str, num) {
  // Condições básicas para o código
  if (num > 25 || num < 0) return null;

  // Variáveis
  let divide = str.split('');
  let enc = [];

  // Lógica
  divide.forEach(i => {
    divide[i] = alph[divide[i] + [num]]
  });
}