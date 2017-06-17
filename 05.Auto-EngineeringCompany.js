function autoCompany(array) {
    let map = new Map();
    for (let arr of array) {
        [carBrand,carModel,number]=arr.split(' \| ');
        number = Number(number);

        if (!map.has(carBrand)) {
            map.set(carBrand, new Map());
        }
        if (!map.get(carBrand).has(carModel)) {
            map.get(carBrand).set(carModel, 0);
        }
        let oldSum = map.get(carBrand).get(carModel);
        map.get(carBrand).set(carModel, oldSum + number);

    }


    for (let [carBrand,carModels] of map) {
        console.log(carBrand);
        for (let [carModel,number] of carModels) {
            console.log(`###${carModel} -> ${number}`);
        }
    }
}

autoCompany([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
]);