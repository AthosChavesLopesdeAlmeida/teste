const calc = {
  
  soma: function  (a, b) {
    a = Number(a);
    b = Number(b);
    
    return a + b;
  },
  
  sub: function (a, b) {
    a = Number(a);
    b = Number(b);
    
    return a - b;
  },
  
  div: function (a, b) {
    a = Number(a);
    b = Number(b);
    
    return a / b;
  },
  
  mult: function (a, b) {
    a = Number(a);
    b = Number(b);
    
    return a * b;
  }
}

console.log(calc.sub(1,2));
console.log(calc.soma(1,2));
console.log(calc.div(1,2));
console.log(calc.mult(1,2));