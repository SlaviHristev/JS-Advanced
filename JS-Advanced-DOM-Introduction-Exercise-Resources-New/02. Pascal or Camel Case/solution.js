function solve() {
  let textElement = document.getElementById('text').value;
  let currentCase = document.getElementById('naming-convention').value;
  let result = '';

  if(currentCase === 'Camel Case'){
    
    for(let i = 0; i < textElement.length;i++){
      
      if(textElement[i] === ' '){
        result += (textElement[i + 1]).toUpperCase();
        i++;
      }else{
        result += textElement[i].toLowerCase();
      }
    }

  }else if(currentCase === 'Pascal Case'){
    for(let i = 0; i < textElement.length;i++){
      if(i === 0){
        result+= textElement[i].toUpperCase();
        i++;
      }
      if(textElement[i] === ' '){
        result += (textElement[i + 1]).toUpperCase();
        i++;
      }else{
        result += textElement[i].toLowerCase();
      }
    }
  }else{
    result = 'Error!';
  }
  let resultElement = document.getElementById('result');
  resultElement.textContent = result;
}