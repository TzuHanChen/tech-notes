# 權重

## 權重一覽表

各種選擇器的權重以數字表示，由小到大排列如下 :

| 名稱 | 用法舉例 | 權重 |
| :- | :- | :- |
| 全域選擇器 | `*` | 0,0,0,0,0 |
| 元素選擇器 | `h1` | 0,0,0,0,1 |
| 類別選擇器 | `.class` | 0,0,0,1,0 |
| 偽類選擇器 | `a:hover` | 0,0,0,1,0 |
| 屬性選擇器 | `input[type="radio"]` | 0,0,0,1,0 |
| 唯一選擇器 | `#id` | 0,0,1,0,0 |
| 行內選擇器 | `<p style="color: green">` | 0,1,0,0,0 |
| 重要標示 | `font-size: 100px !important;` | 1,0,0,0,0 |

元素只會套用權重最大的選擇器的設定

最好不要用唯一選擇器、行內選擇器、重要標示

## 先後順序

在多個選擇器的權重相同時 :

在 HTML 檔案的 `<head>` 區塊中，後面的 CSS 檔案會覆蓋掉前面的設定

```html
<link rel="stylesheet" href="style1.css">
<link rel="stylesheet" href="style2.css">
<!-- 只會套用 style2.css 的設定 -->
```

在 HTML 檔案的 `<body>` 區塊中，類別的先後順序沒有差別

```html
<h1 class="green blue">
<h1 class="blue green">
<!-- 兩者效果相同 -->
```

在 CSS 檔案中，後面的設定會覆蓋掉前面的設定

```css
h2 { color: green; }
h2 { color: blue; }
/* h2 會是藍色 */
```

> :ToCPrevNext