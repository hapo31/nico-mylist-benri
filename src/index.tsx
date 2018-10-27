import React from "react";
import ReactDOM from "react-dom";
import { Controls } from "./view/Controls/Controls";

const app: HTMLElement = document.createElement("div");

function searchElement() {
  const target = document.querySelector(".spBox");
  if (target) {
    target.appendChild(app);
    ReactDOM.render(<Controls token="" />, app);
  } else {
    setTimeout(searchElement, 1000);
  }
}

searchElement();
