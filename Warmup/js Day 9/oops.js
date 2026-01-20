function CreatePencil(name, color, price, title) {
  this.name = name;
  this.color = color;
  this.price = price;
  this.title = title;
}

CreatePencil.prototype.print = function () {
  let h1 = document.createElement("h1");
  h1.textContent = this.title;
  h1.style.color = this.color;
  document.body.appendChild(h1);
};

let p1 = new CreatePencil("doms", "red", 10, "its DOMS Pencil");
let p2 = new CreatePencil("Nataraj", "black", 10, "its NATARAJ Pencil");

// hard copy
let a = { name: "anuj" };
let b = { ...a };

// prototype inheritance
let x = { name: "anuj" };
let y = Object.create(x);
