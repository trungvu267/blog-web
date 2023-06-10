import io from "socket.io-client";

const apiUrl = import.meta.env.VITE_API_URL || "https://localhost:5556";

const socket = io(apiUrl);
export default socket;
