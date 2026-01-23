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
    setBalance,
    withdrawBalance,
    checkBalance,
  };
})();

// Bank.setBalance(10000);
// Bank.withdrawBalance(10000); 
