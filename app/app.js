const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello! My GitOps application is running.\n");
});

server.listen(3000, "0.0.0.0", () => {
    console.log("Server running on port 3000");
});
