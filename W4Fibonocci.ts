function fibonacci(n: number): number[] {
    const sequence: number[] = [];


  
  let prev: number = 0; 
  let curr: number = 1; 

  
   for (let i = 0; i <= n; i++) {
    if (i === 0) {
      sequence.push(0);
    } else if (i === 1) {
      sequence.push(1);
    } else {
      const next = prev + curr;
      sequence.push(next);
      prev = curr;
      curr = next;
    }
  }


  return sequence; 
}

console.log(fibonacci(5)); 