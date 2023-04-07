# Node.js HTTP 

參考資料：

[[學習之路] Node.js 入門教學](https://summer10920.github.io/2020/12-30/article-nodejs/)

[Node.js Tutorial](https://www.w3schools.com/nodejs/)

[How to build a REST API with TypeScript using only native modules](https://blog.logrocket.com/build-rest-api-typescript-using-native-modules/)

[HTTP | Node.js v19.8.1 documentation](https://nodejs.org/api/http.html)

---

Node.js 的 HTTP 模組提供許多網站伺服器、資料傳遞相關的功能。

## 常用功能

### 引用 Node.js 的 http 模組

```js
const http = require('http');
```

### 建立伺服器

```js
const server = http.createServer((request, response) => {
// 用 http 模組的 createServer 方法建立伺服器，處理 request 請求、response 回應
});
```

在上述函式中可使用 request 和 response 相關的功能，例如：

```js
	response.statusCode = 200;
	// 設定回應的狀態代號為 200 (成功)
	response.setHeader('Content-Type', 'text/plain');
	// 設定標頭的內容類型，text/plain 是普通文字

	// 也可寫成
	response.writeHead(200, { 'Content-Type': 'text/plain' });
```

```js
	response.write('Hello World\n');
	// 設定回應內容
	response.end();
	// 送出回應

	// 也可寫成
	response.end('Hello World\n');
```

### 啟動伺服器

```js
const hostname = '127.0.0.1', port = 3000;
// 設定網站主機名稱與通訊埠

server.listen(port, hostname, () => {
// 開始 HTTP 伺服器的連線監聽
	console.log(`Server running at http://${hostname}:${port}/`);
	// 在終端機顯示訊息，說明目前在用的主機名稱和通訊埠
});
```

## 範例

最常見的 Node.js 入門範例就是網站伺服器：

```js
const http = require('http');

const hostname = '127.0.0.1', port = 3000;

const server = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

### 執行

先把上述程式碼存在 server.js 檔案中，再打開任意終端機執行 `node server.js` 指令

執行後終端機應該會出現 `Server running at http://127.0.0.1:3000/`

在瀏覽器中開啟此網址會出現 Hello World

> :ToCPrevNext