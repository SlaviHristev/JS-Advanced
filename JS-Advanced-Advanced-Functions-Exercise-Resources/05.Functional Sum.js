function add(num){
    let result = 0;

    function inner(num) {
        result += num;
        return inner;
    }
    inner.toString = () => {
        return result;
        
    }
    return inner(num);

}

add(1)(6)(-3)