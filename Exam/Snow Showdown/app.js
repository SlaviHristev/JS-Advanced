
window.addEventListener("load", solve);

function solve() {
  let snowmanName = document.getElementById('snowman-name');
  let snowmanHeigth = document.getElementById('snowman-height');
  let location = document.getElementById('location');
  let creator = document.getElementById('creator-name');
  let attribute = document.getElementById('special-attribute');
  let addButton = document.querySelector('.add-btn');
  let snowmanPreviewSection = document.querySelector('.snowman-preview');
  let snowListSection = document.querySelector('.snow-list');
  let bodyContainer = document.querySelector('body');
  let main = document.getElementById('hero');
  let snowmanImg = document.getElementById('back-img');

  let editBtn = document.createElement('button');
  let nextBtn = document.createElement('button');
  let sendBtn = document.createElement('button');
  let backBtn = document.createElement('button');

  let liElement = document.createElement('li');
  let article = document.createElement('article');
  let firstP = document.createElement('p');
  let secondP = document.createElement('p');
  let thirdP = document.createElement('p');
  let fouthP = document.createElement('p');
  let fifthP = document.createElement('p');

  let btnContainer = document.createElement('div')
  addButton.addEventListener('click', handleAdd);

  function handleAdd(e) {
    e.preventDefault()
    if (snowmanName.value !== '' && snowmanHeigth.value !== '' && location.value !== '' && creator.value !== '' && attribute.value !== '') {


      liElement.classList.add('snowman-info');


      firstP.textContent = `Name: ${snowmanName.value}`;
      article.appendChild(firstP);

      secondP.textContent = `Height: ${snowmanHeigth.value}`;
      article.appendChild(secondP);

      thirdP.textContent = `Location: ${location.value}`;
      article.appendChild(thirdP);

      fouthP.textContent = `Creator: ${creator.value}`;
      article.appendChild(fouthP);

      fifthP.textContent = `Attribute: ${attribute.value}`;
      article.appendChild(fifthP);

      btnContainer.classList.add('btn-container');

      editBtn.textContent = 'Edit';
      editBtn.classList.add('edit-btn');
      btnContainer.appendChild(editBtn);

      nextBtn.textContent = 'Next'
      nextBtn.classList.add('next-btn');

      btnContainer.appendChild(nextBtn);

      liElement.appendChild(article);
      liElement.appendChild(btnContainer);
      snowmanPreviewSection.appendChild(liElement);

      snowmanName.value = '';
      snowmanHeigth.value = '';
      location.value = '';
      creator.value = '';
      attribute.value = '';
      addButton.disabled = true;

      editBtn.addEventListener('click', handleEdit);
      nextBtn.addEventListener('click', handleNext);
    }
  }


  function handleEdit(e) {
    e.preventDefault();
    snowmanName.value = firstP.textContent.split('Name: ')[1];
    snowmanHeigth.value = secondP.textContent.split('Height: ')[1];
    location.value = thirdP.textContent.split('Location: ')[1];
    creator.value = fouthP.textContent.split('Creator: ')[1];
    attribute.value = fifthP.textContent.split('Attribute: ')[1];

    snowmanPreviewSection.removeChild(liElement);
    addButton.disabled = false;
  }

  
  function handleNext(e) {
    e.preventDefault();
    let newLi = document.createElement('li');
    newLi.classList.add('snowman-content');

    sendBtn.textContent = 'Send';
    sendBtn.classList.add('send-btn');
    article.appendChild(sendBtn);
    newLi.appendChild(article);

    snowmanPreviewSection.removeChild(liElement);
    snowListSection.appendChild(newLi);

    sendBtn.addEventListener('click', handleSend);
  }

 

  function handleSend(e) {
    e.preventDefault();

    bodyContainer.removeChild(main);

    backBtn.textContent = 'Back';
    backBtn.classList.add('back-btn');
    bodyContainer.appendChild(backBtn);
    snowmanImg.removeAttribute('hidden');
  }

  backBtn.addEventListener('click', () => {
    window.location.reload();
  })
}
