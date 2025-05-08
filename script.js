const gallery = document.getElementById("gallery");
const popup = document.getElementById("popup");
const popupImg = document.getElementById("popup-img");
const closeBtn = document.getElementById("close");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

const images = Array.from(gallery.getElementsByTagName("img"));
let currentIndex = 0;

function showImage(index) {
  currentIndex = index;
  popupImg.src = images[currentIndex].src;
  popup.style.display = "flex";
  gallery.classList.add("blurred");
}

function closePopup() {
  popup.style.display = "none";
  gallery.classList.remove("blurred");
}

images.forEach((img, index) => {
  img.addEventListener("click", () => {
    showImage(index);
  });
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  popupImg.src = images[currentIndex].src;
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  popupImg.src = images[currentIndex].src;
});

closeBtn.addEventListener("click", closePopup);
