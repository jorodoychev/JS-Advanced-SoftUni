function solve(input) {

    let output = [];

    for (let i = 0; i < input.length; i++) {

        if (input[i] >= 0){
            output.push(input[i]);
        } else {
            output.unshift(input[i]);
        }

    }

    console.log(output.join('\n'));
}

solve([7, -2, 8, 9]);