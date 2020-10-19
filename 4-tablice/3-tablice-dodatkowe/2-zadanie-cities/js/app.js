// ## Zadanie 1
// Wypisz ile miast jest w Polsce

    console.log(cities.length);

// ## Zadanie 2
// Wypisz ile jest ludzi w tych miastach

    const peopleCount = cities.reduce((a, b) => {
        return a + b.people;
    }, 0); //0 po funkcji to wartość początkowa jak np. let sum = 0
    console.log(peopleCount);

// ## Zadanie 3
// Wypisz pierwsze miasto, w którym jest ponad 10000 ludzi

    const firstCity = cities.find(city => city.people > 10000);
    console.log(firstCity)

// ## Zadanie 4
// Wypisz miasta, w których ludzi jest ponad średnią

    const average = peopleCount / cities.length;
    const aboveAverage = cities.filter(city => city.people > average);
    console.log(aboveAverage.length);

// ## Zadanie 5
// Wypisz nazwy wszystkich miast, w których jest ponad 10000 ludzi
    const allBig = cities.filter(city => city.people > 10000);
    const nameAllBig = allBig.map(city => city.name);
    console.log(nameAllBig);


// ## Zadanie 6
// Wypisz czy więcej jest miast z > 10000 ludzi czy mniejszych

    const allSmall = cities.filter(city => city.people < 10000);
    allSmall > allBig ? console.log('Więcej jest miast poniżej 10000.') : console.log('Więcej jest miast powyżej 10000.');