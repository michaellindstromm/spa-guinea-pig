// 1. Get title from section element

let section = document.getElementsByClassName("article-section");
let outputEl = document.getElementById("output-target");

for (var i = 0; i < section.length; i++) {
  section[i].addEventListener("click", postSection, false);
}

function postSection() {
  outputEl.innerHTML = `<p>You clicked the ${this.innerHTML} section</p>`;
}

// 2. Mouseover h1 tag

let pageTitle = document.getElementById("page-title");
function mouseH1() {
  outputEl.innerHTML = `<p>Your mouse moved over the header</p>`;
}

pageTitle.addEventListener("mouseover", mouseH1)

// 3. Mouseleave h1 tag

function leaveH1() {
  outputEl.innerHTML = `<p>You left me!</p>`;
}

pageTitle.addEventListener("mouseleave", leaveH1)

// 4. Input field mirror

let inputField = document.getElementById("keypress-input");

function typeOut() {
  outputEl.innerHTML = inputField.value;
}


inputField.addEventListener("keydown", typeOut) //I used keydown instead of keypress because it takes into account backspace

// 5. Add color button
// 6. Hulkify
// 7. Border
// 8. Rounding

let color = document.getElementById("add-color");
let hulkified = document.getElementById("make-large");
let capture = document.getElementById("add-border");
let rounded = document.getElementById("add-rounding");
let guineaPig = document.getElementById("guinea-pig");

function colorfy(){
  guineaPig.style.color = 'blue';
}

function hulkify(){
  guineaPig.style.fontSize = '2em';
}

function capturing(){
  guineaPig.style.border = '2px solid red';
}

function rounding(){
  guineaPig.style.borderRadius = '5px';
}

color.addEventListener("click", colorfy)
hulkified.addEventListener("click", hulkify)
capture.addEventListener("click", capturing)
rounded.addEventListener("click", rounding)

// 9. & 10. First and last seciton bold / bold and italic

section[0].style.fontWeight = 'bold';
section[section.length-1].style.fontWeight ='bold';

// 11. Make buttons display block

let buttons = document.getElementsByTagName("button");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].style.display = 'block';
}
