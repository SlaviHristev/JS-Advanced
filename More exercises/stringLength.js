function stringLength(string1, string2, string3){
    let totalLength = string1.length + string2.length + string3.length;
    let averageLength = Math.round(totalLength / 3);

    console.log(totalLength);
    console.log(averageLength);

}
stringLength('chocolate', 'ice cream', 'cake');