function growingWord() {
    const word = document.querySelector('#exercise > p')
    let px = 2
    let colorChanges = {
        'blue': 'green',
        'green': 'red',
        'red': 'blue',
    }

    if (!word.hasAttribute('style')) {
        word.setAttribute('style', `color:blue; font-size: ${px}px`)
    } else {
        let currPx = word.style['font-size']
        px = currPx.substring(0, currPx.length - 2) * 2
        let currColor = word.style.color
        word.setAttribute('style', `color: ${colorChanges[currColor]}; font-size: ${px}px`)
    }


}