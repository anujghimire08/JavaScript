function capitalize(val) {
  return val.charAt(0).toUpperCase() + val.slice(1);
}

capitalize("anuj");

Array.prototype.myMap = function (callback) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(callback(this[i], i, this));
  }
  return newArr;
};

let ans = [1, 2, 3].myMap((n) => n * 2);
console.log(ans);
