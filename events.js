let section = document.getElementsByTagName("section");
let outputEl = document.getElementById("output-target");
function postToDOM() {
  outputEl.innerHTML = section[i];
}

function determineSection(){
  for (var i = 0; i < section.length; i++) {
    addEvent(section[i], "click", postToDOM);
  }
}
