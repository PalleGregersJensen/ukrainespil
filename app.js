window.addEventListener("load", start);

function start() {
  console.log("start");
  document.querySelector("#missile_sprite").addEventListener("click);
  document.querySelector("#missile_container").classList.add("falling-diagonal");
}

function jump() {
  document.querySelector("#orange_container").classList.remove("move");
  document.querySelector("#orange_container").classList.add("jump");
}
