function WordsUpperCase(str){
    const specialCharsRegex = /[!@#$%^&*()_+{}\[\]:;<>,?~\\/-]/g;
    let strWithoutSpecialChars = str.replace(specialCharsRegex, '');
    strWithoutSpecialChars = strWithoutSpecialChars.replace(/\./g, '')
    let arr = strWithoutSpecialChars.split(' ');
    let res = arr.map(word => word.toUpperCase()).join(', ')
    console.log(res);

}
WordsUpperCase('Hi, how are you?');
WordsUpperCase('hello');
WordsUpperCase('Functions in JS can be nested, i.e. hold other functions')