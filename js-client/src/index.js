
const { io } = require("socket.io-client");

const socket = io("ws://socket-server:3000");

console.log('js client: hello world!');

socket.on('connect', () => {
  console.log(`js: ${socket.id} connected`);
});

socket.on('chat', (data) => {
  console.log(`js client: hey chat from ${socket.id} with ${data}`);
});

for (let i = 0; i < 3; i++) {
  console.log(`js emitting: data client ${i}`);
  socket.emit('chat', `js data client ${i}`);
}