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
const fun = abcd();
fun();
fun();
fun();



const fun2 = abcd();
fun2();
fun2();
fun2();
fun2();
