const chatForm=document.querySelector('#chat-form');
const socket = io();

const chat=document.querySelector('.chat');
const {user}=Qs.parse(location.search,{ignoreQueryPrefix: true});

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
    socket.emit('chatMessage',msg,user);
});

function outputMessage(message){
    const paragraph=document.createElement('p');
    paragraph.innerHTML=`${message.username} at ${message.time}: ${message.text}`;
    const chat=document.querySelector('.chat');
    chat.appendChild(paragraph);
}