const alph = [
  'a', 'b', 'c', 'd', 'e',
  'f', 'g', 'h', 'i', 'j',
  'k', 'l', 'm', 'n', 'o',
  'p', 'q', 'r', 's', 't',
  'u', 'v', 'w', 'x', 'y', 'z'
]


function caesar(str, num) {
  if (num > 25 || num < 0) return null;

  str = str.split('');
  let i = 0;

  while (i < str.length) {
    let ind = alph.indexOf(str[i]);
    
    if (ind !== -1) {
      let newInd = (ind + num) % 26;
      str[i] = alph[newInd];

    } 

    i++;
  }

  
  return str.join('');
}

console.log(caesar('julius caesar', 3));