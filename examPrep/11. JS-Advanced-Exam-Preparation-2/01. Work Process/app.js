function e(type,content){
    const element = document.createElement(type)

    if(content){
        element.textContent = content;
    }
    
}



function solve() {
    let inputElements = Array.from(document.querySelectorAll('form input'));
    let tbodyElement = document.getElementById('tbody');
    let hireButtonElement = document.getElementById('add-worker');
    let sumElement = document.getElementById('sum');
    let salaryInput = document.getElementById('salary');


    hireButtonElement.addEventListener('click', hire);

    function hire(e) {
        e.preventDefault();
        let newTrElement = document.createElement('tr');

        sumElement.textContent = (Number(sumElement.textContent) + Number(salaryInput.value)).toFixed(2);
        const isEmpty = inputElements.some(element => element.value === '');
        if (!isEmpty) {
            inputElements.forEach(element => {
                let newTdElement = document.createElement('td');
                newTdElement.textContent = element.value;
                newTrElement.appendChild(newTdElement);
                element.value = '';

            });

            let firedButton = document.createElement('button');
            let editButton = document.createElement('button');
            let tdEl = document.createElement('td');
            firedButton.textContent = 'Fired';
            firedButton.classList.add('fired');
            tdEl.appendChild(firedButton);
    
            editButton.textContent = 'Edit';
            editButton.classList.add('edit');
            tdEl.appendChild(editButton);
            newTrElement.appendChild(tdEl);
            tbodyElement.appendChild(newTrElement);
    
            editButton.addEventListener('click', edit);
    
            firedButton.addEventListener('click', fired);
        }
    };
    function edit(e) {
        let trEl = tbodyElement.lastChild;
        let tdElements = Array.from(trEl.querySelectorAll('td'));
        let salaryTd = trEl.querySelector('td:nth-child(6)');
        console.log(salaryTd);
        tdElements.pop();

        for (let i = 0; i < tdElements.length; i++) {
            inputElements[i].value = tdElements[i].textContent;
        }
        sumElement.textContent = (Number(sumElement.textContent) - Number(salaryTd.textContent));
        trEl.remove();
    }

    function fired(e) {
        let trEl = tbodyElement.lastChild;
        let salaryTd = trEl.querySelector('td:nth-child(6)');

        sumElement.textContent = (Number(sumElement.textContent) - Number(salaryTd.textContent));
        trEl.remove();
    };
}
solve()