function fibonacci(num) {
    let a = 1, b = 0, temp;
    const result = [];
  
    while (num > 0){
      temp = a;
      a = a + b;
      b = temp;
      result.push(b);
      num--;
    }
  
    return result;
  }
  
  console.log(fibonacci(6));
  