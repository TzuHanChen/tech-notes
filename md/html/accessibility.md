# 親和性

參考資料：[無障礙網頁 | MDN](https://developer.mozilla.org/zh-TW/docs/Web/Accessibility)

---

## 文字內容

優秀的內容結構應該要有標題、段落、清單等標籤

撰寫文章時應力求淺顯易懂，不要過度複雜，避免使用艱澀的詞彙及術語

避免使用 - 橫線符號

使用全稱而非縮寫

## 排版

不要用表格做排版

比起使用 `div`，更應該使用語意化標籤，例如 `header, nav, main, section, article, aside, footer`

## 介面控制

介面控制指的是網頁中使用者可以互動的元件，主要包括：

* 按鈕 `<button>`
* 連結 `<a href="">`
* 表單元件，例如 `<input>, <select>, <textarea>` 等等

預設情況下，瀏覽器允許使用者用鍵盤操作介面控制元件

表單元件應該要有對應的標籤 `<label>`

連結 `<a>` 和表單中的標籤 `<label>` 的文字內容應該要是有意義的、可理解的、獨特的

## 資料表格

利用 `<th>` 標示表格的標題

利用 `<caption>` 標示表格的替代文字，提供表格內容的快速總結

## 圖片

圖片 `<img>` 可使用以下方法來提供文字訊息：

* `<img alt="替代文字">`，利用替代文字來說明圖片的內容
* `<img alt="">`，不寫替代文字來表示這張圖片只是裝飾
* 裝飾用的圖片也可以用 CSS 設定處理，例如 `background-image` 設定
* `<img title="標題">`，利用標題來說明圖片的內容，如果游標停在圖片上就會顯示
* `<img aria-labelledby="label">` 加上 `<p id="label">`，用另外的文字來說明圖片的內容

## 連結

連結文字和非連結文字的差異應該不只一項，例如採用不同的色彩和文字裝飾

要注意所有文字和背景的對比度

會開啟新分頁或檔案的連結要有文字說明，例如：

* `<a href="https://www.website.com" target="_blank">網站 (在新分頁中開啟)</a>`
* `<a href="document.pdf" target="_blank">文件 (PDF 檔案)</a>`
* `<a href="document.pdf" target="_blank">` `<img src="document.svg" alt="文件 (PDF 檔案)" />` `</a>`

## 工具

測試網頁親和性的工具：

[WAVE (opens in new tab)](https://wave.webaim.org/)

[Colorable (opens in new tab)](https://colorable.jxnblk.com/)

> :ToCPrevNext