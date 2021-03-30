function solve(obj) {
    if (obj.handsShaking) {
        obj.handsShaking = false;
        let newAlcoholLevel = obj.weight * obj.experience * 0.1
        obj.bloodAlcoholLevel += newAlcoholLevel
    }

    return obj
}

console.log(solve({
    weight: 80,
    experience: 1,
    bloodAlcoholLevel: 0,
    handsShaking: true
}))