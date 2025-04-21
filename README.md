# JS Socket.IO Server Reference

A minimalistic and practical reference for setting up a real-time WebSocket server using Socket.IO with Node.js, accompanied by both JavaScript and Python clients. This project is ideal for developers seeking to understand the fundamentals of Socket.IO and real-time communication between clients and servers.

## Quick Start

**Prerequisites**:

- Ensure [Docker](https://www.docker.com/get-started) is installed on your system.

**Steps**:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Vuuouiwons/js-socket-io-server-reference.git
   cd js-socket-io-server-reference
   ```
2. **Review the Quick Start Script**:
   Before running any scripts, it's crucial to inspect them to ensure they are safe and meet your requirements.
3. **Run the Application**:
   Execute the following script to build and start all services:
   ```bash
   ./quick_start_runner.sh
   ```
   This script utilizes `docker-compose` to build and launch the server along with both clients.

## Project Structure
```plaintext
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

## Components Overview

### Server

- **Location**: `/server/src/index.js`

- **Description**: Sets up a Socket.IO server that listens for `chat` events. Upon receiving a message, it processes and emits a modified response back to the client.

### JavaScript Client

- **Location**: `/js-client/src/index.js`

- **Description**: Connects to the Socket.IO server and emits three distinct messages using the `chat` event. Listens for responses from the server and logs them to the console.

### Python Client

- **Location**: `/python-client/src/main.py`

- **Description**: Utilizes the `python-socketio` library to connect to the Socket.IO server. Sends three messages via the `chat` event and handles incoming responses by printing them to the console.

## Docker Compose Configuration

The `docker-compose.yaml` file defines three services:

- **socket-server**: Builds and runs the Socket.IO server.

- **js-socket-client-1**: Builds and runs the JavaScript client.

- **python-socket-client-1**: Builds and runs the Python client.

All services are connected via the `socket-test` Docker network, facilitating seamless inter-service communication using service names as hostnames.

## Environment Variables

Each client can be configured using environment variables. For instance, to specify the server host:

- **JavaScript Client**:
  ```bash
  HOST=socket-server
  ```

- **Python Client**:
  Set the server URL accordingly in the code or via environment variables.

## Notes

- **Extensibility**: This setup serves as a foundational reference. Feel free to extend it by adding more events, implementing authentication, or integrating with databases.

