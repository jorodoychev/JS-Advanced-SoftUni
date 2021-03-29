function solve(input) {
    if (input.length === 1) {
        return console.log(Number(input) * 2);
    }
    let firstEl = Number(input.shift());
    let lastEl = Number(input.pop());
    let sum = firstEl + lastEl;
    console.log(sum);
}

solve(['20', '30', '40']);
solve(['5']);