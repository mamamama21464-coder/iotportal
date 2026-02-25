import { io } from "socket.io-client";

const BACKEND_URL =
  process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

const socket = io(BACKEND_URL, {
  transports: ["websocket"],
  autoConnect: false,
});

export function connectSocket() {
  if (!socket.connected) {
    socket.connect();
    console.log("Socket connected");
  }
}

export function disconnectSocket() {
  if (socket.connected) {
    socket.disconnect();
    console.log("Socket disconnected");
  }
}

export function sendCodeToServer(code) {
  socket.emit("code_upload", { code });
}

export function onGPIOUpdate(callback) {
  socket.on("gpio_update", callback);
}

export function onConnect(callback) {
  socket.on("connect", callback);
}

export function onDisconnect(callback) {
  socket.on("disconnect", callback);
}

export default socket;
