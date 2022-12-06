let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;
let saveBtn = document.getElementById("save-btn");

function increment() {
  count += 1;
  countEl.textContent = count;
  console.log(count);
}

function decrease() {
  count -= 1;
  countEl.textContent = count;
  console.log(count);
}

function save() {
  let countSrt = count + " - ";
  saveEl.textContent += countSrt;
  countEl.textContent = 0;
  count = 0;
}
