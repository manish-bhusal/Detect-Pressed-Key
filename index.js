var container = document.querySelector(".container");
var semiContainer = document.querySelector(".semi-container");
var key = document.querySelector(".key");
var keyKey = document.querySelector(".key-code span");
var code = document.querySelector(".code");
var codeCode = document.querySelector(".code-code span");

document.addEventListener("keydown", (e) => {
  semiContainer.classList.add("semi-semi-container");
  key.innerHTML = e.key;
  key.style.textTransform = "uppercase";
  keyKey.innerHTML = e.key;
  code.innerHTML = e.keyCode;
  codeCode.innerHTML = e.keyCode;
  console.log(e);
});
