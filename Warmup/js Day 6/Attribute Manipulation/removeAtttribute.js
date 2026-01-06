const anchor = document.querySelector("a");
anchor.removeAttribute("href");

anchor.removeAttribute("target"); // optional
anchor.style.pointerEvents = "none"; // disables click
anchor.style.color = "gray"; // show as disabled
