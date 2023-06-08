// make a time for loading page
setTimeout(() => {
  document.querySelector(".loading").style.display = "none";
}, 500);

//show links when its click
let share = document.querySelector(".share-icon");
let shareLink = document.querySelector(".links");
share.onclick = function (even) {
  even.stopPropagation();
  shareLink.classList.toggle("open");
};
//click any where
document.addEventListener("click", (ele) => {
  if (ele.target !== share && ele.target !== shareLink) {
    if (shareLink.classList.contains("open")) {
      shareLink.classList.remove("open");
    }
  }
});
//stop propagation on links
shareLink.onclick = function (e) {
  //stop propogation
  e.stopPropagation();
};

// now lets do clicked in link and give the check send then back to normal way
let links = document.querySelectorAll(".links a");

links.forEach((link) => {
  link.addEventListener("click", (ele) => {
    let color = ele.target.parentElement.querySelector(
      ".loading-share .dot-rotate"
    ).dataset.color;
    ele.target.parentElement.querySelector(
      ".loading-share .dot-rotate"
    ).style.borderBottomColor = color;

    ele.target.parentElement.querySelector(".fa-check").style.color = color;

    ele.target.parentElement
      .querySelector(".loading-share")
      .classList.toggle("active");
    setTimeout(function () {
      ele.target.parentElement
        .querySelector(".loading-share")
        .classList.remove("active");
    }, 1000);
    setTimeout(function () {
      ele.target.style.display = "none";
      ele.target.parentElement.querySelector(".fa-check").style.display =
        "block";
    }, 1000);
    setTimeout(function () {
      ele.target.style.display = "block";
      ele.target.parentElement.querySelector(".fa-check").style.display =
        "none";
    }, 2000);
  });
});

//and the last lets try to open the img and make a pop up okay ? -okay
let gallery = document.querySelector(".main .img img");

gallery.onclick = function (img) {
  //create overlay element
  let overlay = document.createElement("div");

  // add class to overlay
  overlay.classList.add("popup-overlay");

  //append overlay to body
  document.body.appendChild(overlay);

  //create popup
  let popupBox = document.createElement("div");

  // add class to popupBox
  popupBox.classList.add("popup-box");
  //create img
  let popupImg = document.createElement("img");

  //set src
  popupImg.src = img.target.src;

  //add img to pupupBox
  popupBox.appendChild(popupImg);

  //append popupbox to popup-overlay
  document.body.appendChild(popupBox);

  //create close span
  let closeButton = document.createElement("span");
  closeButton.classList.add("img-close");

  // create close text
  let closeText = document.createTextNode("X");

  closeButton.appendChild(closeText);

  popupBox.appendChild(closeButton);
};
//close popup

document.addEventListener("click", (ele) => {
  if (ele.target.className == "img-close") {
    ele.target.parentElement.remove();

    document.querySelector(".popup-overlay").remove();
  }
});
