function solve(n) {
    let star = '* ';

    if (n !== undefined) {
        for (let i = 0; i < n; i++) {
            console.log(star.repeat(n));
        }
    } else {
        for (let i = 0; i < 5; i++) {
            console.log(star.repeat(5));
        }
    }

}

solve(3);
