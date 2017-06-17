function solve(dataRows) {
    let initialsMap = new Map();
    for (let dataRow of dataRows) {
        let [productsName,productsPrice]=dataRow.split(/\s:\s/g);
        let initial = productsName[0];
        if (!initialsMap.has(initial)) {
            initialsMap.set(initial, new Map());
        }
        let productsMap = initialsMap.get(initial);
        productsMap.set(productsName, productsPrice);
    }

    let sortedInitials = [...initialsMap].sort();

    for (let [initial,productsMap] of sortedInitials) {
        console.log(initial);
        let sortedProducts = [...productsMap].sort();
        for (let [name,price] of sortedProducts) {
            console.log(`  ${name}: ${price}`);
        }
    }

    // function sortAlphabetically(a,b) {
    //     return a[0].localeCompare(b[0]);  //a[0] klucha
    // }
}

solve([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'

]);