function calorieObject(elements){

    let result = {};
    for (let i = 0; i < elements.length; i+=2 ){

        result[elements[i]] = parseInt(elements[i+1]);

    }

    return console.log(result);

}


calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);