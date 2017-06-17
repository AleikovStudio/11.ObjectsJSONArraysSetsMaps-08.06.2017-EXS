function printTable(JSONarr) {

    let html = '<table>\n';
    for (let json of JSONarr) {
        let arr = JSON.parse(json);
        html += '	<tr>\n';
        let name = arr.name;
        html += `		<td>${name}</td>\n`;
        let position = arr.position;
        html += `		<td>${position}</td>\n`;
        let salary = arr.salary;
        html += `		<td>${salary}</td>\n`;
        html += '	<tr>\n';
    }

    html += '</table>\n';
    console.log(html);
}
printTable('[{"name":"Pesho","position":"Promenliva","salary":100000},{"name":"Teo","position":"Lecturer","salary":1000},{"name":"Georgi","position":"Lecturer","salary":1000}]');