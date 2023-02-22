const urlParams = new URLSearchParams(window.location.search);
const cat = urlParams.get("cat");
const url = `https://mmaddb-cd0d.restdb.io/rest/food?limit=20&category=${cat}`;

document.querySelector("h1").textContent = cat;

const options = {
  headers: {
    "x-apikey": "63ef6b88478852088da683da",
  },
};

async function getData() {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);

  // 2 loope gennem data
  data.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);
  const template = document.querySelector("#cardLayoutTemplate").content;

  const copy = template.cloneNode(true);
  copy.querySelector(".navn").textContent = product.name;
  copy.querySelector("img").src = "img/" + product.image;
  copy.querySelector(".sværhed").textContent = "Sværhedsgrad: " + product.difficulity;
  copy.querySelector(".tid").textContent = "Tilberedningstid: " + product.cookingTime + " min";
  copy.querySelector("a").href = "singleview.html?id=" + product._id;

  document.querySelector("main").appendChild(copy);
}

getData();
