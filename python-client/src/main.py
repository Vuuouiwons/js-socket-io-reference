import os
import socketio
import logging
import time



logger = logging.getLogger(__name__)
logging.basicConfig(level=logging.INFO)
sio = socketio.Client()

logger.info('waitting for server initialization')
time.sleep(1)

@sio.event
def connect():
    logger.info(f'python client: {sio.sid} connected')


@sio.on('chat')
def chat(data):
    logger.info(f'python client: hey chat from {sio.sid} with {data}')

sio.connect(f'ws://{os.getenv("HOST", "localhost")}:3000', transports=['websocket'])

for i in range(3):
    logger.info(f'python emitting: python data client {i}')
    sio.emit('chat', f'python data client {i}')

sio.wait()