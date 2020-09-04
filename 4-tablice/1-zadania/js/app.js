// ## Zadanie 1
// Zadeklaruj tablicę `tab` z 5 losowymi wyrazami. Wypisz w konsoli tą tablicę i jej długość. Następnie wypisz pierwszy i ostatni element oraz ich długość.

// Robiąc pętlę po powyższej tablicy wypisz każdy element dużymi literami oraz jego długość. Skorzystaj z pętli `for`, `for of` i `forEach`.

// ## Zadanie 2
// Do tabeli z 1 zadania dodaj na końcu i początku po 1 nowym elemencie.
// Wykorzystaj odpowiednie metody. Po dodaniu elementów wypisz długość tablicy oraz całą tablicę za pomocą `console.table()`

// ## Zadanie 3
// Usuń z tablicy 3 element ale tylko wtedy gdy ma ona tyle elementów.

{
    const tab = ["ala", "bala", "cala", "dala", "eala"];
    console.log(tab);
    console.log(tab.length);
    console.log(tab[0]);
    console.log(tab[tab.length-1]);

    for (let i=0; i<tab.length; i++) {
        console.log(tab[i]);
    }
    for (let el of tab) {
        console.log(el);
    }
    tab.forEach(el => {
        console.log(el);
    });

    tab.push("NowyX");
    tab.unshift("NowyY");
    console.table(tab);
    if (tab.length > 3) {
        tab.splice(2, 1);
    }
}



// ## Zadanie 4
// Mamy tablicę:

// ```
// const names = [
//     "Marcin",
//     "Ania",
//     "Monika",
//     "Piotrek",
//     "Beata"
// ]
// ```
// Posortuj ją i wypisz w konsoli.

{
    const names = [
        "Marcin",
        "Ania",
        "Monika",
        "Piotrek",
        "Beata"
    ];
    names.sort((a, b) => {
        return a.localeCompare(b);
    });
    console.log(names);
}

// ## Zadanie 5
// Mamy tablicę:

// ```
// const tab = [
//     "xloremipsumdolor",
//     "kloremipsum",
//     "aloremipsumdol",
//     "blor",
//     "cloremipsu",
//     "gloremip",
// ]
// ```

// Posortuj ją po długościach kolejnych elementów. Na początku powinien być najkrótszy tekst, na końcu najdłuższy. Następnie napisz, ile liter mają wszystkie elementy razem.

{
    const tab = [
        "xloremipsumdolor",
        "kloremipsum",
        "aloremipsumdol",
        "blor",
        "cloremipsu",
        "gloremip",
    ];

    tab.sort((a, b) => {
        return a.length - b.length;
    });

    console.log(tab);
    console.log(`Liczba liter: ${tab.join('').length}`);
}

// ## Zadanie 6
// Mamy tablicę:

// ```
// const tabUsers = [
//     {name : "Marcin", age: 14},
//     {name : "Piotr", age: 18},
//     {name : "Agnieszka", age: 13},
//     {name : "Weronika", age: 20}
// ]
// ```

// Za pomocą dowolnej pętli wypisz w konsoli imiona użytkowników, którzy są pełnoletni.
// Dodatkowe - spróbuj zrobić to zadanie także za pomocą odpowiedniej do tego celu funkcji.

{
    const tabUsers = [
        {name : "Marcin", age: 14},
        {name : "Piotr", age: 18},
        {name : "Agnieszka", age: 13},
        {name : "Weronika", age: 20}
    ]

    for (let el of tabUsers) {
        if (el.age >= 18) {
            console.log(el);
        }
    }

    tabUsers
        .filter(el => el.age >= 18)
        .forEach(el => console.log(el));
}

// ## Zadanie 7
// Napisz funkcję `checkPalindrom(txt)`, która zwróci true/false w zależności od tego, czy przekazane słowo jest palindromem.

{
    function checkPalindrom(txt) {
        return [...txt].reverse().join() === txt
    }

    console.log( checkPalindrom("ala") );
    console.log( checkPalindrom("kajak") );
    console.log( checkPalindrom("kot" ) );
}

// ## Zadanie 8
// Napisz funkcję, która zwróci losową liczbę z przedziału min-max.

// ## Zadanie 9
// Napisz funkcję `generateRandomTable(min, max, count)`, która zwróci tablicę o długości `count`, w której będą losowe liczby z zakresu min-max. Do losowania liczb wykorzystaj funkcję z poprzedniego zadania.
// Wynik odpalenia funkcji podstaw po zmienną, a następnie wypisz ją w konsoli. Następnie wypisz w konsoli największą liczbę w tej tablicy.

{
    function randomNr(min, max) {
        return Math.floor(Math.random()*(max-min+1)+min);
    }

    function generateRandomTable(min, max, count) {
        const tab = [];
        for (let i=0; i<count; i++) {
            tab.push( randomNr(min, max)  );
        }
        return tab;
    }

    const tab = generateRandomTable(1, 100, 20);
    console.log(tab);
}

// ## Zadanie 10
// Stwórz funkcję `monthName(nr)`, która będzie przyjmować tylko jeden atrybut - numer miesiąca. Funkcja powinna sprawdzić czy numer miesiąca jest prawidłowy (1-12). Jeżeli tak jest powinna zwrócić nazwę miesiąca w języku polskim. Wykorzystaj tutaj tablicę.

// Dla przykładu:
// `monthName(10) -> "październik"`
{
    function monthName(nr) {
        const months = ["styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień"];
        return months[nr];
    }

    console.log(monthName(10))
}