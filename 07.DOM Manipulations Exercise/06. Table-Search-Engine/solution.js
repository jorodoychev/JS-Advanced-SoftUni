function solve() {
    let data = Array.from(document.querySelectorAll('tbody td'))
    let search = document.getElementById('searchBtn')
    let searchField = document.getElementById('searchField')

    search.addEventListener('click', () => {
        let regex = new RegExp(searchField.value, 'gim')
        console.log(regex)
        data.map(e => {
            e.classList.remove('select')
            if (e.textContent.match(regex) !== null) {
                e.className = 'select'
            }
        })
        searchField.value = '';
    })

}