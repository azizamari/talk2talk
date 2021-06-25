const chatForm=document.querySelector('#chat-form');
const socket = io();
let chat=document.querySelector('.chat');

socket.on('message', (message)=>{
    console.log(message);
    outputMessage(message);

    chat.scrollTop=chat.scrollHeight;
    
});

chatForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const msg = e.target.elements.msg.value;
    e.target.elements.msg.value='';
    e.target.elements.msg.focus();
    socket.emit('chatMessage',msg);
});

function outputMessage(message){
    const paragraph=document.createElement('p');
    paragraph.innerHTML=message;
    const chat=document.querySelector('.chat');
    chat.appendChild(paragraph);
}