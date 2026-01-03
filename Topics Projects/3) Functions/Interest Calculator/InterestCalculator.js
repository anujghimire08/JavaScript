function interestCalculator() {
  const principle = Number(document.getElementById("principle").value);
  const time = Number(document.getElementById("time").value);
  const rate = Number(document.getElementById("rate").value);
  document.getElementById("result").textContent = `Your Interest is Rs.${
    (principle * time * rate) / 100
  }`;
}
