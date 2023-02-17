//lav url search objekt
const urlParams = new URLSearchParams(window.location.search);
//find id

const id = urlParams.get("id");
const navn = urlParams.get("navn");
let ting;

const url = "https://mmaddb-cd0d.restdb.io/rest/food";
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
  json.forEach((ting) => {
    document.querySelector(".navn").textContent = ting.name;
    document.querySelector(".sværhed").textContent = "Sværhedsgrad: " + ting.difficulity;
    document.querySelector(".tid").textContent = ting.cookingTime + " min";
    document.querySelector(".ingredienser").textContent = ting.ingredients;
    document.querySelector(".opskrift").textContent = ting.description;
  });
}

hentData();
