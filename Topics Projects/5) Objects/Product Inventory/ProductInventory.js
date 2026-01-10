const products = [
  { name: "Laptop", price: 800, quantity: 5 },
  { name: "Mouse", price: 20, quantity: 50 },
  { name: "Keyboard", price: 30, quantity: 30 },
];

const nameEL = document.getElementById("productName");
const priceEL = document.getElementById("price");
const quantityEL = document.getElementById("quantity");
const resultList = document.getElementById("resultList");

function addProduct() {
  const name = nameEL.value.trim();
  const price = Number(priceEL.value);
  const quantity = Number(quantityEL.value);

  if (!name || !price || !quantity) {
    alert("Fill All Fields");
    return;
  }

  const exists = products.some(
    (p) => p.name.toLowerCase() === name.toLowerCase()
  );

  if (exists) {
    alert("Product Already Exists");
    quantityPlus();
    return;
  }

  products.push({ name, price, quantity });
  clearInputs();
  displayProducts();
}

function displayProducts() {
  resultList.innerHTML = "";
  products.forEach((p) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <strong>${p.name}</strong> - Price: $${p.price} - Quantity: ${
      p.quantity
    } - 
      Total Value: $${totalValue(p.price, p.quantity)}
    `;
    resultList.appendChild(div);
  });
}

function removeProduct() {
  const name = nameEL.value.trim().toLowerCase();
  const idx = products.findIndex((p) => p.name.toLowerCase() === name);

  if (idx === -1) {
    alert("Product Not Found");
    return;
  }

  products.splice(idx, 1);
  alert("Product Removed");
  clearInputs();
  displayProducts();
}

function searchProduct() {
  const name = nameEL.value.trim().toLowerCase();
  const found = products.filter((p) => p.name.toLowerCase().includes(name));

  resultList.innerHTML = "";
  if (found.length === 0) {
    alert("No Product Found");
    return;
  }

  found.forEach((p) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <strong>${p.name}</strong> - Price: $${p.price} - Quantity: ${
      p.quantity
    } - 
      Total Value: $${totalValue(p.price, p.quantity)}
    `;
    resultList.appendChild(div);
  });

  clearInputs();
}

function totalValue(price, quantity) {
  return price * quantity;
}

function clearInputs() {
  nameEL.value = "";
  priceEL.value = "";
  quantityEL.value = "";
}
function quantityPlus() {
  const name = nameEL.value.trim().toLowerCase();
  products.forEach((p) => {
    if (p.name.toLowerCase() === name) {
      p.quantity = p.quantity + Number(quantityEL.value);
    }
  });
  clearInputs();
  displayProducts();
}
