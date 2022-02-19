const ws = new WebSocket('ws://localhost:8080');

const sender = prompt('What is your name?');
const $sendBtn = document.querySelector('#chat-send');
const $msgInput = document.querySelector('#chat-input');
const $messages = document.querySelector('#chat-messages-container');

ws.onmessage = (message) => {
  const data = JSON.parse(message.data);
  const $msgItem = document.createElement('div');
  $msgItem.classList.add('chat-message');

  $msgItem.innerHTML += `
    <div class="message-sender">${data.sender}</div>:
    <div class="message-content">${data.message}</div>`;

  $messages.appendChild($msgItem);
};

$sendBtn.addEventListener('click', () => {
  const text = $msgInput.value.trim();

  if (text) {
    const data = JSON.stringify({
      message: text,
      sender,
    });
    ws.send(data);
    $msgInput.value = '';
  }
});
