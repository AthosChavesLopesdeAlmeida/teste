function reverseString(str) {
  let rev = str.split('');
  let final = [];
  let l = rev.length;

  while (l >= 0) {
    final.push(rev[l]);
    l--;
  }

  final = final.join('');
  console.log(final);
}

reverseString('Athos')