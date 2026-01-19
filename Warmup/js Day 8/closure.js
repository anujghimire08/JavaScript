function outer() {
  let x = 10;

  function inner() {
    console.log(x);
  }

  inner();
}

// outer();

function abcd() {
  let count = 0;
  return () => {
    if (count < 5) {
      count++;
      console.log(`${count} Time Clicked`);
    } else {
      console.error("Limit Exceed!");
    }
  };
}
// const fun = abcd();
// fun();
// fun();
// fun();

// const fun2 = abcd();
// fun2();
// fun2();
// fun2();
// fun2();

//Real Use Case
function pass() {
  let passcode = 12345;

  return function check(userinput) {
    return passcode === userinput;
  };
}

let login = pass();
// console.log(login(1234));

// Returning Closures as Objects
function bank() {
  let amount = 120000;
  return {
    // Old / Traditional Syntax
    deposit: function (blc) {
      amount += blc;
      return amount;
    },
    withdraw: function (blc) {
      amount -= blc;
      return amount;
    },
  };
}
let fun = bank();
// console.log(fun.deposit(10000));
// console.log(fun.withdraw(20000));

function bank() {
  let amount = 120000;
  return {
    // Modern / Shorthand Syntax
    deposit(blc) {
      amount += blc;
      return amount;
    },
    withdraw(blc) {
      amount -= blc;
      return amount;
    },
  };
}

let acc = bank();
// console.log(acc.withdraw(100000));
