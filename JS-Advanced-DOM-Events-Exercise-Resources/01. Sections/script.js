function create(words) {
   const contentDiv = document.getElementById('content')
   words.forEach(word => {
      let div = document.createElement('div');
      let p = document.createElement('p');
      p.textContent = word;
      p.style.display = 'none'
      div.appendChild(p);
      contentDiv.appendChild(div);
      
      div.addEventListener('click', () =>{
         p.style.display = 'block'
      });

   });
}