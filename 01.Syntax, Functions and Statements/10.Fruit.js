function solve(fruit, weight, price){

    weight= weight / 1000;
    let money = Number(weight) * Number(price);

    console.log(`I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`)


}

solve('apple', 1563, 2.35);