const firstImage = document.getElementById('firstImage');
const imageContainer = document.getElementById('imageContainer');
const mainContainer = document.getElementById('mainContainer');
const originalImage = document.getElementById('originalImage');

function imageZoom() {
  console.log(firstImage.src === '');
  if (firstImage.src === '') {
    firstImage.src = originalImage.src;
    mainContainer.style.display = 'none';
    firstImage.style.height = '100vh';
    imageContainer.style.height = '100vh';
    firstImage.style.width = 'auto';
    imageContainer.style.overflowY = 'hidden';
  } else {
    firstImage.src = '';
    mainContainer.style.display = 'static';
    imageContainer.style.display = 'none';
  }
}
