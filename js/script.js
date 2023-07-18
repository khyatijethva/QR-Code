const container = document.querySelector(".qr_code-banner");
const card = document.querySelector(".qr-code-wrapper");
const qrImage = document.querySelector(".qr-image");

container.addEventListener("mousemove", (rotate) => {
    let x = (innerWidth / 2 - rotate.pageX) / 15;
    let y = (innerHeight / 2 - rotate.pageY) / 15;
    card.style.transform = "rotateY(" + x + "deg) rotateX(" + y + "deg)";
});

//card effects on mouse over the card
container.addEventListener("mouseover", () => {
    qrImage.style.transform = "translate3d(0, 0, 220px)";
    card.style.transition = "all 0.1s linear";
});

//card back to normal when mouse out
container.addEventListener("mouseout", () => {
    card.style.transform = "rotateY(0deg) rotateX(0deg)";
    card.style.transition = "all 0.5s linear";
    qrImage.style.transform = "translate3d(0, 0, 0)";
});