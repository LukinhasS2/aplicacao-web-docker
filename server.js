const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, 'index.html');
    const readStream = fs.createReadStream(filePath);

    res.writeHead(200, {'Content-Type': 'text/html'});
    readStream.pipe(res);
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
    console.log(`Servidor está rodando na porta ${PORT}`);
});
