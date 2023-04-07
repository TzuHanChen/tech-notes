# SASS

參考資料：[Sass Basics](https://sass-lang.com/guide)

---

SASS 是一種程式語言，把 SASS 檔案拿去編譯就會產生出 CSS 檔案。

## 寫法 Syntax

SASS 有以下兩種寫法

1. SASS：副檔名是 .sass，用縮排區分階層，設定值後面不能有分號。

2. SCSS：副檔名是 .scss，用 {} 大括號區分階層，設定值後面必須有 ; 分號。

舉例如下：

> :Tabs
> > :Tab title=SASS
> > ```sass
> > h1
> > 	font-size: 24px
> > ```
>
> > :Tab title=SCSS
> > ```scss
> > h1 {
> > 	font-size: 24px;
> > }
> > ```

以上兩個範例編譯後產生的 CSS 是相同的

## 編譯 Preprocessing

編譯 SASS 檔案的工具有以下幾種 :

* 專門編譯 SASS 的軟體，例如 [prepros](https://prepros.io/)
* 前端任務 / 打包工具，例如 [gulp](https://gulpjs.com/), [webpack](https://webpack.js.org/)
* 程式碼編輯器的延伸模組，例如 [Live Sass Compiler](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass)
* 命令提示字元，安裝方法：[官方網站說明](https://sass-lang.com/install)

## 註解 Comments

註解有兩種 :

```scss
/* 這一行文字 會 出現在編譯後產生的 CSS 檔案中 */
// 這一行文字 不會 出現在編譯後產生的 CSS 檔案中
```

## 階層 Nesting

在編譯之後下層選取器的前方會有上層的選擇器，可應用在撰寫多個選取器的設定。

舉例如下：

> :Tabs
> > :Tab title=SCSS
> > ```scss
> > .menu {
> > 	padding: 12px;
> > 	a {
> > 		font-weight: 300;
> > 	}
> > }
>
> > :Tab title=CSS
> > ```css
> > .menu {
> > 	padding: 12px;
> > }
> > .menu a {
> > 	font-weight: 300;
> > }
> > ```

## 上層選擇器 Parent Selector

在編譯之後 & 符號的位置會換成上層的選擇器，可應用在撰寫偽類與偽元素的設定。

舉例如下 :

> :Tabs
> > :Tab title=SCSS
> > ```scss
> > a {
> > 	color: red;
> > 	&:hover {
> > 		color: blue;
> > 	}
> > }
> > ```
>
> > :Tab title=CSS
> > ```css
> > a {
> > 	color: red;
> > }
> > a:hover {
> > 	color: blue;
> > }
> > ```

---

> :Tabs
> > :Tab title=SCSS
> > ```scss
> > ```
>
> > :Tab title=CSS
> > ```css
> > ```