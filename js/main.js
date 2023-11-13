"use.strict";

const elementList = document.querySelector(".-lc-list");
const listaSpesa = [
  "pane",
  "pasta",
  "pollo",
  "latte",
  "uova",
  "farina",
  "cereali",
];

let counter = 0;

while (counter < listaSpesa.length) {
  const elementLi = document.createElement("li");
  elementLi.classList.add("list-group-item");
  elementLi.classList.add("-lc-list-item");
  elementLi.innerText = listaSpesa[counter];
  elementList.append(elementLi);
  counter++;
}
