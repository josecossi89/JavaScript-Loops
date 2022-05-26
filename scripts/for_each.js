const numbers = [1, 2, 3, 4, 5];
numbers.forEach((number, i) => {
  console.log(number, i);
});

const countries = ["Finland", "Sweden", "Norway", "Denmark", "Iceland"];
countries.forEach((country, i, arr) => {
  console.log(i, country.toUpperCase());
});

const nums = [1, 2, 3, 4, 5];
for (const number of nums) {
  console.log(number);
}

// const countries = ["Finland", "Sweden", "Norway", "Denmark", "Iceland"];
// for (const country of countries) {
//   console.log(country.toUpperCase());
// }

const paises = ["VE", "CA", "UK", "RU"];
paises.forEach((pais, i) => {
  console.log(pais.toLowerCase());
});
