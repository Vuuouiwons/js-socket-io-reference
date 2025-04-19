
const { io } = require("socket.io-client");

const socket = io("ws://rnd-socket-server:3000");

console.log('client: hello world!');

socket.on('connect', () => {
  console.log(`${socket.id} connected`);
});

socket.on('chat', (data) => {
  console.log(`client: hey chat from ${socket.id} with ${data}`);
});

console.log('client: hello world!')

for (let i = 0; i < 3; i++) {
  console.log(`emitting: data client ${i}`);
  socket.emit('chat', `data client ${i}`);
}