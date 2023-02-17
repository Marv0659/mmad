const url = "https://mmaddb-cd0d.restdb.io/rest/food";

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

getData();
