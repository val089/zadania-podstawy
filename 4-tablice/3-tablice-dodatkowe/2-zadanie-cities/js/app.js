// ## Zadanie 1
// Wypisz ile miast jest w Polsce
console.log(cities.length);

// ## Zadanie 2
// Wypisz ile jest ludzi w tych miastach
const peopleCount = cities.reduce((a, b) => {
    return a + b.people
}, 0);
console.log(people);

// ## Zadanie 3
// Wypisz pierwsze miasto, w którym jest ponad 10000 ludzi
const firstBig = cities.find(city => city.people >= 10000);
console.log(firstBig);

// ## Zadanie 4
// Wypisz miasta, w których ludzi jest ponad średnią
const avg = people / cities.length;
const aboveAvg = cities.filter(city => city.people > avg);
console.log(aboveAvg);

// ## Zadanie 5
// Wypisz nazwy wszystkich miast, w których jest ponad 10000 ludzi
const bigCities = cities.filter(city => city.people > 10000)
const namesBigCities = bigCities.map(city => city.name);
console.log(namesBigCities);

// ## Zadanie 6
// Wypisz czy więcej jest miast z > 10000 ludzi czy mniejszych

if (bigCities.length > cities.length / 2) {
    console.log("Jest więcej dużych miast");
} else if (bigCities.length < cities.length / 2) {
    console.log("Jest więcej małych miast")
} else {
    console.log("Polska jest wyrównana jeżeli chodzi o miasta");
}
