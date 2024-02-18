function getArticleGenerator(articles) {

    return () => {
        while(articles.length > 0){
         let currentLine = articles.shift();
         let newArticle = document.createElement('article');
         let contentEl = document.getElementById('content');
         newArticle.textContent = currentLine;
         contentEl.appendChild(newArticle);
         contentElement = contentEl;
        }

    }

}
