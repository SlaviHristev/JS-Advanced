function addItem() {
    let newItemTextEl = document.getElementById('newItemText').value;
    let newItemValueEl = document.getElementById('newItemValue').value;

    let newOptionEl = document.createElement('option');
    newOptionEl.textContent = newItemTextEl;
    newOptionEl.value = newItemValueEl;

    let menuElement = document.getElementById('menu');
    menuElement.appendChild(newOptionEl);

    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value= '';

}