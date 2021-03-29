function solve(input) {
    // let max = Number.MIN_SAFE_INTEGER;
    //
    // // input.forEach(num => {
    // //     if (num > max){
    // //         max = num;
    // //         console.log(max);
    // //     }
    // // })

    input.reduce((acc, curr) => {
        if (acc <= curr) {
            acc = curr;
            console.log(acc);
        }
        return acc;
    }, 0);
}

solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);