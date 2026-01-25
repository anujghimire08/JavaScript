document.querySelector("button").addEventListener("click", async () => {
  let heavy = await import("./heavyCode.js");
  console.log(heavy);
  heavy.heavyFile();
});
