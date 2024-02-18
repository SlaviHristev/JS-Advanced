function cookingByNumbers(num,c1,c2,c3,c4,c5){
    let number = Number(num);
    let commands = [c1,c2,c3,c4,c5]

    for(let i = 0; i < commands.length; i++){
        let curCommand = commands[i];
        
        if(curCommand === 'chop'){
            number = number / 2;
            console.log(number);
        }else if(curCommand === 'dice'){
            number = Math.sqrt(number);
            console.log(number);
        }else if(curCommand === 'spice'){
            number += 1;
            console.log(number);
        }else if(curCommand === 'bake'){
            number *= 3;
            console.log(number);
        }else if(curCommand === 'fillet'){
            number = number * 0.80;
            console.log(number.toFixed(1));
        }
    }

}
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake',

'fillet')