function heroicInventory(array){
    let newArr = [];
    let newObj ={};

    array.forEach(line => {
        let [name, level, items] = line.split(' / ');
        items = items ? items.split(', ') : [];
        newObj = {name, level : Number(level), items};
        newArr.push(newObj)
        
    });

    let myJson = JSON.stringify(newArr);
    console.log(myJson);

}
heroicInventory(['Isacc / 25 / Apple, GravityGun',

'Derek / 12 / BarrelVest, DestructionSword',

'Hes / 1 / Desolator, Sentinel, Antara']);