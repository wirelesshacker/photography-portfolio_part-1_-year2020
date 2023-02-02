const image1 = document.getElementById("image1");
image1.style.backgroundImage = "url('image1.jpg')";

const image2 = document.getElementById("image2");
image2.style.backgroundImage = "url('image2.jpg')";

const image3 = document.getElementById("image3");
image3.style.backgroundImage = "url('image3.jpg')";

const indexLink = document.getElementById("index-link");
indexLink.addEventListener("click", function(event) {
  event.preventDefault();
  alert("You are already on the index page.");
});
