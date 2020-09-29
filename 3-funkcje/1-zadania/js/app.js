// ## Zadanie 1
// Napisz funkcję, która przyjmie jeden parametr - dowolny tekst.

// Funkcja niech ZWRACA tekst `Liczba liter: ....` gdzie `....` to liczba liter tekstu. Wynik jej użycia wypisz w konsoli za pomocą `console.info()`

        const lettersNumber = txt => {
            console.info(`Liczba liter: ${txt.length}.`);
        }

        lettersNumber('Jakiś tekst');

// ## Zadanie 2
// Napisz funkcje, która zsumuje przekazaną do niej tablicę i zwraca jej sumę.
// Stwórz dowolną tablicę, a następnie przekaż ją do tej funkcji i wynik wypisz w konsoli.

        function sumArr(arr) {
            let sum = 0;
            for (let i=0; i<arr.length; i++) {
                sum += arr[i];
            }
            return sum;
        }

        const arr = [1,2,3,4,5,6,7,8,9,10];
        console.log(sumArr(arr));

// ## Zadanie 3
// Napisz funkcję, która przyjmie dowolny tekst. Funkcja niech zwraca tekst, który ma zmiksowana wielkość liter np:

// ```
// input -> Ala ma kota
// output -> AlA Ma kOtA
// ```

// Dla ułatwienia spacje liczmy jako literę.

        function mixTxt(txt) {
            let newTxt = '';
            for(let i=0; i<txt.length; i++) {
                if(i % 2 === 0) {
                    newTxt += txt[i].toUpperCase();
                } else {
                    newTxt += txt[i].toLowerCase();
                }
            }
            return newTxt;
        }
        console.log(mixTxt('Siemanko, nazywam się Kamil. Pozdro!'));

// ## Zadanie 4
// Napisz funkcje, która będzie wymagać 2 atrybutów.
// Funkcja niech sprawdza, czy oba atrybuty są liczbami.
// Funkcja ma zwracać iloczyn (*) obu liczb.
// Jeżeli któryś z atrybutów nie jest liczba, funkcja niech zwraca false.

        function multiply(x, y) {
            if (typeof x === "number" && typeof y === "number") {
                return x * y;
            } else {
                return false;
            }
        }

        console.log(multiply(2, 4));
        console.log(multiply('trololo', 4));

// ## Zadanie 5
// Napisz funkcje, która przyjmuje 2 parametry:
// 1) imię - np: Ala
// 2) miesiac - np: styczen

// Funkcja ma zwracac:
// * jezeli miesiac to grudzien, styczen, luty: `"Ala jezdzi na sankach"`
// * jezeli miesiac to marzec, kwiecien, maj: `"Ala chodzi po kaluzach"`
// * jezeli miesiac to czerwiec, lipiec, sierpien: `"Ala sie opala"`
// * jezeli miesiac to wrzesien, pazdziernik, listopad: `"Ala zbiera liscie"`

// Wywołaj funkcje przekazując do niej zmienne: twoje imię i dowolny miesiąc.

// Dopisz w funkcji zabezpieczenie, które pozwoli wpisać miesiac małymi lub dużymi literami. Jeżeli miesiac jest "innym słowem", funkcja niech zwraca `"Ala uczy się JS"`

        const getSeason = (name, month) => {
            const regex = /([a-zA-Z])/;
            if (regex.test(name) === false || regex.test(month) === false) {
                return 'Wpisz tekst bez polskich znaków i cyfr.';
            }

            month = month.toLowerCase();

            if (month === 'grudzien' || month === 'styczen' || month === 'luty') {
                return `${name} jeździ na sankach.`;
            } else if (month === 'marzec' || month === 'kwiecien' || month === 'maj') {
                return `${name} chodzi po kałużach.`;
            } else if (month === 'czerwiec' || month === 'lipiec' || month === 'sierpien') {
                return `${name} się opala.`;
            } else if (month === 'wrzesien' || month === 'pazdziernik' || month === 'listopad') {
                return `${name} zbiera liście.`;
            }
            else {
                return `${name} uczy sie JS.`;
            }

            // if (["grudzien", "styczne", "luty"].includes(month)) {
            //     return `${name} jezdzi na sankach`;
            // }
            // if (["marzec", "kwiecien", "maj"].includes(month)) {
            //     return `${name} chodzi po kałużach`;
            // }
            // if (["czerwiec", "lipiec", "sierpien"].includes(month)) {
            //     return `${name} się opala`;
            // }
            // if (["wrzesien", "pazdziernik", "listopad"].includes(month)) {
            //     return `${name} zbiera liscie`;
            // }
        }

        console.log(getSeason('Kamil', 'luty'));

// ## Zadanie 6
// Mamy przykładowy tekst:

// ```
// const str = "Ania|Marcin|Bartek|Piotr|Kuba|Beata|Agnieszka";
// ```

// Napisz funkcję, która przyjmie 2 atrybuty:
// - tekst
// - znak rozdziału (np. `|`)

