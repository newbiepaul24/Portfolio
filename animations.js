function showAnimation() {
  const item = document.querySelector(".what_i_do-items");
  const items = document.querySelectorAll(".what_i_do-items");
  const itemsPosition = item.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.3;

  if (itemsPosition < screenPosition) {
    items.forEach(function (item) {
      item.classList.add("animation-appear");
    });
  } else {
    items.forEach(function (item) {
      item.classList.remove("animation-appear");
    });
  }
}

window.addEventListener("scroll", showAnimation);

function introAnimation() {
  const myName = document.querySelector(".main_info-title");
  const myImage = document.querySelector(".main_info-image");
  const myTitle = document.querySelector(".main_info-subtitle");
  myName.classList.add("nameShow");
  myImage.classList.add("nameShow");
  myTitle.classList.add("titleShow");
}

introAnimation();
