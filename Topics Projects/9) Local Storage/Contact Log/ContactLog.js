// form open close
const addNode = document.getElementById("add-note");
const formOpen = document.getElementById("modal");

addNode.addEventListener("click", () => {
  formOpen.style.display = "flex";
});

document.querySelector(".close").addEventListener("click", () => {
  formOpen.style.display = "none";
});

// form validation
const form = document.querySelector("form");
const imageEL = document.querySelector("#image");
const nameEL = document.querySelector("#name");
const hometownEL = document.querySelector("#hometown");
const purposeEL = document.querySelector("#purpose");
const buttons = document.querySelectorAll('input[type="radio"]');

form.addEventListener("submit", (a) => {
  a.preventDefault();
  let image = imageEL.value.trim();
  let name = nameEL.value.trim();
  let hometown = hometownEL.value.trim();
  let purpose = purposeEL.value.trim();

  if (image === "") {
    alert("invalid image url");
    return;
  }
  if (name === "") {
    alert("invalid name");
    return;
  }
  if (hometown === "") {
    alert("invalid hometown");
    return;
  }
  if (purpose === "") {
    alert("invalid purpose");
    return;
  }

  let isSelected = false;
  buttons.forEach((el) => {
    if (el.checked) {
      isSelected = true;
    }
  });

  if (!isSelected) {
    alert("choose categories button");
    return;
  }

  addToStorage({ image, name, hometown, purpose });

  form.reset();
  formOpen.style.display = "none";
});

function addToStorage(obj) {
  if (localStorage.getItem("info") === null) {
    let datas = [];
    datas.push(obj);
    localStorage.setItem("info", JSON.stringify(datas));
  } else {
    let datas = localStorage.getItem("info");
    datas = JSON.parse(datas);
    datas.push(obj);
    localStorage.setItem("info", JSON.stringify(datas));
  }
}

let currentIndex = 0;

function renderCards(idx = 0) {
  const stack = document.querySelector(".card-stack");
  stack.innerHTML = "";

  let infosArr = JSON.parse(localStorage.getItem("info")) || [];
  if (infosArr.length === 0) return;

  if (idx < 0) idx = infosArr.length - 1;
  if (idx >= infosArr.length) idx = 0;

  currentIndex = idx;
  const data = infosArr[currentIndex];

  const card = document.createElement("div");
  card.className = "card";

  const header = document.createElement("div");
  header.className = "header";

  const avatar = document.createElement("div");
  avatar.className = "avatar";
  avatar.style.backgroundImage = `url(${data.image})`;

  const nameWrap = document.createElement("div");
  const name = document.createElement("h3");
  name.textContent = data.name;
  nameWrap.appendChild(name);

  header.appendChild(avatar);
  header.appendChild(nameWrap);

  const info = document.createElement("div");
  info.className = "info";

  const town = document.createElement("div");
  town.innerHTML = `<b>Home town</b><span>${data.hometown}</span>`;

  const purpose = document.createElement("div");
  purpose.innerHTML = `<b>Purpose</b><span>${data.purpose}</span>`;

  info.appendChild(town);
  info.appendChild(purpose);

  const btns = document.createElement("div");
  btns.className = "buttons";

  const call = document.createElement("button");
  call.className = "call";
  call.innerHTML = `<i class="ri-phone-fill"></i>&nbsp;Call`;

  const msg = document.createElement("button");
  msg.className = "msg";
  msg.textContent = "Message";

  btns.appendChild(call);
  btns.appendChild(msg);

  card.appendChild(header);
  card.appendChild(info);
  card.appendChild(btns);

  const card2 = document.createElement("div");
  card2.className = "card";

  const card3 = document.createElement("div");
  card3.className = "card";

  stack.appendChild(card);
  stack.appendChild(card2);
  stack.appendChild(card3);
}

renderCards(0);

const upBtn = document.querySelector(".ri-arrow-up-circle-fill").parentElement;
const downBtn = document.querySelector(
  ".ri-arrow-down-circle-fill",
).parentElement;

upBtn.addEventListener("click", () => {
  renderCards(currentIndex - 1);
});

downBtn.addEventListener("click", () => {
  renderCards(currentIndex + 1);
});
