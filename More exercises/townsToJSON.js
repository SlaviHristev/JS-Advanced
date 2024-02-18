function townsToJson(array){
    let firstLine = array.shift();
    let newArr = [];
    let obj = {};

    array.forEach(line => {
        let [Town, Latitude, Longitude ] = line.split(/\s*\|\s*/);
        Latitude = Number(Latitude).toFixed(2);
        Longitude = Number(Longitude).toFixed(2);
        obj = {Town, Latitude , Longitude};
        newArr.push(obj);
        
    });
    let myJson = JSON.stringify(newArr)
    console.log(myJson);

}
townsToJson(['| Town | Latitude | Longitude |',

'| Sofia | 42.696552 | 23.32601 |',

'| Beijing | 39.913818 | 116.363625 |'])