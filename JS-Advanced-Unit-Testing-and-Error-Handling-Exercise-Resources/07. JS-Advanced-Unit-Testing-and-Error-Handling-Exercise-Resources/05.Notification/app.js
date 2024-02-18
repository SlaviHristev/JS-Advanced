function notify(message) {
  let notificatonDivElement = document.getElementById('notification');
  notificatonDivElement.textContent = message;
  notificatonDivElement.style.display = 'block';
  

  notificatonDivElement.addEventListener('click', (e)=>{
    e.currentTarget.style.display = 'none';
  })


}