function pieceOfPie(array,word1,word2){
    let firstIndex = array.indexOf(word1);
    let lastIndex = array.indexOf(word2);
    let newArr = array.slice(firstIndex,lastIndex + 1);

    return newArr;

}
pieceOfPie(['Pumpkin Pie',

'Key Lime Pie',

'Cherry Pie',

'Lemon Meringue Pie',

'Sugar Cream Pie'],

'Key Lime Pie',

'Lemon Meringue Pie')