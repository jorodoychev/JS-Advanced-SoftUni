function notify(message) {
    let notification = document.getElementById('notification');
    notification.style.display = 'block';
    notification.textContent = message;

    setTimeout(time, 2000);

    function time() {
        notification.style.display = 'none';
    }

}