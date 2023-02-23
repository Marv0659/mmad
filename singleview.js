//lav url search objekt
const urlParams = new URLSearchParams(window.location.search);
//find id

const id = urlParams.get("id");
const navn = urlParams.get("name");
let ting;

const url = "https://mmaddb-cd0d.restdb.io/rest/food/" + id;
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

function vis(ting) {
  console.log(ting);

  document.querySelector(".navn").textContent = ting.name;
  document.querySelector(".billede").src = "img/" + ting.image;
  document.querySelector(".sværhed").textContent = "Sværhedsgrad: " + ting.difficulity;
  document.querySelector(".tid").textContent = "Tilberedningstid: " + ting.cookingTime + " min";
  document.querySelector(".ingredienser").textContent = ting.ingredients;
  document.querySelector(".opskrift").textContent = ting.description;
  document.querySelector(".rating").textContent = "Rating: " + ting.rating + "/6";
}

hentData();