// Skorzystaj z odpowiedniej metody, tak aby rozdzielić przekazany do funkcji tekst na części za pomocą przekazanego znaku rozdziału. W wyniku rozdzielenia powinieneś dostać tablicę. Funkcja niech posegreguje tą tablicę alfabetycznie. Następnie funkcja niech połączy tą tablicę w nowy tekst wstawiając między imiona znak wcześniejszego rozdziału. Skorzystaj tutaj z innej odpowiedniej metody js.

// `input -> "Ania|Marcin|Bartek"`
// `output -> "Ania|Bartek|Marcin"`

// Wywołaj tę funkcję przekazując do niej str z początku zadania

        function changeTxt(txt, separator) {
            const arr = txt.split(separator);
            arr.sort(); //akurat wszystkie imiona są z dużej litery więc obejdzie się bez dodatkowych opcji sortujących.
            const arrTxt = arr.join('|')
            return arrTxt;
        }

        const txt = "Ania|Marcin|Bartek|Piotr|Kuba|Beata|Agnieszka";
        const separator = '|';

        console.log(changeTxt(txt, separator));

// ## Zadanie 7
// Napisz 2 funkcje. Każda z nich niech przyjmuje tablicę imion.

// Pierwsza funkcja niech zwraca nową tablicę, w której imiona są zapisane dużymi literami. Druga funkcja niech zwraca nową tablicę, w której imiona mają zmienną wielkość liter.

// ```
// input -> ["Ania" , "Marcin" , "Bartek" , "Piotr"]
// output1 -> ["ANIA" , "MARCIN" , "BARTEK" , "PIOTR"]
// output2 -> ["AnIa" , "MaRcIn" , "BaRtEk" , "PiOtR"]
// ```

        const names = ["Ania" , "Marcin" , "Bartek" , "Piotr"];

        const namesUpperCase = names => {
            return names.map(el => el.toUpperCase());
        }

        const mixNames = names => {
            return names.map(el => {
                //można dodać do osobnej funkcji
                let newName = '';
                for (let i = 0; i<el.length; i++) {
                    if (i % 2 === 0) {
                        newName += el[i].toUpperCase();
                    } else {
                        newName += el[i].toLowerCase();
                    }
                }
                return newName;
            });
        }

        console.log(namesUpperCase(names));
        console.log(mixNames(names));


// ## Zadanie 8
// Napisz funkcję checkFemale, która sprawdza przekazane do niej imię.
// Zróbmy proste teoretyczne założenie, że jeżeli imię kończy się literą "a"
// to jest to żeńskie imię, w przeciwnym wypadku męskie.
// Funkcja powinna wracać true jeżeli imię jest żeńskie i false jeżeli jest męskie.
// Przykładowo:

// ```
// checkFemale("Ania") === true
// checkFemale("Marcin") === false

        function checkFemale(name) {
            name = name.toLowerCase();
            if (name[name.length - 1] === 'a') {
                return true;
            } else {
                return false;
            }

            //krótsza opcja
             // return name.substr(-1).toLowerCase() === "a";
        }

        console.log(checkFemale('Kamil'));
        console.log(checkFemale('Ania'));

// ## Zadanie 9
// Napisz funkcję `countWomanInTable(arr)`, do której przekażesz tablicę userów, którą masz poniżej.
// Funkcja powinna sprawdzić każdego użytkownika w tablicy i zwrócić ile jest kobiet.
// Wykorzystaj tutaj funkcję z poprzedniego zadania.
// Jak pobrać imię z usera? Możesz to osiągnąć za pomocą metody [split()](https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/Obiekty/String/split).
// Podziel string na 2 części - uzyskasz tablicę 2 elementów. Pierwszy to imię, drugi to nazwisko

// ```
// const users = [
//     "Ania Nowak",
//     "Piotr Kowalski",
//     "Bartek Kosecki",
//     "Natalia Nowak",
//     "Weronika Piotrowska",
//     "Agata Beatczak",
//     "Tomasz Nowak",
//     "Mateusz Kowalski",
//     "Marcin Kotecki",
//     "Betata Lecka",
//     "Katarzyna Melecka"
// ]
// ```

const users = [
    "Ania Nowak",
    "Piotr Kowalski",
    "Bartek Kosecki",
    "Natalia Nowak",
    "Weronika Piotrowska",
    "Agata Beatczak",
    "Tomasz Nowak",
    "Mateusz Kowalski",
    "Marcin Kotecki",
    "Betata Lecka",
    "Katarzyna Melecka"
]

function countWomanInTable(users) {
    let count = 0;
    for (const el of users) {
        if (checkFemale(el) === true) {
            count++;
        }
        const namesAndSurnames = el.split(" ");
        const names = namesAndSurnames[0];
        const surnames = namesAndSurnames[1];
        console.log(`Imię: ${names}, nazwisko: ${surnames}`);
    }
    console.log(`Na liście użytkowników, ilość kobiet to: ${count}`);
}

countWomanInTable(users);