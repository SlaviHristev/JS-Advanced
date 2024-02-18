function solve() {

    let openSection = document.querySelector('.orange').parentElement.parentElement;
    let openSectionDiv = openSection.querySelector('div:nth-child(2)');
    let inProgressSection = document.querySelector('.yellow').parentElement.parentElement;
    let inProgressSectionDiv = inProgressSection.querySelector('div:nth-child(2)');
    let completedSection = document.querySelector('.green').parentElement.parentElement;
    let completedSectionDiv = completedSection.querySelector('div:nth-child(2)');
    document.getElementById('add').addEventListener('click', onClick)


    function onClick(e) {
        e.preventDefault();
        let taskInput = document.getElementById('task').value;
        let descriptionText = document.getElementById('description').value;
        let dataInput = document.getElementById('date').value;
        let newArticleEl = document.createElement('article');
        let newHeaderEl = document.createElement('h3');
        let newPEl = document.createElement('p');
        let newSecondPEl = document.createElement('p');
        let newDivEl = document.createElement('div');
        let newStartButton = document.createElement('button');
        let newDeleteButton = document.createElement('button');
       
        if (taskInput.length > 0 && descriptionText.length > 0 && dataInput.length > 0) {
            newHeaderEl.textContent = taskInput;
            newArticleEl.appendChild(newHeaderEl);
            newPEl.textContent = 'Description: ' + descriptionText;
            newArticleEl.appendChild(newPEl);
            newSecondPEl.textContent ='Due Date: ' + dataInput;
            newArticleEl.appendChild(newSecondPEl)
            newDivEl.className = 'flex';
            newStartButton.textContent = 'Start';
            newStartButton.className = 'green';
            newStartButton.addEventListener('click', start)
            newDivEl.appendChild(newStartButton);
            newDeleteButton.textContent = 'Delete';
            newDeleteButton.className = 'red';
            newDeleteButton.addEventListener('click', deleteFunc)
            newDivEl.appendChild(newDeleteButton);
            newArticleEl.appendChild(newDivEl);
            openSectionDiv.appendChild(newArticleEl);
            taskInput = '';
            descriptionText = '';
            dataInput = '';
        }

    }
    function start(e){
        e.preventDefault()
       let divEl =  e.currentTarget.parentElement;
       let wholeArticle = divEl.parentElement;
       let buttonToRemove = divEl.querySelector('.green');
       divEl.removeChild(buttonToRemove);

       let newFinishButton = document.createElement('button');
       newFinishButton.textContent = 'Finish';
       newFinishButton.className = 'orange';
       newFinishButton.addEventListener('click', finish)
       divEl.appendChild(newFinishButton);
       wholeArticle.appendChild(divEl);
       inProgressSectionDiv.appendChild(wholeArticle);

    }
    function deleteFunc(e){
        e.preventDefault();
        let wholeArticle = e.currentTarget.parentElement.parentElement;
        let articleParent = wholeArticle.parentElement;
        articleParent.removeChild(wholeArticle);
    }
    function finish(e){
        e.preventDefault()
        let divEl =  e.currentTarget.parentElement;
        let wholeArticle = divEl.parentElement;
        wholeArticle.removeChild(divEl);
        completedSectionDiv.appendChild(wholeArticle);
    }
    
}