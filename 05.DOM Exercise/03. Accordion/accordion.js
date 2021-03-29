function toggle() {
    let btn = document.getElementsByClassName('button')[0];
    let para = document.getElementById('extra');

    if (para.style.display === 'block') {
        para.style.display = 'none';
        btn.textContent = 'More';
    } else {
        para.style.display = 'block';
        btn.textContent = 'Less';
    }
}