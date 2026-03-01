// server.js
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`
        <h1>สวัสดีจาก Node.js 👋</h1>
        <p>นี่คือเว็บเซิร์ฟเวอร์ง่าย ๆ</p>
    `);
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server กำลังรันที่ http://localhost:${PORT}`);
});
