function solve(input) {
    let biggestNum = Number.NEGATIVE_INFINITY;
    input.forEach(r => r.forEach( c => biggestNum = Math.max(biggestNum, c)));
    return biggestNum;

}

console.log(solve([[20, 50, 10],
    [8, 33, 145]]
));