function createArticle() {
    const input = document.getElementById('createTitle')
    const textArea = document.getElementById('createContent')
    const articles = document.getElementById('articles')
    const article = document.createElement('article')
    const h3 = document.createElement('h3')
    const p = document.createElement('p')

    if (input.value !== '' && textArea.value !== '') {
        h3.innerHTML = input.value
        p.innerHTML = textArea.value

        articles.appendChild(article)
        article.appendChild(h3)
        article.appendChild(p)
        input.value = ''
        textArea.value = ''
    }
}