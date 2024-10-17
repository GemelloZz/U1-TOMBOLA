const table = function () {
  const tableElement = document.getElementById("table");
  for (let i = 0; i < 77; i++) {
    const cell = document.createElement("p");
    cell.textContent = i + 1;
    tableElement.appendChild(cell);
    cell.classList.add("color-cell");
  }
};

const button = function (e) {
  let button = document.getElementById("button");
  button.addEventListener("click", (e) => {
    const randomNum = Math.ceil(Math.random() * 77);
    document.getElementById("p").textContent = p;
    const cell = document.querySelectorAll("p");
    for (let i = 0; i < cell.length; i++) {
      if (parseInt(cell[i].textContent) === n) {
        cell[i].classList.add("color");
        break;
      }
    }
    console.log(randomNum);
  });
};

const highlightCell = function (numero) {
  const cells = document.querySelectorAll("p");
  cells.forEach((cell) => {
    cell.classList.remove("color");
    if (parseInt(cell[i].textContent) === numero) {
      cell.classList.add("color");
    }
  });
};
highlightCell(button);
table();
button();
