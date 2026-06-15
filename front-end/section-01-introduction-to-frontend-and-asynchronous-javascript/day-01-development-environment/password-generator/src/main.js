import { nanoid } from "nanoid";
import "./style.css"
const passwordBtnEle = document.querySelector("button");
const displayPasswordEle = document.querySelector("h2");

passwordBtnEle.addEventListener("click", () => {
  const randomPassword = nanoid();
  displayPasswordEle.innerText = randomPassword;
});
