function digitFibonacchi(n){
  if ( n == 0 ) return 0;
 
  if (n == 1) return 1;
  return digitFibonacchi(n-2) + digitFibonacchi(n-1);
}
console.log(digitFibonacchi(10));