let Bank = (function () {
  let balance = 100000;
  function checkBalance() {
    console.log(balance);
  }
  function withdrawBalance(amt) {
    if (balance >= amt) balance -= amt;
    console.log(balance);
  }
  function setBalance(amt) {
    balance += amt;
    console.log(balance);
  }

  return {
    in: setBalance,
    out: withdrawBalance,
    see: checkBalance,
  };
})();

Bank.in(10000);
Bank.out(10000);
