// ## Zadanie 1
// Zadeklaruj tablicę `tab` z 5 losowymi wyrazami. Wypisz w konsoli tą tablicę i jej długość. Następnie wypisz pierwszy i ostatni element oraz ich długość.

// Robiąc pętlę po powyższej tablicy wypisz każdy element dużymi literami oraz jego długość. Skorzystaj z pętli `for`, `for of` i `forEach`.

        const tab = ['insulted'];

        console.log(tab);
        console.log(`Długość tab: ${tab.length}`);
        console.log(`Pierwszy element tab: ${tab[0]}`);
        console.log(`Ostatni element tab: ${tab[tab.length-1]}`);

        console.log('Pętla for:');
        for (let i=0; i<tab.length; i++) {
            console.log(`${tab[i].toUpperCase()} -> length: ${tab[i].length}`);
        }

        console.log('Pętla for of:');
        for (const el of tab) {
            console.log(`${el.toUpperCase()} -> length: ${el.length}`)
        }

        console.log('Pętla for each:');
        tab.forEach(el => {
            console.log(`${el.toUpperCase()} -> length: ${el.length}`)
        });

// ## Zadanie 2
// Do tabeli z 1 zadania dodaj na końcu i początku po 1 nowym elemencie.
// Wykorzystaj odpowiednie metody. Po dodaniu elementów wypisz długość tablicy oraz całą tablicę za pomocą `console.table()`

        tab.unshift('advice');
        tab.push('Why do we fall?');
        console.log(tab.length);
        console.log(tab);

// ## Zadanie 3
// Usuń z tablicy 3 element ale tylko wtedy gdy ma ona tyle elementów.

        if (tab.length === 3) {
            for (let i = 0; i<=tab.length+1; i++) {
                tab.shift(i);
            }
        }
        console.log(tab);

// ## Zadanie 4
// Mamy tablicę:

// ```
const names = [
    "Marcin",
    "Ania",
    "Monika",
    "Piotrek",
    "Beata"
]
// ```
// Posortuj ją i wypisz w konsoli.

        console.log(names.sort());

// ## Zadanie 5
// Mamy tablicę:

// ```
const arr = [
    "xloremipsumdolor",
    "kloremipsum",
    "aloremipsumdol",
    "blor",
    "cloremipsu",
    "gloremip",
]
// ```

// Posortuj ją po długościach kolejnych elementów. Na początku powinien być najkrótszy tekst, na końcu najdłuższy. Następnie napisz, ile liter mają wszystkie elementy razem.

        arr.sort((a, b) => {
            if (a.length > b.length) {
                return 1;
            }
            if (a.length < b.length) {
                return -1;
            }

            // Jeżeli funkcja(a, b) zwróci wartość większą od 0, to wartość a będzie miała większy indeks od b

            // Jeżeli funkcja(a, b) zwróci wartość mniejszą od 0, to wartość a będzie miała mniejszy indeks od b
        });
        console.log(`${arr}`);


// ## Zadanie 6
// Mamy tablicę:

// ```
const tabUsers = [
    {name : "Marcin", age: 14},
    {name : "Piotr", age: 18},
    {name : "Agnieszka", age: 13},
    {name : "Weronika", age: 20}
]
// ```

// Za pomocą dowolnej pętli wypisz w konsoli imiona użytkowników, którzy są pełnoletni.
// Dodatkowe - spróbuj zrobić to zadanie także za pomocą odpowiedniej do tego celu funkcji.

        for (const user of tabUsers) {
            if (user.age >= 18) {
                console.log(user);
            }
        }

        function getAdultUser(users) {
            for (const user of users) {
                if (user.age >= 18) {
                    console.log(user);
                }
            }
        }

        getAdultUser(tabUsers);

// ## Zadanie 7
// Napisz funkcję `checkPalindrom(txt)`, która zwróci true/false w zależności od tego, czy przekazane słowo jest palindromem.


        function checkPalindrom(txt) {
            const tab = [...txt];

            if (tab.join('') === tab.reverse().join('')) {
                return true;
            } else {
                return false;
            }
        }

        console.log(checkPalindrom('tenet'));

// ## Zadanie 8
// Napisz funkcję, która zwróci losową liczbę z przedziału min-max.

        function getRandomNumber(min, max) {
            return Math.floor(Math.random()*(max - min + 1) + min);
        }

        console.log(getRandomNumber(1, 10));

// ## Zadanie 9
// Napisz funkcję `generateRandomTable(min, max, count)`, która zwróci tablicę o długości `count`, w której będą losowe liczby z zakresu min-max. Do losowania liczb wykorzystaj funkcję z poprzedniego zadania.
// Wynik odpalenia funkcji podstaw pod zmienną, a następnie wypisz ją w konsoli. Następnie wypisz w konsoli największą liczbę w tej tablicy.

        function generateRandomTable(min, max, count) {
            const arr = [];

            for (let i=0; i<count; i++) {
                arr[i] = getRandomNumber(min, max)
            }

            console.log(arr);
        }

        generateRandomTable(1, 10, 10);

// ## Zadanie 10
// Stwórz funkcję `monthName(nr)`, która będzie przyjmować tylko jeden atrybut - numer miesiąca. Funkcja powinna sprawdzić czy numer miesiąca jest prawidłowy (1-12). Jeżeli tak jest powinna zwrócić nazwę miesiąca w języku polskim. Wykorzystaj tutaj tablicę.

// Dla przykładu:
// `monthName(10) -> "październik"`

        const monthName = nr => {
            const min = 1;
            const max = 12;
            const months = ['styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 'czerwiec', 'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień'];

            if (nr >= 1 && nr <= 12) {
                return months[nr-1];
            } else {
                return alert('Podaj liczbę od 1 do 12.');
            }
        }

        console.log(monthName(13));