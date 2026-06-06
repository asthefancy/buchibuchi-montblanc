/* =================================================================
   ぶちぶちモンブラン ローカルサーバー
   -----------------------------------------------------------------
   file:// で開くとブラウザのセキュリティ制限（unique origin）に
   引っかかることがあるので、http://localhost で開くための簡易サーバー。
   Node.js だけで動きます（追加インストール不要）。

   使い方：
     1) このフォルダで  node local-server.js  を実行
     2) 表示された http://localhost:8123/ をブラウザで開く
     3) 止めるときは Ctrl + C
   ================================================================= */
const http = require("http");
const fs = require("fs");
const path = require("path");

const ROOT = __dirname;     // このファイルがある場所
const PORT = 8123;

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".png": "image/png", ".jpg": "image/jpeg", ".svg": "image/svg+xml",
  ".ico": "image/x-icon", ".json": "application/json; charset=utf-8",
};

http.createServer((req, res) => {
  let url = req.url.split("?")[0];
  if (url === "/") url = "/index.html";
  const file = path.join(ROOT, decodeURIComponent(url));
  // ROOT の外には出さない（簡易的なパストラバーサル対策）
  if (!file.startsWith(ROOT)) { res.writeHead(403); res.end("forbidden"); return; }
  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(404); res.end("not found"); return; }
    res.writeHead(200, { "content-type": TYPES[path.extname(file).toLowerCase()] || "application/octet-stream" });
    res.end(data);
  });
}).listen(PORT, () => {
  console.log("ぶちぶちモンブラン → http://localhost:" + PORT + "/");
  console.log("（止めるときは Ctrl + C）");
});
