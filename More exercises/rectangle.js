function rectangle(width,height,color){

    let obj = {width: Number(width), height: Number(height), color: String(color), calcArea(){
        return this.height * this.width;
    }}
    return obj;

}
let rect = rectangle(4, 5, 'red');

console.log(rect.width);

console.log(rect.height);

console.log(rect.color);

console.log(rect.calcArea());