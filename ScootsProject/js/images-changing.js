const featureImage = document.querySelector(".feature img");
const smallImages = document.querySelectorAll(".small img");
const smallImagesArray = Array.from(smallImages);
const imgSRC = smallImagesArray.map(image => image.src);

smallImages.forEach(image => image.addEventListener("click", changeFeatureImage));



function changeFeatureImage() {
    featureImage.src = this.src;
    featureImage.dataset.key = this.dataset.key;
}
