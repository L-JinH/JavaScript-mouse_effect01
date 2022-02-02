window.addEventListener("mousemove", function (event) {
  document.querySelector(".clientX").innerHTML = event.clientX;
  document.querySelector(".clientY").innerHTML = event.clientY;
  document.querySelector(".screenX").innerHTML = event.screenX;
  document.querySelector(".screenY").innerHTML = event.screenY;
  document.querySelector(".offsetX").innerHTML = event.offsetX;
  document.querySelector(".offsetY").innerHTML = event.offsetY;
  document.querySelector(".pageX").innerHTML = event.pageX;
  document.querySelector(".pageY").innerHTML = event.pageY;
});

const cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", function (e) {
  cursor.style.left = e.clientX - 25 + "px";
  cursor.style.top = e.clientY - 25 + "px";
});

const add = document.querySelectorAll(".main span");

add.forEach((x, index) => {
  x.addEventListener("mousemove", () => {
    cursor.classList.add("style" + (index + 1));
  });
  x.addEventListener("mouseout", () => {
    cursor.classList.remove("style" + (index + 1));
  });
});
