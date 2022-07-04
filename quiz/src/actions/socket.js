import io from "socket.io-client";

const serverEndpoint = "http://localhost:3001/";

const socket = io(serverEndpoint);


export default socket
