const imgs = document.querySelectorAll("img");

const observer = new IntersectionObserver(
  function (entries, observer) {
    console.log(entries);
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.add("image-load");
        observer.unobserve(img);
      }
    });
  },
  {
    root: null,
    threshold: 0.1,
  },
);

imgs.forEach((img) => observer.observe(img));
