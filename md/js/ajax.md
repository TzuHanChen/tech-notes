# Ajax

參考資料：[Ajax - Developer guides | MDN](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX)

---

Ajax (Asynchronous JavaScript and XML)，是一種綜合多種技術以更新網頁內容的方法，特點是可以與伺服器溝通、交換資料、只更新部分頁面，且不需要重新整理頁面。這個方法的關鍵是 XMLHttpRequest 物件，可用來接收任何類型的資料。

## 第一步：向伺服器發出請求 (request)

### 建立物件

建立一個 XMLHttpRequest 的類別實體 (an instance of class)，用來向伺服器發送 HTTP 請求。

```js
let httpRequest = new XMLHttpRequest();
```

### 覆寫檔頭

覆寫伺服器傳回的檔頭 (header)，也就是設定伺服器送回的資料的格式。

可用的格式可在這裡找到：[MIME 類別 (IANA 媒體類別)](https://developer.mozilla.org/zh-TW/docs/Web/HTTP/Basics_of_HTTP/MIME_types)

```js
httpRequest.overrideMimeType('application/json');
httpRequest.overrideMimeType('text/xml');
```

### 後續行動

設定要由哪個函式來處理伺服器回傳的資料。具名函式的名稱後面不加括號和參數，也可用匿名函式。

```js
// named function
httpRequest.onreadystatechange = responseHandler;

// or anonymous function
httpRequest.onreadystatechange = function() { };
```

### 建立請求

`open()` 的三個參數皆為必要

1. [HTTP 請求方法](https://developer.mozilla.org/zh-TW/docs/Web/HTTP/Methods)，例如 GET, POST, PUT, DELETE，全部大寫
2. 請求檔案的 URL，只能是同網域的網址。如果是用 GET 方法建立請求，而且要傳資料 (查詢字串) 給伺服器，就寫在 URL 後方
3. 一個布林值，決定這個請求是否不同步進行，如果設定為 true 則即使伺服器尚未傳回資料也會繼續執行其餘的程式

實際寫法舉例如下

```js
httpRequest.open('GET', 'http://www.example.org/data.json', true);
httpRequest.open('GET', 'http://www.example.org/api.php?name=value', true);
httpRequest.open('POST', 'http://www.example.org/api.php', true);
```

### 送出請求

```js
httpRequest.send();
```

如果是用 POST 方法建立請求，要先設定請求標頭，再傳資料 (查詢字串) 給伺服器，就放在 `send()` 的參數，實際寫法舉例如下

```js
httpRequest.setRequestHeader('Content-Type', 'application/json');
httpRequest.send("name1=value1&name2=value2");
```

## 第二步：接收伺服器回傳的資料 (response)

之前已設定要由一個函式來處理伺服器回傳的資料。

### 檢查目前狀態

這個函式要先檢查請求目前的狀態 [readyState](https://developer.mozilla.org/zh-TW/docs/Web/API/XMLHttpRequest/readyState)。

```js
if (httpRequest.readyState === XMLHttpRequest.DONE) {
    // 一切完成
} else {
    // 還沒完成
}
```

### 檢查 HTTP 狀態碼

再來檢查伺服器傳回的 [HTTP 狀態碼](https://developer.mozilla.org/zh-TW/docs/Web/HTTP/Status)

```js
if (httpRequest.status === 200) {
    // 萬事具備
} else {
    // 其它狀況
}
```

## 第三步：取得回傳的資料 (data)

有以下兩種存取資料的方式

```js
const data = httpRequest.responseText;
const data = httpRequest.responseXML;
```

如果回傳的資料是 JSON 字串，要解析這個字串、轉換成 JSON 物件才能使用

```js
const data = JSON.parse(httpRequest.responseText);
```

## 基本寫法

綜合上述三個步驟的最小可行程式碼：

```js
let xhr = new XMLHttpRequest();
xhr.overrideMimeType('application/json');

function ajaxRequest() {
	xhr.onreadystatechange = ajaxResponseHandler;
	xhr.open('GET', 'data.json', true);
	xhr.send();
}

function ajaxResponseHandler() {
	if (xhr.readyState === XMLHttpRequest.DONE) {
		if (xhr.status === 200) {
			console.log(xhr.responseText);
        }
    }
}
```

> :ToCPrevNext