"use.strict";

const elementList = document.querySelector(".list");
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
  elementLi.innerText = listaSpesa[counter];
  elementList.append(elementLi);
  counter++;
}
