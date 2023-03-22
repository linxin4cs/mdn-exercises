const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

/* 添加图片循环 */

const imgUrls = [
  "images/pic1.jpg",
  "images/pic2.jpg",
  "images/pic3.jpg",
  "images/pic4.jpg",
  "images/pic5.jpg",
];

for (const imgUrl of imgUrls) {
  const newImage = document.createElement("img");
  newImage.setAttribute("src", imgUrl);
  thumbBar.appendChild(newImage);
}

const thumbBarImages = document.querySelectorAll(".thumb-bar img");

for (const img of thumbBarImages) {
  img.addEventListener("click", () => {
    displayedImage.src = img.src;
  });
}

/* 编写 变暗/变量 按钮功能 */

btn.addEventListener("click", () => {
  const type = btn.getAttribute("class");

  if (type === "dark") {
    btn.setAttribute("class", "light");
    overlay.style.display = "block";
    btn.textContent = "变亮";
  } else {
    btn.setAttribute("class", "dark");
    overlay.style.display = "none";
    btn.textContent = "变暗";
  }
});
