// Import server.js
const server = require("./server.js");

// Get the port number to listen
const PORT = process.env.PORT || 3012;
server.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));