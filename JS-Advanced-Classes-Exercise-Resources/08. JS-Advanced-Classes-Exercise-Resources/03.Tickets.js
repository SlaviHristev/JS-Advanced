function tickets(array, criteria){

    class Ticket{

        constructor(destination,price,status){
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    let result = [];

    
    array.map((el) => {
        let [destination, price , status] = el.split('|');
        price = Number(price);
        result.push(new Ticket(destination,price,status));
    });

    result.sort((a,b) =>{
        if(typeof a[criteria] === 'number'){
            return a[criteria] - b[criteria];
        }else{
            return a[criteria].localeCompare(b[criteria]);
        };
    });
    return result;

};