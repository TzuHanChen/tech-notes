# NPM

NPM (Node.js Package Manager) 是 Node.js 的套件管理工具，可以用它來安裝與管理各種套件。

NPM 文件：[npm Docs](https://docs.npmjs.com/)

## 安裝 NPM

安裝 Node.js 的同時就會安裝 NPM。

檢視目前安裝的 NPM 版本：可執行 `npm -v` 或 `npm --version` 指令。

## 引用套件

在 Node.js 環境中引用套件可以用 `require()`  或是 `import`，在瀏覽器當中則只能用 `import`。

## 安裝套件

如果專案有 package.json 檔案，執行 `npm install` 指令就會安裝所有專案所需的套件，放在 node_modules 資料夾中。

如果要安裝一個特定的套件，就執行 `npm install <package-name>`，此指令會同時把這個套件加入 package.json 當中。

如果要安裝一個特定的套件的指定版本，就執行 `npm install <package-name>@<version>`。

## 更新套件

如果要更新所有套件，就執行 `npm update`。

如果要更新一個特定的套件，就執行 `npm update <package-name`。

## 執行任務

如果要執行 package.json 當中的命令列任務，就執行 `npm run <task-name>`。

> :ToCPrevNext