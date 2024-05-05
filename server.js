const http = require('http');
const ngrok = require('@ngrok/ngrok');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, 'index.html');
    const readStream = fs.createReadStream(filePath);

    res.writeHead(200, { 'Content-Type': 'text/html' });
    readStream.pipe(res);
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
    console.log(`Servidor está rodando na porta ${PORT}`);
});

// get your endpoint online
ngrok.connect(
    {
        addr: 8080,
        authtoken: "2g3WKRrgCNr5QdU59mjL3TF94z5_481HKV5cTjzqSEHe4uHJi"
    }).then(listener => console.log(`Ingress established at: ${listener.url()}`))