# CSS 設計模式

設計模式（design pattern）是對軟體設計中普遍存在（反覆出現）的各種問題，所提出的解決方案。（摘錄自[維基百科](https://zh.wikipedia.org/wiki/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F_(%E8%AE%A1%E7%AE%97%E6%9C%BA))）

以下三種設計模式的重點是結構與樣式分離、容器與內容分離。

## OOCSS

OOCSS (Object Oriented CSS) 的做法是 CSS 的每個 class 當中只有一個設定，HTML 的標籤套用所有需要的 class。舉例如下 :

```css
.m24a { margin: 24px auto }
.fs24 { font-size: 24px }
.fw700 { font-weight: 700 }
```

```html
<h2 class="m24a fs24 fw700">標題</h2>
```

## SMACSS

SMACSS (Scalable and Modular Architecture for CSS) 的做法是 CSS 的 class 有些負責結構，有些負責樣式，HTML 的標籤套用結構的 class，之後有需要再套用樣式的 class。舉例如下 :

```css
.title2 {
	margin: 24px auto;
	font-size: 24px;
	font-weight: 700;
}

.title2-alert {
	color: #B37399;
}
```

```html
<h2 class="title2 title2-alert">標題</h2>
```

## BEM

BEM (Blocks, Elements and Modifiers) 的做法是 CSS 的 class 的名稱由區塊、兩個 _ 底線、元素、兩個 - 減號、修飾子所構成，HTML 的標籤套用所需的 class。舉例如下 :

```css
.content {
	width: 960px;
	margin: 30px auto;
}

.content__title2--alert {
	margin: 24px auto;
	font-size: 24px;
	font-weight: 700;
	color: #B37399;
}
```

```html
<div class="content">
	<h2 class="content__title2--alert">標題</h2>
</div>
```

> :ToCPrevNext