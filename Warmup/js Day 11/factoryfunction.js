function factory(name, price) {
  let stock = 20;
  return {
    name,
    price,
    checkStock() {
      console.log(`${stock} Product`);
    },
    purchase(amt) {
      if (amt <= stock) stock -= amt;
      console.log(`${stock} Left`);
    },
    refill(amt) {
      stock += amt;
      console.log(`${stock} Available`);
    },
  };
}
const p1 = factory("ifun", 10);
p1.refill(10);
const p2 = factory("nokia", 10);
console.log(p2.name);
