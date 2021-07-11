import flatpickr from "flatpickr";
import { Japanese } from "flatpickr/dist/l10n/ja.js";
import $ from "jquery";
import "flatpickr/dist/themes/dark.css";
import "../css/index.css";

//カレンダー選択
const configCalendar = {
  locale: Japanese, //日本語化
  altInput: true, //テキストエリアを隠し、表示用テキストを表示する
  altFormat: "Y年m月d日", //表示用テキスト
  dataFormat: "Y-m-d", // 表示フォーマット
};
//時刻選択AM、PM
const configTime = {
  enableTime: true, // 時間の選択可否
  noCalendar: true, // カレンダー非表示
  dateFormat: "H:i", // 表示フォーマット
};
flatpickr(".flatpickr_calendar", configCalendar);
flatpickr(".flatpickr_time", configTime);

//id="date"の値を取ってくる
let date_txt = {
  get value(): string {
    let value = $("#date").val();
    if ("string" !== typeof value) {
      return "";
    }
    return value;
  },
  set value(value: string) {
    $("#date").val(value);
  },
};

//id="time"の値を取ってくる
let time_txt = {
  get value(): string {
    let value = $("#time").val();
    if ("string" !== typeof value) {
      return "";
    }
    return value;
  },
  set value(value: string) {
    $("#time").val(value);
  },
};

//「登録」ボタンを押す
$("#submit").on("click", () => {
  sessionStorage.clear();
  let data: any = {
    date: date_txt.value,
    time: time_txt.value,
  };
  sessionStorage.setItem("data", JSON.stringify(data));
  location.href = "result.html";
});
