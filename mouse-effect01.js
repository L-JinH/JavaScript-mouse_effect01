//info에 span에 수치 넣기.

window.addEventListener("mousemove", function (event) {
  document.querySelector(".clientX").innerText = event.clientX;
  document.querySelector(".clientY").innerText = event.clientY;
  document.querySelector(".screenX").innerText = event.screenX;
  document.querySelector(".screenY").innerText = event.screenY;
  document.querySelector(".offsetX").innerText = event.offsetX;
  document.querySelector(".offsetY").innerText = event.offsetY;
  document.querySelector(".pageX").innerText = event.pageX;
  document.querySelector(".pageY").innerText = event.pageY;
});

// mouse animation 구현
//1. mouse 커서를 안보이게 하고 커서 따라다니게 하기.
//2. 커서 위치 조정.
//3. style class add and remove
const cursor = document.querySelector(".cursor");
const spanOverSo = document.querySelector(".mian .so");
const spanOverMu = document.querySelector(".mian .mu");
const spanOverMe = document.querySelector(".mian .me");

window.addEventListener("mousemove", function (ev) {
  cursor.style.left = ev.clientX - 25 + "px";
  cursor.style.top = ev.clientY - 25 + "px";
});

// step1;
spanOverSo.addEventListener("mousemove", function () {
  cursor.classList.add("style1");
});
spanOverSo.addEventListener("mouseout", function () {
  cursor.classList.remove("style1");
});

spanOverMu.addEventListener("mousemove", function () {
  cursor.classList.add("style2");
});
spanOverMu.addEventListener("mouseout", function () {
  cursor.classList.remove("style2");
});

spanOverMe.addEventListener("mousemove", function () {
  cursor.classList.add("style3");
});
spanOverMe.addEventListener("mouseout", function () {
  cursor.classList.remove("style3");
});
