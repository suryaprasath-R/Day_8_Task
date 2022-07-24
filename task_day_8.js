// Get all the countries from Asia continent /region using Filter function

var request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v2/all", true);

request.send();

request.onload = function () {
  var data = JSON.parse(request.response);
  data.filter((update) => {
    if (update.region == "Asia") {
      console.log("countries from Asia continent /region", update.name);
    }
  });
};

// var request = new XMLHttpRequest();
// request.open("GET", "https://restcountries.com/v3.1/all", true);
// request.send();
// request.onload = function () {
//   var data = JSON.parse(request.response);
//   data
//     .filter((i) => i.continents === "Asia")
//     .forEach((i, j) => console.log(`country ${j} ${i.name}`));
// };

// Get all the countries with a population of less than 2 lakhs using Filter function

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", true);
request.send();
request.onload = function () {
  var data = JSON.parse(request.response);
  data
    .filter((i) => i.population < 200000)
    .forEach((i, j) =>
      console.log(`country ${j} ${i.name} || POPULATION- ${i.population}`)
    );
};

// Print the following details name, capital, flag using forEach function

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", true);
request.send();
request.onload = function () {
  var data = JSON.parse(request.response);
  data.forEach((i, j) =>
    console.log(
      `country ${j} NAME- ${i.name} || CAPITAL-${i.capital} || FLAG- ${i.flag} `
    )
  );
};

// Print the total population of countries using reduce function

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", true);
request.send();
request.onload = function () {
  var data = JSON.parse(request.response);
  var TOTAL = data.map((i) => i.population).reduce((a, b) => a + b);
  console.log(`TOTAL POPULATION OF ALL COUNTRIES IS -${TOTAL}`);
};

// Print the country which uses US Dollars as currency.

var request = new XMLHttpRequest();
request.open(
  "GET",
  "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json",
  true
);
request.send();
request.onload = function () {
  var data = JSON.parse(request.response);
  for (let i in data) {
    let currency = data[i].currencies;
    for (let j = 0; j < currency.length; j++) {
      if (currency[j].code == "USD") {
        console.log(data[i].name);
      }
    }
  }
};
