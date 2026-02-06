let filters = {
  brightness: { value: 100, min: 0, max: 200, unit: "%" },
  contrast: { value: 100, min: 0, max: 200, unit: "%" },
  saturation: { value: 100, min: 0, max: 200, unit: "%" },
  hueRotation: { value: 0, min: 0, max: 360, unit: "deg" },
  grayscale: { value: 0, min: 0, max: 200, unit: "%" },
  blur: { value: 0, min: 0, max: 20, unit: "px" },
  sepia: { value: 0, min: 0, max: 200, unit: "%" },
  opacity: { value: 100, min: 0, max: 100, unit: "%" },
  invert: { value: 0, min: 0, max: 200, unit: "%" },
};

const filtersContainer = document.querySelector(".filter");
const imageCanvas = document.querySelector("#image-canvas");
const canvasCtx = imageCanvas.getContext("2d");
const imageInput = document.querySelector("#image-input");
let file = null;
let image = null;

function createFilterEl(name, unit, value, min, max) {
  const div = document.createElement("div");
  div.classList.add("filters");

  const p = document.createElement("p");
  p.innerText = name;

  const input = document.createElement("input");
  input.type = "range";
  input.min = min;
  input.max = max;
  input.value = value;
  input.id = name;

  div.appendChild(p);
  div.appendChild(input);

  input.addEventListener("input", (event) => {
    filters[name].value = input.value;
    applyFilter();
  });

  return div;
}

function createFilters() {
  Object.keys(filters).forEach((filter) => {
    const filterElement = createFilterEl(
      filter,
      filters[filter].unit,
      filters[filter].value,
      filters[filter].min,
      filters[filter].max,
    );
    filtersContainer.appendChild(filterElement);
  });
}

createFilters();

imageInput.addEventListener("change", (event) => {
  const imagePlaceholder = document.querySelector(".placeholder-img");
  file = event.target.files[0];
  if (!file) return;
  imageCanvas.style.display = "block";
  const img = new Image();
  img.src = URL.createObjectURL(file);

  img.onload = () => {
    image = img;
    imagePlaceholder.style.display = "none";
    imageCanvas.width = img.width;
    imageCanvas.height = img.height;
    canvasCtx.drawImage(img, 0, 0);
  };
});

function applyFilter() {
  if (!image) return;

  canvasCtx.clearRect(0, 0, imageCanvas.width, imageCanvas.height);

  canvasCtx.filter = `
    brightness(${filters.brightness.value}%)
    contrast(${filters.contrast.value}%)
    saturate(${filters.saturation.value}%)
    hue-rotate(${filters.hueRotation.value}deg)
    grayscale(${filters.grayscale.value}%)
    blur(${filters.blur.value}px)
    sepia(${filters.sepia.value}%)
    opacity(${filters.opacity.value}%)
    invert(${filters.invert.value}%)
  `;

  canvasCtx.drawImage(image, 0, 0);
}

document.getElementById("btn-reset").addEventListener("click", () => {
  filters = {
    brightness: { value: 100, min: 0, max: 200, unit: "%" },
    contrast: { value: 100, min: 0, max: 200, unit: "%" },
    saturation: { value: 100, min: 0, max: 200, unit: "%" },
    hueRotation: { value: 0, min: 0, max: 360, unit: "deg" },
    grayscale: { value: 0, min: 0, max: 200, unit: "%" },
    blur: { value: 0, min: 0, max: 20, unit: "px" },
    sepia: { value: 0, min: 0, max: 200, unit: "%" },
    opacity: { value: 100, min: 0, max: 100, unit: "%" },
    invert: { value: 0, min: 0, max: 200, unit: "%" },
  };
  applyFilter();
  filtersContainer.innerHTML = "";
  createFilters();
});

document.getElementById("btn-download").addEventListener("click", () => {
  const link = document.createElement("a");
  link.download = `edited-${Date.now()}.png`;
  link.href = imageCanvas.toDataURL("image/jpeg", 1);
  link.click();
});

const presets = {
  drama: {
    brightness: 95,
    contrast: 160,
    saturation: 130,
    hueRotation: 0,
    grayscale: 0,
    blur: 0,
    sepia: 10,
    opacity: 100,
    invert: 0,
  },

  vintage: {
    brightness: 105,
    contrast: 90,
    saturation: 80,
    hueRotation: 10,
    grayscale: 10,
    blur: 0,
    sepia: 40,
    opacity: 100,
    invert: 0,
  },

  oldMoney: {
    brightness: 98,
    contrast: 115,
    saturation: 75,
    hueRotation: 5,
    grayscale: 15,
    blur: 0,
    sepia: 20,
    opacity: 100,
    invert: 0,
  },

  pop: {
    brightness: 110,
    contrast: 130,
    saturation: 160,
    hueRotation: 0,
    grayscale: 0,
    blur: 0,
    sepia: 0,
    opacity: 100,
    invert: 0,
  },

  BW: {
    brightness: 105,
    contrast: 130,
    saturation: 0,
    hueRotation: 0,
    grayscale: 100,
    blur: 0,
    sepia: 0,
    opacity: 100,
    invert: 0,
  },

  cool: {
    brightness: 100,
    contrast: 110,
    saturation: 95,
    hueRotation: 200,
    grayscale: 0,
    blur: 0,
    sepia: 0,
    opacity: 100,
    invert: 0,
  },

  warm: {
    brightness: 110,
    contrast: 105,
    saturation: 120,
    hueRotation: 15,
    grayscale: 0,
    blur: 0,
    sepia: 25,
    opacity: 100,
    invert: 0,
  },

  soft: {
    brightness: 115,
    contrast: 85,
    saturation: 105,
    hueRotation: 0,
    grayscale: 0,
    blur: 3,
    sepia: 10,
    opacity: 100,
    invert: 0,
  },

  moody: {
    brightness: 85,
    contrast: 140,
    saturation: 90,
    hueRotation: 0,
    grayscale: 20,
    blur: 0,
    sepia: 15,
    opacity: 100,
    invert: 0,
  },
};

const presetContainer = document.querySelector(".preset-container");

Object.keys(presets).forEach((pName) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerHTML = pName;
  presetContainer.appendChild(btn);

  btn.addEventListener("click", () => {
    const preset = presets[pName];
    Object.keys(preset).forEach((filterName) => {
      console.log(filterName);
      filters[filterName].value = preset[filterName];
    });
    applyFilter();
    filtersContainer.innerHTML = "";
    createFilters();
  });
});
