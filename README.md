# Lista della spesa

_HTML+js_

![thumbnail](/readme-img/img-1.jpeg)

Creazione di una lista della spesa usando il ciclo `while`, visto oggi a lezione.

## Indice

- [Scomposizione del problema](#Scomposizione-del-problema)
- [Soluzione](#soluzione)

### Scomposizone del problema

1. Crezione in HTML di un `ul` e collegarlo al file js
2. Creazione di un array con gli elementi della lista
3. Creazione dell' elemnto `li` da inserire nell' `ul`
4. Ripetere l' operazione 3 con un ciclo while

NB

Mettere come condizione un contatore che, una volta arrivato alla lunghezza dell' array faccia interromepere il ciclo (counter < array.lenght )

### Soluzione

**_Crezione in HTML di un `ul` e collegarlo al file js_**

```html
<ul class="list"></ul>
```

```js
const elementList = document.querySelector(".list");
```

**_Creazione di un array con gli elementi della lista_**

```js
const listaSpesa = [
  "pane",
  "pasta",
  "pollo",
  "latte",
  "uova",
  "farina",
  "cereali",
];
```

**_Creazione dell' elemnto `li` da inserire nell' `ul`_**

```js
const elementLi = document.createElement("li");
elementLi.innerText = listaSpesa[counter];
elementList.append(elementLi);
```

**_Ripetere l' operazione 3 con un ciclo while_**

```js
let counter = 0;

while (counter < listaSpesa.length) {
  const elementLi = document.createElement("li");
  elementLi.innerText = listaSpesa[counter];
  elementList.append(elementLi);
  counter++;
}
```

- il ciclo `while` si ripete finchè la condizione è vera
- quando il contatore supera la lunghezza dell' `array` il ciclo non si verifica
