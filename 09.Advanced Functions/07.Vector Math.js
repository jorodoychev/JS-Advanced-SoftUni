let solve = (function () {
    const add = ([xA, xB], [yA, yB]) => {
        return [xA + yA, xB + yB]
    }

    const multiply = ([xA, xB], s) => {
        return [xA * s, xB * s]
    }

    const length = ([xA, xB]) => {
        return Math.sqrt(xA * xA + xB * xB)
    }

    const dot = ([xA, xB], [yA, yB]) => {
        return xA * yA + xB * yB
    }

    const cross = ([xA, xB], [yA, yB]) => {
        return xA * yB - xB * yA
    }

    return {
        add,
        multiply,
        length,
        dot,
        cross
    }
})()

console.log(solve.add([1, 1], [1, 0]));