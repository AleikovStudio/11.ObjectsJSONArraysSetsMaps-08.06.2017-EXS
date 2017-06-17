function system(array) {
    let map = new Map();
    for (let arr of array) {
        [systemName, componentName, subcomponentName] = arr.split(' \| ');

        if (!map.has(systemName)) {
            map.set(systemName, new Map());
        }
        if (!map.get(systemName).has(componentName)) {
            map.get(systemName).set(componentName, []);
        }

        let current = map.get(systemName).get(componentName);
        current.push(subcomponentName);
        map.get(systemName).set(componentName, current);
    }

    [...map].sort(function (a, b) {
        let a2 = a[0];
        let b2 = b[0];
        let valuea2 = [...a[1]].length;
        let valueb2 = [...b[1]].length;


        if (valueb2 > valuea2) {
            return 1;
        } else if (valueb2 < valuea2) {
            return -1;
        } else if (a2 > b2) {
            return 1;
        } else if (a2 < b2) {
            return -1;
        }

        else return 0;
    }).forEach(([systemName, componentName])=> {
        console.log(systemName);

        [...componentName].sort(function (a, b) {
            let length = a[1].length;
            let length1 = b[1].length;
            return length1 - length;
        }).forEach(([k,v])=> {
            console.log(`|||` + k);
            for (let obj of v) {
                console.log(`||||||` + obj);
            }
        })
    });
}

system(
    ['SULS | Main Site | Home Page',
        'SULS | Main Site | Login Page',
        'SULS | Main Site | Register Page',
        'SULS | Judge Site | Login Page',
        'SULS | Judge Site | Submittion Page',
        'Lambda | CoreA | A23',
        'SULS | Digital Site | Login Page',
        'Lambda | CoreB | B24',
        'Lambda | CoreA | A24',
        'Lambda | CoreA | A25',
        'Lambda | CoreC | C4',
        'Indice | Session | Default Storage',
        'Indice | Session | Default Security']);