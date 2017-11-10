let correctInput = false;
let numF = 0;
while(!correctInput){
  numF = Number(prompt('Insert your number (integer only):'));
  if (!isNaN(numF) && numF !== 0){
    correctInput = true;
  }
}

const numF1 = numberFibonacchi(numF);
const numF2 = numberFibonacchi2(numF);
const arrF  = arrFibonacchi(numF);
showValue(numF, numF1, numF2, arrF);

function numberFibonacchi(numF){
    if (numF <= 2) return 1;      
    return numberFibonacchi(numF-2) + numberFibonacchi(numF-1);
}

function numberFibonacchi2(numF){
  if (numF <= 2) return 1;
  let n1 = 1;
  let n2 = 1;
  let sn = 0;
  for (let i = 2; i < numF; i++){
    sn = n1 + n2;
    n1 = n2;
    n2 = sn;
  }
  return sn;
}

function arrFibonacchi(numF){
  let columns = 70;
  let n1 = 1;
  let n2 = 1;
  let sn = 0;
  let af = [];
  for (let i = 1; i <= columns; i++){
    if (i===1 || i===2){
      sn = 1;
    }else{
      sn  = n1 + n2;
      n1 = n2;
      n2 = sn;
    }
    af[i] = sn;          
  }
  return af;
} 






function showValue(a,b,c,ar){
  document.write('<h4>Your Fibonacchi Number is '+ a +'</h4>');
  document.write('<div class="grid">');
  document.write('<div class="cell1">');
  document.write('<h1>' + b + '</h1>');
  document.write('</div>');
  document.write('<div class="cell2">');
  document.write('<h1>' + c + '</h1>');
  document.write('</div>');
  showTableFibonacchi(arrFibonacchi(numF));
  document.write('</div');
}

function showTableFibonacchi(anf){
  document.write('<div class="cell3"><table>');
  for (let i=1; i<=70;i++){
    if (i ===  1 || i === 11 || i === 21 || i === 31 || i === 41 || i === 51 || i === 61 ){
      document.write('<tr>');
    }
    if (i === numF){
      document.write('<td class="nf">');  
    }else{
      document.write('<td>');  
    }
    document.write(anf[i]);
    document.write('</td>');  
    if (i === 10 || i === 20 || i === 30 || i === 40 || i === 50 || i === 60 || i === 70 ){
      document.write('</tr>');
    }
  }
  document.write('</table></div>');
}


