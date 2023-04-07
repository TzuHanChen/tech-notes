# Fetch

參考資料：[fetch() - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/fetch)

---

Fetch 類似 XMLHttpRequest，但是它提供更強大、更有彈性的功能。

## 第一步：向伺服器發出請求 (request)

`fetch()` 有兩個參數。第一個參數是必要的，就是請求檔案的 URL。第二個參數可有可無，是列出各項設定的物件，以下是一些常用設定，預設值標上*號

* method：HTTP 請求方法，例如 *GET, POST, PUT, DELETE，全部大寫
* headers: 標頭，例如 { 'Content-Type': 'application/json' }
* body: 任何想要送出去的資料，格式必須和 header 的 Content-Type 相同，例如 JSON.stringify(data), URLSearchParams, FormData。如果 method 是 GET 或 HEAD 則無法使用這個設定

實際寫法舉例如下

```js
fetch('http://example.com/data.json')

fetch('http://example.com/data.json', {
	method: 'POST',
	headers: {
    	'Content-Type': 'application/json',
	},
	body: JSON.stringify(data)
})
```

上述寫法可以拆解成下述寫法

### Headers 和 Request

```js
// 自己建立標頭物件，兩種寫法結果相同。
const myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');

// or
const myHeaders = new Headers({
	'Content-Type': 'application/json'
});

// 自己建立設定物件
const myInit = {
	method: 'POST',
	headers: myHeaders,
	body: JSON.stringify(data),
};

// 自己建立請求物件
const myRequest = new Request('data.json', myInit);

fetch(myRequest)
```

## 第二步：接收伺服器回傳的資料 (response)

`.json()` 會把回傳的資料轉換成 JSON 物件，換成其他方法就會轉換成其他格式

```js
	// common function syntax
	.then(function(response) {
    	return response.json();
  	})

	// or arrow function syntax
	.then((response) => response.json())
```

## 第三步：取得回傳的資料 (data)

取得資料後會執行 `console.log()`，如果要執行自己寫的函式就寫在這裡

```js
	// common function syntax
	.then(function(data) {
		console.log(data);
	});

	// or arrow function syntax
	.then((data) => console.log(data));
```

### 錯誤訊息

如果要顯示錯誤訊息可以這樣寫

```js
	// common function syntax
	.then(function(data) {
		console.log(data);
	})
	.catch(function(error) {
    	console.error('有錯誤:', error);
	});

	// or arrow function syntax
	.then((data) => console.log(data))
	.catch((error) => {
    	console.error('有錯誤:', error);
	});
```

## 基本寫法

```js
// common function syntax
fetch('data.json')
	.then(function(response) {
		return response.json();
	})
	.then(function(data) {
		console.log(data);
	});

// or arrow function syntax
fetch('data.json')
	.then((response) => response.json())
	.then((data) => console.log(data));
```

<!-- ## 完整範例

把上述程式碼整合成可執行的範例：[取得資料](/get-data) -->

> :ToCPrevNext