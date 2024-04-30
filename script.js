import memeTokenImageData from "./data.js";
console.log(memeTokenImageData)
// Get all elements with the "meme-token-image" class
const memeTokenImages = document.querySelectorAll(".meme-image");
console.log(memeTokenImages)
// Set the image source dynamically for each element
memeTokenImages.forEach((img) => {
  img.src = memeTokenImageData.imageUrl;
});
