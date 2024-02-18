function orderStrings(arr) {
    arr.sort((a, b) => {
        if (a.length !== b.length) {
            return a.length - b.length;
        }
       
        return a.toLowerCase().localeCompare(b.toLowerCase());
    });

    
    arr.forEach(str => console.log(str));
}
orderStrings(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])