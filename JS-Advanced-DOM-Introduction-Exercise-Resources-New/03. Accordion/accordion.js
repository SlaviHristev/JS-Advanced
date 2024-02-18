function toggle() {
    let buttonElement = document.querySelector('.button');
    let textElement = document.getElementById('extra');

    if(buttonElement.textContent === 'More'){
        buttonElement.textContent = 'Less';
        textElement.style.display = 'block';
    }else if(buttonElement.textContent === 'Less'){
        buttonElement.textContent = 'More';
        textElement.style.display= 'none';
    }
}