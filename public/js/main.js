const chatForm=document.querySelector('#chat-form');
const socket = io();

socket.on('message', (message)=>{
    console.log(message);
    outputMessage(message);
});

chatForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const msg = e.target.elements.msg.value;

    socket.emit('chatMessage',msg);
});

function outputMessage(message){
    const paragraph=document.createElement('p');
    paragraph.innerHTML=message;
    const messages=document.querySelector('.chat');
    messages.appendChild(paragraph);
}