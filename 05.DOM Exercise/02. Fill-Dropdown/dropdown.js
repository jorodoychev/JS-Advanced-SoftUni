function addItem() {
    const itemText = document.getElementById('newItemText').value
    const itemValue = document.getElementById('newItemValue').value
    const select = document.getElementById('menu')
    let option = document.createElement('option')

    option.value = itemValue;
    select.appendChild(option).textContent = itemText

    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';

}