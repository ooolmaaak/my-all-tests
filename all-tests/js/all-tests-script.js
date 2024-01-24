const titleEl = document.createElement("h1");
// create element in memory
titleEl.textContent = "New Heading";
titleEl.classList.add("page-tutle");

document.body.appendChild(titleEl);

const imageEl = document.createElement("img");
imageEl.src =
  "https://images.pexels.com/photos/19882770/pexels-photo-19882770.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load";

document.body.appendChild(imageEl);

const buttonEl = document.querySelector(".magic-btn");

function changeImage() {
  const newImage =
    "https://images.pexels.com/photos/18844139/pexels-photo-18844139.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load";
  imageEl.src = newImage;
}

buttonEl.addEventListener("click", changeImage);
