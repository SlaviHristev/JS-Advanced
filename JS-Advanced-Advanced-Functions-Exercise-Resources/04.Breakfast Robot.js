function solution() {
    let stock = {
      protein: 0,
      carbohydrate: 0,
      fat: 0,
      flavour: 0
    };
  
    const recipes = {
      apple: { carbohydrate: 1, flavour: 2 },
      lemonade: { carbohydrate: 10, flavour: 20 },
      burger: { carbohydrate: 5, fat: 7, flavour: 3 },
      eggs: { protein: 5, fat: 1, flavour: 1 },
      turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    };
  
    function restock(microelement, quantity) {
      stock[microelement] += Number(quantity); 
      return 'Success';
    }
  
    function prepare(recipe, quantity) {
      const ingredients = recipes[recipe];
      for (let microelement in ingredients) {
        if (stock[microelement] < ingredients[microelement] * Number(quantity)) {
          return `Error: not enough ${microelement} in stock`;
        }
      }
  
      for (let microelement in ingredients) {
        stock[microelement] -= ingredients[microelement] * Number(quantity);
      }
  
      return 'Success';
    }
  
    function report() {
      return `protein=${stock.protein} carbohydrate=${stock.carbohydrate} fat=${stock.fat} flavour=${stock.flavour}`;
    }
  
    return function (instruction) {
      const [command, microelement, quantity] = instruction.split(' '); 
      if (command === 'restock') {
        return restock(microelement, quantity);
      } else if (command === 'prepare') {
        return prepare(microelement, quantity);
      } else if (command === 'report') {
        return report();
      }
    };
  }
  let manager = solution ();
  console.log( manager("restock flavour 50"))

  console.log( manager("prepare lemonade 4"))
  
  console.log( manager('restock carbohydrate 10'))
  
  console.log( manager('restock flavour 10'))

  console.log(manager('prepare apple 1')) 
  console.log(manager('restock fat 10')) 
  console.log(manager('prepare burger 1')) 
  console.log(manager('report'))