const h1 = document.createElement("h1");
h1.textContent = "Pokhara, Phewa Lake";
h1.style.color = "blue";
h1.style.textAlign="center"
document.body.appendChild(h1);
const img = document.createElement("img");
img.setAttribute(
  "src",
  "https://images.unsplash.com/photo-1610997686651-98492fd08108?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
);
img.setAttribute("alt", "Pokhara Fewa");
img.style.width = "100%";
console.dir(img);
// img.hidden = true;
document.body.appendChild(img);

const p = document.createElement("p");
p.innerHTML = `<b>Pokhara</b>, known as the <mark>tourism capital of Nepal</mark>, is famous for its natural beauty and peaceful environment. One of its main attractions is Phewa Lake, the second-largest lake in Nepal. The lake is surrounded by green hills and reflects the snow-capped <em>Annapurna</em> and <em>Machhapuchhre</em> mountains, creating a stunning view.

In the middle of the lake is the <em>Tal Barahi Temple</em>, which tourists visit by boat. Phewa Lake is also popular for boating, fishing, and relaxing. The area around the lake is ideal for nature walks, photography, and picnics.

Pokhara offers a calm and beautiful atmosphere, making it different from the busy life of Kathmandu. Tourists can enjoy both adventure and relaxation here. Visiting Phewa Lake is a must for anyone wanting to experience the beauty and serenity of Nepal.`;
p.style.fontSize = "1.9rem";
document.body.appendChild(p);
