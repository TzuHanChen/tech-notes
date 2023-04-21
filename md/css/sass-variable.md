# SASS 變數 Variables

用 $ 符號宣告變數與儲存設定值，之後就可以重複使用。

宣告變數的位置必須在使用變數的位置之前。

舉例如下：

> :Tabs
> > :Tab title=SCSS
> > ```scss
> > $primary-color: #CC6699;
> > $font-stack: "Noto Sans TC", sans-serif;
> > $font-size-1: 18px;
> > 
> > .text {
> > 	color: $primary-color;
> > 	font-family: $font-stack;
> > 	font-size: $font-size-1;
> > }
> > ```
>
> > :Tab title=CSS
> > ```css
> > .text {
> > 	color: #CC6699;
> > 	font-family: "Noto Sans TC", sans-serif;
> > 	font-size: 18px;
> > }
> > ```

## 插值 Interpolation

利用 #{} 語法，可以在許多位置插入表達式。

可以用 #{} 語法的位置有很多，例如選擇器、屬性名稱、字串中間、各種 @ 語法。

可以放在 #{} 語法裡面的表達式也很多，例如靜態數值、運算子、變數等等。

舉例如下：

> :Tabs
> > :Tab title=SCSS
> > ```scss
> > $name: "hopbush";
> > $hopbush: #CC6699;
> > 
> > .hightlight-#{$name} {
> > 	border-bottom: 1px solid $hopbush;
> > }
> > ```
>
> > :Tab title=CSS
> > ```css
> > .hightlight-hopbush {
> > 	border-bottom: 1px solid #CC6699;
> > }
> > ```

## 設定值 Values

屬性與變數的設定值有很多種，以下列出較常用的 :

* 數字，可能有或沒有單位，例如 18px, 300
* 字串，中間有空白的話前後必須要有 "" 雙引號, 例如 sans-serif, "Noto Sans TC"
* 顏色，可以是顏色名稱、十六進位、函式，例如 Orchid, #DA70D6, rgb(218, 112, 214), hsl(302, 59%, 65%)

任何屬性的設定值都可以用變數儲存。

## 運算子 Operators

SASS 支援的運算子有很多種，以下列出較常用的 :

* 數學運算子，例如 +, -, *, /, %
* 相等運算子，例如 ==, !=
* 關係運算子，例如 <, <=, >, >=
* 布林運算子，例如 and, or, not

值和運算子之間要有空白，例如 960px * 0.25。

可以用 () 小括號改變運算的順序。

> :ToCPrevNext