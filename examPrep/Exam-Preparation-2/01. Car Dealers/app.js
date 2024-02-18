window.addEventListener("load", solve);

function solve() {
  let tbodyElement = document.getElementById('table-body');
  let publishButton = document.getElementById('publish');



  publishButton.addEventListener('click', (e) =>{
    e.preventDefault();
    let inputElements = document.querySelectorAll('fieldset input');
    console.log(inputElements);
  })

}
