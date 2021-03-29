function solve(str1, str2, str3) {
    let sumLength;
    let averageLength;

    let firstArg = str1.length;
    let secondArg = str2.length;
    let thirdArg = str3.length;

    sumLength = firstArg + secondArg + thirdArg;
    averageLength = Math.floor(sumLength / 3);

    console.log(sumLength);
    console.log(averageLength);

}

solve('chocolate', 'ice cream', 'cake');