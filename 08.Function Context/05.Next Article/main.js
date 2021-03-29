function getArticleGenerator(articles) {
    let container = document.getElementById('content')


    return function () {
        if (articles.length > 0) {
            let article = document.createElement('article')
            let p = document.createElement('p')
            p.textContent = articles.shift()
            article.appendChild(p)
            container.appendChild(article)
        }
    }
}