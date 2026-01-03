const inpulEL = document.getElementById("input");
let on = false;
function onoff() {
  on = true;
  setTimeout(() => {
    inpulEL.value =
      "System Opening.....\n1)Check Balance\n2)Withdraw\n3)Deposit\n4)Exit";
  }, 1000);
  inpulEL.value = "System Opening.....";
}
let balance = 100000;
const userChoice = Number(inpulEL.value);

function operation(userChoice) {
  if (!on) {
    return;
  }
  switch (userChoice) {
    case 1: {
      inpulEL.value = `Current Balance Rs.${balance}`;
      break;
    }
    case 2: {
      balance -= 10000;
      inpulEL.value = `Rs.${10000} Withdraw\nCurrent Balance Rs.${balance}`;
      break;
    }
    case 3: {
      balance += 10000;
      inpulEL.value = `Rs.${10000} Deposited\nCurrent Balance Rs.${balance}`;
      break;
    }
    case 4: {
      setTimeout(() => {
        inpulEL.value = "";
      }, 1000);
      inpulEL.value = "System Closing......";
    }
  }
}
