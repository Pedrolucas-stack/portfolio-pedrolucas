const carousel = document.querySelector(".meus_projetos");
firstArticle = carousel.querySelectorAll("article")[0];
arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, prevPageX, prevScrollLeft;

const showHideIcons = () => {
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
    arrowIcons[0].style.display = carousel.scrollLeft <= 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft >= scrollWidth - 1 ? "none" : "block";
}

arrowIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        let firstArticleWidth = firstArticle.clientWidth + 30
        carousel.scrollLeft += icon.id == "left" ? -firstArticleWidth : firstArticleWidth
        setTimeout(() => showHideIcons(), 60)
    })
});

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX; // Correção aqui
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if (!isDragStart) return;
    e.preventDefault();
    carousel.classList.add("dragging")
    let positionDiff = (e.pageX || e.touched[0].pageX) - prevPageX
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons()
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging")
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mouseleave", dragStop);
carousel.addEventListener("touchend", dragStop);


const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
})
