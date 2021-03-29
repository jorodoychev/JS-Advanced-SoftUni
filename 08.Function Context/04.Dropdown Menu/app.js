function solve() {
    let ul = document.getElementById('dropdown-ul')
    let li = document.getElementsByTagName('li')
    let btn = document.getElementById('dropdown')
    let box = document.getElementById('box')
    let items = Array.from(li)

    for (const item of items) {
        item.addEventListener('click', () => box.style.backgroundColor = item.textContent)
    }

    function toggle() {

        if (ul.style.display === 'none' || ul.style.display === '') {
            ul.style.display = 'block'
        } else {
            ul.style.display = 'none'
            box.style.backgroundColor = 'rgb(114, 112, 112)'
        }
    }

    btn.addEventListener('click', toggle)

}