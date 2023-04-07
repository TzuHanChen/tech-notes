# Node.js

參考資料：

[Introduction to Node.js](https://nodejs.dev/en/learn/)

[About](https://nodejs.dev/en/about/)

---

Node.js 是伺服器端 JavaScript 執行環境，優點是非同步處理，送出請求之後等待回應的期間可以繼續處理其他 JavaScript 程式碼。

做為一個非同步的、事件驅動的 JavaScript 執行環境，Node.js 被設計來建立可擴展的網路應用程式。

## 安裝

可在 [Node.js](https://nodejs.org/zh-tw) 官方網站下載後安裝。

檢視目前安裝的 Node.js 版本：可用終端機（例如命令提示字元）執行 `node -v` 或 `node --version` 指令。

## NVM

NVM (Node.js Version Manager) 是 Node.js 的版本管理工具，可以用它來安裝與管理 Node.js。

MacOS / Linux 可用 [nvm-sh/nvm](https://github.com/nvm-sh/nvm)

Windows 可用 [coreybutler/nvm-windows](https://github.com/coreybutler/nvm-windows)

我在自己的電腦上安裝 nvm-windows 之後，可用的常用指令：

* `nvm current`：列出正在使用的 Node.js 版本
* `nvm list`：列出有安裝的所有 Node.js 版本
* `nvm install <version>`：安裝指定版本的 Node.js
* `nvm version`：列出正在使用的 nvm 版本

> :ToCPrevNext