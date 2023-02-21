//lav url search objekt
const urlParams = new URLSearchParams(window.location.search);
//find id

const id = urlParams.get("id");
const navn = urlParams.get("navn");
let product;

const url = `https://mmaddb-cd0d.restdb.io/rest/food/${id}`;
const options = {
  headers: {
    "x-apikey": "63ef6b88478852088da683da",
  },
};

async function hentData() {
  const respons = await fetch(url, options);
  const json = await respons.json();
  vis(json);
}

function vis(json) {
  console.log(json);
  json.forEach((product) => {
    document.querySelector(".navn").textContent = product.name;
    document.querySelector(".billede").src = "img/" + product.image;
    document.querySelector(".sværhed").textContent = "Sværhedsgrad: " + product.difficulity;
    document.querySelector(".tid").textContent = "Tilberedningstid: " + product.cookingTime + " min";
    document.querySelector(".ingredienser").textContent = product.ingredients;
    document.querySelector(".opskrift").textContent = product.description;
    document.querySelector(".rating").textContent = "Rating: " + product.rating + "/6";
  });
}

hentData();
