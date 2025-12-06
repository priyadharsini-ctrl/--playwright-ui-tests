function fibonacci(n) {
    var sequence = [];
    var prev = 0;
    var curr = 1;
    for (var i = 0; i <= n; i++) {
        if (i === 0) {
            sequence.push(0);
        }
        else if (i === 1) {
            sequence.push(1);
        }
        else {
            var next = prev + curr;
            sequence.push(next);
            prev = curr;
            curr = next;
        }
    }
    return sequence;
}
console.log(fibonacci(5));
