// ## Zadanie 1
// Wypisz wszystkie nazwy państw
// Jak już wypiszesz, albo to zadanie zakomentuj (bo będziesz miał bałagan w konsoli), albo obejmij poleceniami `console.groupCollapsed("Nazwy państw");` i `console.groupEnd();`, albo po kodzie zastosuj `console.clear()`
// Wypisz ile jest razem ludności we wszystkich państwach

const population = countries.reduce((a, b) => {
    return a + b.population;
}, 0)
console.log(`Liczba ludzi w państwach: ${population}`);

// ## Zadanie 2
// Wypisz średnią ludność w państwach
const avgPopulation = population / countries.length;
console.log(`Średnia ludność w państwach: ${avgPopulation}`)

// ## Zadanie 3
// Wypisz ile jest państw, które mają dodatni wzrost
const countriesWithGrowPositive = countries.filter(country => country.grow > 0);
console.log(`Liczba państw z dodatnim wzrostem: ${countriesWithGrowPositive.length}`);

// ## Zadanie 4
// Wypisz ile jest państw, które mają ujemny wzrost
const countriesWithGrowNegative = countries.filter(country => country.grow < 0);
console.log(`Liczba państw z ujemnym wzrostem: ${countriesWithGrowNegative.length}`);

// ## Zadanie 5
// Napisz ile wszystkie państwa zajmują procent powierzchni Ziemi (world_area)
const countriesArea = countries.reduce((a, b) => {
    return a + b.land_area_in_km;
}, 0);
console.log(`Wszystkie państwa zajmują ${countriesArea}km powierzchni Ziemi`);

// ## Zadanie 6
// Napisz ile wynosi średnia dzietności na świecie (fertility_rate) (uwaga - niektóre kraje nie mają danych - wtedy jest null)
const fertilityAll = countries.reduce((a, b) => {
    const fertility = b.fertility_rate || 0;
    return a + fertility;
}, 0)
console.log(`Średnia dzietność na świecie: ${fertilityAll}`);

// ## Zadanie 7
// Napisz ile wynosi średnia wieku na świecie
const mediumAge = countries.reduce((a, b) => {
    return a + b.medium_age;
}, 0);
const mediumAvgAge = mediumAge / countries.length;
console.log(`Średnia wieku: ${mediumAvgAge}`);

// ## Zadanie 8
// Wypisz wszystkie dane na temat Polski
const poland = countries.find(country => country.name === "Poland");
console.log("Poland:");
for ([key, value] of Object.entries(poland)) {
    console.log(key, value);
}

// ## Zadanie 9
//  Napisz czy średnia wieku w Polsce jest większa od średniej na Świecie?
if (poland.medium_age > mediumAvgAge) {
    console.log("Mamy starsze społeczeństwo niż średnia na świecie");
} else if (poland.medium_age < mediumAvgAge) {
    console.log("Mamy młodsze społeczeństwo niż średnia na świecie");
} else {
    console.log("Nasze społeczeństwo ma średni wiek taki sam jak na świecie");
}