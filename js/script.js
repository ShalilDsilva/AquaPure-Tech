const header = document.querySelector("header")

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 60)
})

let menu = document.querySelector('#header-menu-icon')
let navbar = document.querySelector('.header-navbar')

menu.onclick = () => {
  menu.classList.toggle('bx-x')
  navbar.classList.toggle('open')
}


let li = document.querySelectorAll(".faq-text li");
for (var i = 0; i < li.length; i++) {
  li[i].addEventListener("click", (e) => {
    let clickedLi;
    if (e.target.classList.contains("question-arrow")) {
      clickedLi = e.target.parentElement;
    } else {
      clickedLi = e.target.parentElement.parentElement;
    }
    clickedLi.classList.toggle("showAnswer");
  });
}

