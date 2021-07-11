# flatpickr

- [flatpickr 日本語ドキュメント](https://tr.you84815.space/flatpickr/index.html)
- [CSS のテーマ](https://flatpickr.js.org/themes/)

<br>

### ※起動手順

- ライブラリをインストールする。

```
npm install
//バンドルする
npx webpack
```

- VSCode の拡張機能「Live Server」をインストールし、画面右下の「Go Live」を押下する。

<br>

### 構成方針：JS も CSS も webpack でバンドル化して、output をファイルごとに分ける。CSS も CSS ファイルとして出力する。

<br>
<br>

# flatpickr の使い方

1. install
2. import してインスタンス生成(モジュール環境)
3. CDN(非モジュール環境)
   <br>
   <br>

[参考資料(下と同様)](https://tr.you84815.space/flatpickr/gettingStarted.html)

<br>

## 1. install

```
npm i flatpickr --save
```

<br>
<br>

## 2. import してインスタンス生成(モジュール環境)

```
import flatpickr from "flatpickr";

//設定
const config = {
  enableTime: true, //時刻表示ON
  dateFormat: "Y-m-d H:i",
}
flatpickr('.flatpickr', config);
```

- class、id も OK

<br>
<br>

# 日本語化

```
import { Japanese } from "flatpickr/dist/l10n/ja.js";
//カレンダー選択
const configCalendar = {
  locale: Japanese, //日本語化
  altInput: true, //テキストエリアを隠し、表示用テキストを表示する
  altFormat: "Y年m月d日", //表示用テキスト
  dataFormat: "Y-m-d", // 表示フォーマット
};
```

<br>
<br>

# webpack + TypeScript + CSSmodules

```
module: {
    rules: [
      {
        // 拡張子 .ts の場合
        test: /\.ts$/,
        // TypeScript をコンパイルする
        use: "ts-loader",
      },
      {
        // 対象となるファイルの拡張子(css)
        test: /\.css$/,
        // Sassファイルの読み込みとコンパイル
        use: [
          // CSSファイルを書き出すオプションを有効にする
          {
            loader: MiniCssExtractPlugin.loader,
          },
          // CSSをバンドルするための機能
          {
            loader: "css-loader",
            options: {
              // オプションでCSS内のurl()メソッドの取り込まない
              url: false,
              // ソースマップの利用有無
              sourceMap: true,
              // Sass+PostCSSの場合は2を指定
              importLoaders: 2,
            },
          },
          // PostCSSのための設定
          {
            loader: "postcss-loader",
            options: {
              // PostCSS側でもソースマップを有効にする
              sourceMap: true,
              postcssOptions: {
                // ベンダープレフィックスを自動付与する
                plugins: ["autoprefixer"],
              },
            },
          },
        ],
      },
    ],
  },
```
