function showAnimation() {
  const item = document.querySelector(".what_i_do-items");
  const items = document.querySelectorAll(".what_i_do-items");
  const itemsPosition = item.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.3;

  const itemTitle = document.querySelector(".what_i_do-title");
  const itemTitlePosition = itemTitle.getBoundingClientRect().top;

  if (itemTitlePosition < screenPosition) {
    itemTitle.classList.add("anim");
  }

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
