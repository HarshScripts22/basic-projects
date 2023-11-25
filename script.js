let icon = document.querySelector(".mode");
// icon.onclick = function () {
//   document.body.classList.toggle("dark-theme");
// };
icon.addEventListener("click", (e) => {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    icon.src = "./img src/dark theme icon/dark theme icon/sun.png";
  } else {
    icon.src = "./img src/dark theme icon/dark theme icon/moon.png";
  }
});
