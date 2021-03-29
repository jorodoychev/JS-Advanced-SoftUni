function addItem() {
    let text = document.getElementById('newText').value
    let list = document.getElementById('items');
    if (text.length === 0) return;

    let li = document.createElement('li')
    li.textContent = text
    let remove = document.createElement('a')
    let linkText = document.createTextNode('[Delete]')
    document.getElementById('newText').value = ''

    remove.appendChild(linkText)
    remove.href = "#"
    remove.addEventListener('click', deleteItem)

    li.appendChild(remove)
    list.appendChild(li)

    function deleteItem() {
        li.remove();
        document.getElementById('newText').value = '';

    }
}