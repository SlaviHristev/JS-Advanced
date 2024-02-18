function townsToJSON(input) {
    const columns = input[0].split('|').map(col => col.trim()).filter(col => col !== '');
    input = input.slice(1);

    let result = [];

    for (const row of input) {
        const values = row.split('|').map(val => val.trim()).filter(val => val !== '');

        if (values.length === columns.length) {
            const townObject = {
                [columns[0]]: values[0],
                [columns[1]]: Number(Number(values[1]).toFixed(2)),
                [columns[2]]: Number(Number(values[2]).toFixed(2))
            };

            result.push(townObject);
        }
    }

    console.log(JSON.stringify(result, 2));
}

// Example usage
townsToJSON([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
]);