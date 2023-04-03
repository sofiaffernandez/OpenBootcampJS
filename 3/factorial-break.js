let result = 1;
let i = 1;

while(true) {
  result *= i;
  
  if(i === 10) {
    break;
  }
  
  i++;
}

console.log(result);
