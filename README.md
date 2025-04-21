# JS SocketIO Server Reference

## Quick Start
0. Make sure **docker** is installed.
1. Clone the repository.
   ```bash
   $ git clone https://github.com/Vuuouiwons/js-socket-io-server-reference.git
   ```
2. Run the test with `./quick_start_runner.sh` (WARN: check the script first, **do not** blindly run scripts file from the internet).

## [File Directory](.)
```
.
├── README.md
├── docker-compose.yaml
├── js-client
│   ├── Dockerfile.base
│   ├── Dockerfile.local
│   ├── package-lock.json
│   ├── package.json
│   └── src
│       └── index.js
├── python-client
│   ├── Dockerfile.base
│   ├── Dockerfile.local
│   ├── requirements.txt
│   └── src
│       └── main.py
└── server
    ├── Dockerfile.base
    ├── Dockerfile.local
    ├── package-lock.json
    ├── package.json
    └── src
        └── index.js
```

## [Server](/server)
The websocket webserver is writen with SocketIO and uses the built in webserver module from Node. The websocket server will echo the response back to the client with modifications.

## [JS Client](/js-client/)
The client sends 3 data, with event chat.

## [Python Client](/python-client/)
The client sends 3 data, with event chat.
