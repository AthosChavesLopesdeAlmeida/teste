function capitalize(frase) {
  let palavra = frase.split('');
  
  palavra[0] = palavra[0].toUpperCase();
  palavra = palavra.join('');
  console.log(palavra);
}


capitalize('athos');