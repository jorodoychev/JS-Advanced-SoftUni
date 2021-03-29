function solve() {
    let sendButton = document.querySelector('button#send');
    let sendTextarea = document.querySelector('textarea#chat_input');
    let chatMessages = document.querySelector('div#chat_messages');

    sendButton.addEventListener('click', () => {
        let message = sendTextarea.value;
        let myMessage = document.createElement('div');
        myMessage.classList.add('message', 'my-message');
        myMessage.textContent = message;
        chatMessages.appendChild(myMessage);
        sendTextarea.value = '';
    });
}


