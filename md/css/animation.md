# 動畫

參考資料：[CSS animations | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)

---

CSS 動畫是一組 CSS 設定，用來定義如何利用關鍵影格隨時間改變 CSS 屬性的值。

`animation` 相關屬性 : 如何改變屬性。

`@keyframes` 關鍵影格 : 何時改變哪些屬性。

> 此功能在某些瀏覽器尚在開發中，需要加上不同瀏覽器用的前綴字串，例如 `-moz-`、`-webkit-` 等等。

## 屬性與設定值

### 清單

* `animation-name` : 名字
* `animation-duration` : 週期時間
* `animation-delay` : 間隔時間
* `animation-timing-function` : 加速函式
* `animation-iteration-count` : 重複次數
* `animation-direction` : 播放方向
* `animation-fill-mode` : 前後設定
* `animation-play-state` : 播放狀態
* `animation` : 縮寫

### `animation-name`

定義動畫的名字。

* `none` : 預設值，表示沒有關鍵影格，可用來取消動畫
* 字串 : 由字母、數字、_ 底線、- 橫線組成，第一個字元必須是字母，不可以是 `none`、`unset`、`initial` 或 `inherit`

### `animation-duration`

定義動畫的一次週期的時間長度。
單位可以是秒 (s) 或毫秒 (ms)，必須要有單位。預設值是 0s。

### `animation-delay`

定義元素從套用動畫設定到開始播放動畫的間隔時間。

單位可以是秒 (s) 或毫秒 (ms)，必須要有單位。預設值是 0s。

### `animation-timing-function`

定義動畫播放時，設定值與時間的加速函式。

關鍵字 :

* `linear` : 速度從頭到尾相同
* `ease` : 預設值，加速到中間，再減速到結束
* `ease-in` : 一開始慢速，持續加速直到結束
* `ease-out` : 一開始快速，持續減速直到結束
* `ease-in-out` : 一開始慢速，加速，再減速
* `step-start` : 只在動畫的開始停頓一次
* `step-end` : 只在動畫的結束停頓一次

貝茲曲線 :

* `cubic-bezier(p1, p2, p3, p4)` : 自定義貝茲曲線，p1 和 p3 必須介於 0 和 1 之間
* 可利用 [cubic-bezier.com](https://cubic-bezier.com/#.17,.67,.83,.67) 測試數值與檢視效果

停頓 :

* `steps(n, jumpterm)` : 停頓 n 次且任兩次停頓之間的時間相同，根據以下 jumpterm 決定停頓的方式
  * `jump-start` : 將動畫的開始設為第一次停頓
  * `jump-end` : 將動畫的結束設為最後一次停頓
  * `jump-none` : 動畫的開始與結束皆不設為停頓
  * `jump-both` : 動畫的開始與結束皆設為停頓

### `animation-iteration-count`

定義動畫重複的次數。

* 數字 : 預設值是 1
* `infinite` : 永遠重複播放

### `animation-direction`

定義動畫的播放方向。

* `normal` : 預設值，順向播放
* `reverse` : 反向播放
* `alternate` : 先順向再反向
* `alternate-reverse` : 先反向再順向

### `animation-fill-mode`

定義元素在動畫開始前及結束後如何套用屬性設定。

* `none` : 預設值，不套用屬性設定
* `forwards` : 動畫結束後套用最後一個關鍵影格的屬性設定
* `backwards` : 從套用動畫設定到開始播放動畫為止，也就是在 `animation-delay` 期間，套用最後一個關鍵影格的屬性設定
* `both` : 同時依循 `forwards` 和 `backwards` 的規則

### `animation-play-state`

控制動畫的播放狀態。

* `running` : 預設值，播放
* `paused` : 暫停

### `animation`

`animation` 就是上述八種屬性的縮寫，每個屬性的值都是可有可無。

名字可以是 `none` 或自定義字串，不能是其它屬性的關鍵字 :

* `animation-name`

最多 2 個時間值，第一個會設定為週期時間，第二個會設定為間隔時間 :

* `animation-duration`
* `animation-delay`

其它屬性的值 :

* `animation-timing-function`
* `animation-iteration-count`
* `animation-direction`
* `animation-fill-mode`
* `animation-play-state`

## 關鍵影格

每一組關鍵影格都需要有一個名稱。

關鍵影格使用百分比來指出屬性設定會在整個漸變流程中的哪個時間點出現。

一組關鍵影格當中至少要有兩個關鍵影格，開始和結束。

* 開始 : `0%` 或 `from`
* 結束 : `100%` 或 `to`

### 結構

```html
<!-- html -->
<element class="class"></element>
```

```css
/* css */
.class {
    animation-name: name;
}

@keyframes name {
    from {
        // CSS;
    }
    // percentage {
        // CSS;
    // }
    to {
        // CSS;
    }
}
```

> :ToCPrevNext