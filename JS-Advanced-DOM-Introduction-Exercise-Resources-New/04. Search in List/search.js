function search() {
   let inputElement = document.getElementById('searchText').value;
   let townsElements = document.querySelectorAll('#towns li');
   let towns = Array.from(townsElements);
   let match = document.getElementById('result');
   let count = 0;

   towns.forEach(town => {
      if(town.textContent.includes(inputElement)){
         count++;
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
      }else{
         town.style.fontWeight = 'normal';
         town.style.textDecoration = 'none';
      }

      match.textContent = `${count} matches found`;
});
}