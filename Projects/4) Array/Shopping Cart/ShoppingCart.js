let productList = [];
const productNameEL = document.getElementById("product-name");
const productQuantityEL = document.getElementById("product-quantity");
const productPriceEL = document.getElementById("product-price");
const message = document.getElementById("message");
function addCart() {
  const productName = productNameEL.value.trim();
  const productQuantity = parseInt(productQuantityEL.value);
  const productPrice = parseInt(productPriceEL.value);
  if (productName === "" || isNaN(productPrice)) {
    message.textContent = "Enter Your Cart Information";
    message.style.color = "red";
    message.style.opacity = "1";
    setTimeout(() => {
      message.style.opacity = "0";
      message.style.transition = "opacity .5s";
    }, 2000);
    return;
  }
  // let found = false;
  // productList.forEach((list) => {
  //   if (list.productName === productName) {
  //     list.productQuantity += productQuantity;
  //     found = true;
  //   }
  // });
  // if (!found) {
  //   productList.push({ productName, productQuantity, productPrice });
  // }

  const found = productList.find((item) => item.productName === productName);

  if (found) {
    found.productQuantity += productQuantity;
  } else {
    productList.push({ productName, productQuantity, productPrice });
  }

  productPriceEL.value = "";
  productNameEL.value = "";
  productQuantityEL.value = "";
}
