function cityMarkets(input) {
    let map = new Map();

    for (let line of input) {
        let townTokens = line.split(/\s+->\s+/);
        let town = townTokens[0];
        let product = townTokens[1];
        let income = townTokens[2].split(/\s+:\s+/).map(Number).reduce((a, b) => a * b);

        if (!map.has(town)) {
            map.set(town, new Map());
        }
        if (!map.get(town).has(product)) {
            map.get(town).set(product, 0);
        }
        map.get(town).set(product, map.get(town).get(product) + income);
    }

    for (let [town, product] of map) {
        console.log(`Town - ${town}`);

        for (let [product, income] of map.get(town)) {
            console.log(`$$$${product} : ${income}`);
        }
    }
}

cityMarkets(['Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3']
)