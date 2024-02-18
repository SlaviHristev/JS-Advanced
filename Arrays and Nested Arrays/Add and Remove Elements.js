function addAndRemove(arr){
    let newArr = [];
    let num = 1;
    arr.forEach(element => {
      if(element === 'add'){
        newArr.push(num);
      }else{
        newArr.pop();
      };
      num+=1;
    });
    newArr.length === 0 ? console.log("Empty") : console.log(newArr.join('\n'));
    
}
addAndRemove(['add',

'add',

'add',

'add'])

addAndRemove(['remove', 'remove', 'remove'])

addAndRemove(['add', 'add', 'remove', 'add', 'add'])