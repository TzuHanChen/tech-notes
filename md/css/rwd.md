# RWD

RWD (Responsive Web Design，響應式網頁設計)，是讓網頁針對不同的螢幕寬度套用不同的 CSS 設定。

## 讀取螢幕寬度

HTML 檔案的 `<head>` 區塊要有以下的第一個 `<meta>` 標籤，網頁才會讀取螢幕寬度。使用第二個 `<meta>` 標籤會固定縮放比例，可用可不用。

```html
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="viewport" content="width=device-width, initial-scale=1.0 maximum-scale=1.0, minimum-scale=1.0, user-scalable=0">
</head>
```

## 寬度與高度

推薦利用以下語法初始化所有 HTML 元素的尺寸計算方式，以邊框為準：

```css
*, *::before, *::after {
	box-sizing: border-box;
}
```

設定元素的最大寬度與最小寬度，設定值可以是寬度或父元素的百分比，舉例如下：

```css
.box {
	max-width: 100%;
	min-width: 100px;
}
```

推薦將 max-width 用在初始化圖片的尺寸，舉例如下：

```css
img {
	max-width: 100%;
	height: auto;
}
```

## 斷點

在 CSS 檔案中使用以下的語法，網頁就會根據小括號當中設定的螢幕寬度範圍，套用大括號當中的 CSS 設定

```css
@media ( ... ) { ... }
```

### 範圍和順序

有幾種方法可以決定斷點的寬度範圍和順序 :

* 使用常見的斷點：常見的斷點是 768px 和 1200px
	* 手機 : 767px 以下
	* 平板 : 768px ~ 1199px
	* 電腦 : 1200px 以上

* 收集統計資料：透過市場調查、Google Analytics 或其它方法，觀察使用者較常使用哪些裝置，優先做比較多人用的裝置的設定

* 預先定義：UI kit, UI Library, CSS framework 等等，有預先定義的數個斷點可以用

### 實作

寬度：1200px, 768px，順序：電腦 > 平板 > 手機

```css
... // 電腦的設定
@media (max-width: 1199px) {
... // 平板的設定
}
@media (max-width: 767px) {
... // 手機的設定
}
```

寬度：768px, 1200px，順序：手機 > 平板 > 電腦

```css
... // 手機的設定
@media (min-width: 768px) {
... // 平板的設定
}
@media (min-width: 1200px) {
... // 電腦的設定
}
```

## 錯誤

如果網頁下方出現水平卷軸，就表示 RWD 設定有錯誤。

> :ToCPrevNext