function solve(input){
    let x1 = input[0];
    let y1 = input[1];
    let x2 = input[2];
    let y2 = input[3];

    let sideA = Math.abs(x1-0);
    let sideB = Math.abs(y1-0);

    let sideC = Math.sqrt(sideA * sideA + sideB * sideB);

    if (Number.isInteger(sideC) ){

        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {

        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    sideA = Math.abs(0-x2);
    sideB = Math.abs(0-y2);

    sideC = Math.sqrt(sideA * sideA + sideB * sideB);

    if (Number.isInteger(sideC) ){

        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {

        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    sideA = Math.abs(x1-x2);
    sideB = Math.abs(y1-y2);

    sideC = Math.sqrt(sideA * sideA + sideB * sideB);

    if (Number.isInteger(sideC) ){

        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {

        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }

}

solve([3, 0, 0, 4]);