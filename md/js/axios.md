# Axios

參考資料：[Getting Started | Axios Docs](https://axios-http.com/docs/intro)

---

Axios 在伺服端使用 Node.js 的 http 原生模組，在客戶端 (瀏覽器) 使用 XMLHttpRequest。寫法類似 Fetch，並提供更強大、更有彈性的功能。

## 第一步：向伺服器發出請求 (request)

### 使用 Axios 套件

在 Node.js 環境中，要先安裝套件才能在 JS 檔案中引用套件

```text
npm install axios
```

```js
const axios = require('axios');
```

或是在 HTML 檔案中引用 CDN 檔案

```html
<script src="https://unpkg.com/axios@1.1.2/dist/axios.min.js"></script>
```

### 使用 Axios 方法

`axios()` 的參數只有一個列出各項設定的物件，以下是一些常用設定，預設值標上*號

* method：HTTP 請求方法，例如 *GET, POST, PUT, DELETE，大小寫都可以
* headers：標頭，例如 { 'Content-Type': 'application/json' }
* data：任何想要送出去的資料，格式必須和 header 的 Content-Type 相同，例如 JSON.stringify(data), URLSearchParams, FormData。如果 method 是 'PUT', 'POST', 'DELETE', 還有 'PATCH' 才能用這個設定

實際寫法舉例如下

```js

axios('data.json')

axios({
	url: 'data.json',
	method: 'post',
	headers: {
    	'Content-Type': 'application/json',
	},
	data: { name: value }
})
```

也可用 HTTP 動詞對應的方法

```js
axios.post('data.json',
	{ name: value },
	headers: {
    	'Content-Type': 'application/json',
	}
)
```

## 第二步：接收伺服器回傳的資料 (response)、第三步：取得回傳的資料 (data)

根據需要使用下列方法

```js
	// common function syntax
	.then(function (response) {
    	// 回傳成功
    	console.log(response);
	})
	.catch(function (error) {
    	// 處理錯誤
		console.log(error);
	})
	.finally(function () {
    	// 一定會執行
	});

	// or arrow function syntax
	.then((response) =>
    	// 回傳成功
    	console.log(response);
	)
	.catch((error) =>
    	// 處理錯誤
		console.log(error);
	)
	.finally(() =>
    	// 一定會執行
	);
```

## 基本寫法

```js
const axios = require('axios');

// common function syntax
axios.get('data.json')
	.then(function (response) {
    	console.log(response);
	})

// or arrow function syntax
axios.get('data.json')
	.then((response) => console.log(response));
```

<!-- ## 完整範例

把上述程式碼整合成可執行的範例：[取得資料](/get-data) -->

> :ToCPrevNext