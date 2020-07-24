function showAnimation() {
  const mainTitle = document.querySelector(".section-title");
  const mainTitles = document.querySelectorAll(".section-title");
  const horizontalLine = document.querySelector(".horizontal-line");
  const title = document.querySelector(".what_i_do-title");
  const titles = document.querySelectorAll(".what_i_do-title");
  const subtitle = document.querySelector(".what_i_do-subtitle");
  const subtitles = document.querySelectorAll(".what_i_do-subtitle");
  const myInfo = document.querySelector(".who_i_am-title");
  const myInfoSub = document.querySelector(".who_i_am-sub");
  const myInfoP = document.querySelector(".who_i_am-subtitle");
  const myInfoImg = document.querySelector(".who_i_am-img");
  const worksSubtitle = document.querySelector(".my_works-subtitle");
  const works = document.querySelector(".works");
  const screenPosition = window.innerHeight / 1.3;

  titles.forEach(function (title) {
    const titlesPosition = title.getBoundingClientRect().top;
    if (titlesPosition < screenPosition) {
      title.classList.add("animation-appear");
    } else {
      title.classList.remove("animation-appear");
    }
  });

  subtitles.forEach(function (subtitle) {
    const subtitlesPosition = subtitle.getBoundingClientRect().top;
    if (subtitlesPosition < screenPosition) {
      subtitle.classList.add("animation-appear");
    } else {
      subtitle.classList.remove("animation-appear");
    }
  });

  mainTitles.forEach(function (mainTitle) {
    const mainTitlesPosition = mainTitle.getBoundingClientRect().top;
    if (mainTitlesPosition < screenPosition) {
      mainTitle.classList.add("animation-appear");
    } else {
      mainTitle.classList.remove("animation-appear");
    }
  });

  const myInfoPosition = myInfo.getBoundingClientRect().top;
  const myInfoScreenPosition = window.innerHeight / 2.5;
  if (myInfoPosition < myInfoScreenPosition) {
    myInfo.classList.add("animation-appear");
    myInfoImg.classList.add("animation-appear");
    myInfoP.classList.add("animation-appear");
    if (screen.width <= 768) {
      myInfoSub.classList.add("myInfoSubSmall");
    } else {
      myInfoSub.classList.add("myInfoSub");
    }
  } else {
    myInfo.classList.remove("animation-appear");
    myInfoP.classList.remove("animation-appear");
    myInfoImg.classList.remove("animation-appear");
    myInfoSub.classList.remove("myInfoSub");
    myInfoSub.classList.remove("myInfoSubSmall");
  }

  const worksSubtitlePosition = worksSubtitle.getBoundingClientRect().top;
  if (worksSubtitlePosition < screenPosition) {
    worksSubtitle.classList.add("animation-appear");
    works.classList.add("animation-appear");
    works.style.transitionDelay = ".5s";
  } else {
    worksSubtitle.classList.remove("animtaion-appear");
    works.classList.remove("animation-appear");
  }
}

window.addEventListener("scroll", showAnimation);

function introAnimation() {
  const myName = document.querySelector(".main_info-title");
  const myImage = document.querySelector(".main_info-image");
  const myTitle = document.querySelector(".main_info-subtitle");
  myName.classList.add("animation-appear");
  myImage.classList.add("animation-appear");
  myTitle.classList.add("titleShow");
}

introAnimation();
