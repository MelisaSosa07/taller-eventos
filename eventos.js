const pre = document.querySelector("#pre");
function handleClick(e) {
  pre.textContent += `Hola soy el div ${e.currentTarget.tagName}\n`;
}

const div = document.querySelector("#div");
div.addEventListener("click", handleClick);