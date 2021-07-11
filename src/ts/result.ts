import { InputData } from "./inputData";
import $ from "jquery";
import "../css/result.css";

let inputData = new InputData("", "");

//sessionStorageから値を取り出し
let loadStorage = () => {
  let data = JSON.parse(sessionStorage.getItem("data") as string);
  let date: string = data["date"];
  let time: string = data["time"];
  inputData.date = date;
  inputData.time = time;
};

let addElement = () => {
  const result = document.getElementById("result");
  const p = document.createElement("p");
  const stringDate = document.createTextNode(inputData.date);
  const stringTime = document.createTextNode(inputData.time);
  p.appendChild(stringDate);
  p.appendChild(stringTime);
  result !== null ? result.appendChild(p) : null;
};

//読み込みイベント
$(window).on("load", () => {
  loadStorage();
  addElement();
});
