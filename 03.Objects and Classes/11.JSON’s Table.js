function solve(input) {
    let html = '<table>\n'

    for (let inputEl of input) {
        let data = JSON.parse(inputEl)
        html += '  <tr>\n'
        html += '     <td>' + data.name + '</td>\n'
        html += '     <td>' + data.position + '</td>\n'
        html += '     <td>' + data.salary + '</td>\n'
        html += '  <tr>\n'

    }
    html += '</table>'

    console.log(html)

}

solve(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}']
)