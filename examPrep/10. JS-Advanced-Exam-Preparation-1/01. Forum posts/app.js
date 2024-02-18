window.addEventListener("load", solve);

function solve() {
  let titleInput = document.getElementById('post-title');
  let categoryInput = document.getElementById('post-category');
  let contentInput = document.getElementById('post-content');
  let publishButton = document.getElementById('publish-btn');
  let reviewListElement = document.getElementById('review-list');
  let publishedElement = document.getElementById('published-list');
  let clearButton = document.getElementById('clear-btn');

  let newLiElement = document.createElement('li');
  let newArticleElement = document.createElement('article');
  let newh4El = document.createElement('h4');
  let newPforCategory = document.createElement('p');
  let newPforContent = document.createElement('p');
  let editButton = document.createElement('button');
  let approveButton = document.createElement('button');

  publishButton.addEventListener('click', add)

  function add(e){
    if (categoryInput.value !== '' && contentInput.value !== '' && titleInput.value !== '') {

      newh4El.textContent = titleInput.value;
      newArticleElement.appendChild(newh4El);
      newPforCategory.textContent = "Category:" + ' ' + categoryInput.value;
      newArticleElement.appendChild(newPforCategory);
      newPforContent.textContent = "Content:" + ' ' + contentInput.value;
      newArticleElement.appendChild(newPforContent);
      newLiElement.appendChild(newArticleElement);
      editButton.textContent = 'Edit';
      editButton.classList.add('action-btn');
      newLiElement.appendChild(editButton);
      approveButton.textContent = 'Approve';
      approveButton.classList.add('action-btn');
      newLiElement.appendChild(approveButton);
      newLiElement.classList.add('rpost')
      reviewListElement.appendChild(newLiElement);

      titleInput.value = '';
      categoryInput.value = '';
      contentInput.value = '';

    }

  }
  editButton.addEventListener('click', (e) => {
    titleInput.value = newh4El.textContent;
    categoryInput.value = newPforCategory.textContent.split(': ')[1];
    contentInput.value = newPforContent.textContent.split(': ')[1];

    newLiElement.remove();
  });
  approveButton.addEventListener('click', (e) => {
    newLiElement.removeChild(editButton);
    newLiElement.removeChild(approveButton);
    publishedElement.appendChild(newLiElement);
  });
  clearButton.addEventListener('click', (e) => {
    newLiElement.remove();
  });
}
