const menu = document.getElementById('menuOpen');
const mainContainer = document.getElementById('mainContainer');

function menuOpen() {
  menu.style.display = "flex";
  mainContainer.style.display = "none";
}

function menuClose() {
  menu.style.display = "none";
  mainContainer.style.display = "block";
}

const element = document.getElementById("popUpCard");
const actionBtn = document.querySelectorAll('.action');
const workCards = document.querySelectorAll('.frame');
const headerTwo = document.createElement("h2");
const popupList = document.createElement("ul");
const image = document.createElement("img");
const content = document.createElement("p");
const container = document.createElement("div");
const division = document.createElement("div");
const closeBtn = document.createElement("button");
const divDesBtn = document.createElement("div");
const mainDiv = document.createElement("div");
const btnImages = [{
  name: "See Live",
  path: "Assets/Icon-live.png",
},
{
  name: "See Source",
  path: "Assets/git-white.png",
}];

headerTwo.classList.add('popup-header');
popupList.classList.add('popup-list');
image.classList.add('popup-image');
content.classList.add('popup-text');
division.classList.add('popup-btn-container');
closeBtn.classList.add('popup-close-btn');
divDesBtn.classList.add('des-btn');
mainDiv.classList.add('main-div');

container.setAttribute('id', "container");
headerTwo.setAttribute('id', "popupHeader");
popupList.setAttribute('id', "popupList");
image.setAttribute('id', "popupImage");
content.setAttribute('id', "popupText");
division.setAttribute('id', "popupBtnContainer");
closeBtn.setAttribute('id', "popupCloseBtn");
divDesBtn.setAttribute('id', "divDesBtn");
mainDiv.setAttribute('id', "mainDiv");

actionBtn.forEach((btn, i) => (
  btn.setAttribute('id', data[i].id)
))

for (let i = 0; i < workCards.length; i++) {
  workCards[i].style.backgroundImage = 'url("' + data[i].thumbnails + '")';
  workCards[i].children[0].innerHTML = data[i].name;
  workCards[i].children[1].innerHTML = data[i].description;
}

function cardClicked() {
  mainContainer.style.filter = "blur(5px)";
  element.style.display = "flex";
  element.style.position = "fixed";

  let elemId = this.event.target.id;
  let selectedProject = data.find(element => elemId == element.id)

  for (let i = 0; i < selectedProject.technologies.length; i++) {
    let popupItem = document.createElement("li");
    popupItem.classList.add('popup-item');
    popupItem.setAttribute('id', "popupItem");
    popupItem.innerHTML = selectedProject.technologies[i];
    popupList.appendChild(popupItem);
  }

  headerTwo.innerHTML = selectedProject.name;
  image.src = selectedProject.thumbnails
  image.alt = selectedProject.name + " image";
  content.innerHTML = selectedProject.content;

  for (let i = 0; i < btnImages.length; i++) {
    let popupButton = document.createElement("a");
    let btnIcon = document.createElement("img");

    popupButton.classList.add('popup-btn');
    popupButton.setAttribute('id', "popupButton");
    btnIcon.setAttribute('id', "btnIcon");
    popupButton.innerHTML = btnImages[i].name;
    popupButton.target = "_blank";
    if (btnImages[i].name === "See Live") {
      popupButton.href = selectedProject.live
    }
    if (btnImages[i].name === "See Source") {
      popupButton.href = selectedProject.source
    }

    btnIcon.src = btnImages[i].path;
    btnIcon.alt = "Action Icon";
    popupButton.appendChild(btnIcon);
    division.appendChild(popupButton);
  };

  function removeElements() {
    let rmvClose = document.getElementById("popupCloseBtn");
    let rmvCloseIcon = document.getElementById("closeIcon");
    let rmvPopupItem = document.getElementById("popupItem");
    let itemParent = rmvPopupItem.parentNode;
    let rmvPopupList = document.getElementById("popupList");

    rmvClose.parentNode.removeChild(rmvClose);
    rmvCloseIcon.parentNode.removeChild(rmvCloseIcon);
    rmvPopupList.parentNode.removeChild(rmvPopupList);

    for (let i = 0; i < selectedProject.technologies.length; i++) {
      itemParent.removeChild(itemParent.firstChild);
    }

    for (let i = 0; i < 2; i++) {
      let rmvPopupButton = document.getElementById("popupButton");
      let rmvBtnIcon = document.getElementById("btnIcon");
      rmvPopupButton.parentNode.removeChild(rmvPopupButton);
    }
  }

  function popupClose() {
    mainContainer.style.filter = "none";
    element.style.display = "none";
    element.style.position = "static";
    removeElements();
  }

  function closeBtnAppend() {
    let closeIcon = document.createElement('img');
    closeIcon.setAttribute('id', "closeIcon");
    closeIcon.src = "Assets/Icon.png";
    closeIcon.alt = "close icon";
    closeBtn.appendChild(closeIcon);
    closeBtn.onclick = popupClose;
  }

  closeBtnAppend();
  element.appendChild(container);
  container.appendChild(closeBtn);
  container.appendChild(headerTwo);
  container.appendChild(popupList);
  mainDiv.appendChild(image);
  mainDiv.appendChild(divDesBtn)
  divDesBtn.appendChild(content);
  divDesBtn.appendChild(division);
  container.appendChild(mainDiv);
}
