# SASS 混合 Mixin

有些程式語言可以建立函式、設定參數與預設值，之後要用的時候再呼叫、視情況改變參數的設定值。用中文撰寫偽代碼如下：

```scss
建立函式 函式名稱() {
	運算結果 = 一些運算;
}
建立函式 函式名稱(宣告變數 參數=預設值) {
	運算結果 = 應用參數的一些運算;
}

呼叫函式();
呼叫函式(參數的設定值);
```

@mixin 語法可以把一堆 CSS 設定放在一起並命名，之後利用 @include 語法和名字就能重複使用 CSS 設定，還可以傳入變數和預設值，類似前述的函式。如果參數的設定值有依序排列的話可以不寫參數名稱。用中文撰寫偽代碼如下：

```scss
@mixin 混合名稱() {
	一些 CSS 設定;
}
@mixin 混合名稱($變數名稱, $變數名稱: 預設值) {
	應用變數的一些 CSS 設定;
}

選擇器 {
	@include 混合名稱;
}
選擇器 {
	@include 混合名稱(設定值, $變數名稱: 設定值);
}
```

@mixin 加上參數還可以加上預設值、@include 決定要修改哪些參數還有各參數要用什麼設定值，概念上來說就很像是物件導向程式設計 (Object Oriented Programming) 的多載 (Overload)。編譯之後 @include 的位置會被換成 @mixin 的內容。

舉例如下：

> :Tabs
> > :Tab title=SCSS
> > ```scss
> > @mixin title {
> > 	font-size: 36px;
> > 	font-weight: 700;
> > }
> > @mixin text($font-weight, $color: black) {
> > 	font-size: 18px;
> > 	font-weight: $font-weight;
> > 	color: $color;
> > 
> > .title {
> > 	@include title;
> > }
> > .text {
> > 	@include text(300);
> > }
> > .text-bold {
> > 	@include text(700, $color: darkGray);
> > }
> > ```
>
> > :Tab title=CSS
> > ```css
> > .title {
> > 	font-size: 36px;
> > 	font-weight: 700;
> > }
> > .text {
> > 	font-size: 18px;
> > 	font-weight: 300;
> > 	color: black;
> > }
> > .text-bold {
> > 	font-size: 18px;
> > 	font-weight: 700;
> > 	color: darkGray;
> > }
> > ```

在 @mixin 的下層寫上 @content, 在 @include 的下層寫一些 CSS 設定，編譯之後 @include 的位置會被換成 @mixin 的內容，@content 的位置會被換成 @include 下層的 CSS 設定。

舉例如下：

> :Tabs
> > :Tab title=SCSS
> > ```scss
> > @mixin mobile {
> > 	@media (max-width: 767px) {
> > 		@content;
> > 	}
> > }
> > 
> > .header {
> > 	@include mobile {
> > 		height: 60px;
> > 	}
> > }
> > ```
>
> > :Tab title=CSS
> > ```css
> > @media (max-width: 767px) {
> > 	.header {
> > 		height: 60px;
> > 	}
> > }
> > ```

## 常見錯誤 Common Mistakes

撰寫 SASS 或 SCSS 時可以注意是否有以下的錯誤：

* 在 SASS 檔案中寫 {} 大括號或 ; 分號
* 在 SCSS 檔案中沒寫 {} 大括號或 ; 分號
* 宣告變數的位置在使用變數的位置之後
* 建立混合的位置在使用混合的位置之後

> :ToCPrevNext