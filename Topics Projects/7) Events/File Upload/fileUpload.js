const btn = document.getElementById("btn");
const fileinp = document.getElementById("file-input");

btn.addEventListener("click", () => {
  fileinp.click();
});

fileinp.addEventListener("change", (info) => {
  if (info.target.files.length > 0) {
    btn.innerText = info.target.files[0].name;
  }
});
//files.name
