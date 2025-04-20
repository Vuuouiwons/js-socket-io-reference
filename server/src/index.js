const http = require('http');
const { Server } = require('socket.io');

const httpServer = http.createServer();
const io = new Server(httpServer);

io.on('connection', (socket) => {
    console.log(`${socket.id} connected`);
    
    socket.on('disconnect', () => {
        console.log(`User ${socket.id} disconnected`)
    });

    socket.on('chat', (data) => {
        console.log(`server: hey chat from ${socket.id} with ${data}`);

        socket.emit('chat', `data server ${data[data.length - 1]}`);
    });
    
});

console.log('server: hello world!');

httpServer.listen(3000, () => {
    console.log('=============================');
    console.log('Server listening on port 3000');
});
