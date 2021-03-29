function solve(num1, num2, num3) {
    let result;
    if (num1 > num2 && num1 > num3) {
        result = num1;
    } else if (num2 > num3 && num2 > num1) {
        result = num2;
    } else {
        result = num3;
    }
    console.log(`The largest number is ${result}.`);
}

solve(1, 5, 10);

function secondSolution(...params) {
    return `The largest number is ${Math.max(...params)}.`;
}

