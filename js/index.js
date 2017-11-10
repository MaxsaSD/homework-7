let correctInput = false;
let nf = 0;
while(!correctInput){
  nf = Number(prompt('Insert your number (integer only):'));
  if (!isNaN(nf) && nf !== 0){
    correctInput = true;
  }
}

const b = numberFibonacchi(nf);
const c = numberFibonacchi2(nf);
const ar = tableFibonacchi(nf);
showValue(nf,b,c,ar);


function numberFibonacchi(nf){
    if (nf <= 2) return 1;      
    return numberFibonacchi(nf-2) + numberFibonacchi(nf-1);
}

function numberFibonacchi2(nf){
  if (nf <= 2) return 1;
  let n1 = 1;
  let n2 = 1;
  let sn = 0;
  for (let i = 2; i < nf; i++){
    sn = n1 + n2;
    n1 = n2;
    n2 = sn;
  }
  return sn;
}

function tableFibonacchi(nf){
  let fin = 70;
  let n1 = 1;
  let n2 = 1;
  let sn = 0;
  let af = [];
  //if (nf > 70){fin = nf;} else {fin = 70;}
  for (let i = 1; i <= fin; i++){
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

/*------------------------------------------
Functions responsible for displaying content
------------------------------------------*/
function showValue(a,b,c,ar){
  document.write('<h3>Your Fibonacchi Number is '+ a +'</h3>');
  document.write('<div class="grid">');
  document.write('<div class="cell1">');
  document.write('<h1>' + b + '</h1>');
  document.write('</div>');
  document.write('<div class="cell2">');
  document.write('<h1>' + c + '</h1>');
  document.write('</div>');
  showTableFibonacchi(tableFibonacchi(nf));
  document.write('</div');
}

function showTableFibonacchi(anf){
  document.write('<div class="cell3"><table>');
  for (let i=1; i<=70;i++){
    if (i ===  1 || i === 11 || i === 21 || i === 31 || i === 41 || i === 51 || i === 61 ){
      document.write('<tr>');
    }
    if (i === nf){
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


