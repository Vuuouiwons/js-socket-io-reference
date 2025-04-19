const http = require('http');
const { Server } = require('socket.io');

const httpServer = http.createServer();
const io = new Server(httpServer);

io.on('connection', (socket) => {
    console.log('a user connected');
});

httpServer.listen(3000, () => {
    console.log('Server listening on port 3000');
});