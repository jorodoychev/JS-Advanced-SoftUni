function focus() {
    let elements = document.getElementsByTagName('input');

    for (let element of elements) {
        element.addEventListener('focus', focusElement);
        element.addEventListener('blur', unfocusedElement);
    }


    function focusElement(event) {
        event.target.parentNode.className = 'focused';
    }

    function unfocusedElement(event) {
        event.target.parentNode.className = '';
    }
}