function analyzeArray(arr) {
  let average = 0;
  let soma = 0;

  for (let i = 0; i < arr.length; i++) {
    soma += arr[i];
  }
  average = soma / arr.length;
  
  let min = Math.min(...arr)
  let max = Math.max(...arr);
  let length = arr.length;

  return object = {
    av: average,
    mi: min,
    ma: max,
    le: length
  };
}

console.log(analyzeArray([0,1,2,3,4]));