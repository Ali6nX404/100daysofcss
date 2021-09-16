let arr = document.querySelectorAll(".menu-icon div");
let menu = document.getElementById("menu");
menu.onclick = function () {
  if (menu.classList.contains("active")) {
    arr.forEach((element) => {
      element.classList.remove("active");
      element.classList.add("no-animation");
    });
    menu.classList.remove("active");
  } else {
    menu.classList.add("active");
    arr.forEach((element) => {
      element.classList.remove("no-animation");
      element.classList.add("active");
    });
  }
};
