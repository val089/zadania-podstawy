// # Zadania - funkcje

// ## Zadanie 1
// Napisz funkcję, która przyjmie jeden parametr - dowolny tekst.

// Funkcja niech ZWRACA tekst `Liczba liter: ....` gdzie `....` to liczba liter tekstu. Wynik jej użycia wypisz w konsoli za pomocą `console.info()`
{
    function text(txt) {
        console.info(`Liczba liter to ${txt.length}`);
    }
}

// ## Zadanie 2
// Napisz funkcje, która zsumuje przekazaną do niej tablicę i zwraca jej sumę.
// Stwórz dowolną tablicę, a następnie przekaż ją do tej funkcji i wynik wypisz w konsoli.
{
    function sumArr(tab) {
        const sum = tab.reduce((a,b) => a + b);
        //lub
        // let sum = 0;
        // for (let i=0; i<tab.length; i++) {
        //     sum += tab[i];
        // }
        return sum;
    }

    const tab = [5,4,2,6,7,8,1];
    console.log(sumArr(tab));
}

// ## Zadanie 3
// Napisz funkcję, która przyjmie dowolny tekst. Funkcja niech zwraca tekst, który ma zmiksowana wielkość liter np:

// ```
// input -> Ala ma kota
// output -> AlA Ma kOtA
// ```
function mix(txt) {
    let str = "";
    for (let i=0; i<txt.length; i++) {
        if (i % 2 === 0) {
            str += txt[i].toUpperCase();
        } else {
            str += txt[i].toLowerCase();
        }
    }
    return str;
}

console.log( mix("Ala ma kota") );

// ## Zadanie 4
// Napisz funkcje, która będzie wymagać 2 atrybutów.
// Funkcja niech sprawdza, czy oba atrybuty są liczbami.
// Funkcja ma zwracać iloczyn (*) obu liczb.
// Jeżeli któryś z atrybutów nie jest liczba, funkcja niech zwraca false.

{
    function multiply(nr1, nr2) {
        if (typeof nr1 !== "number" || typeof nr2 !== "number") {
            return false;
        }
        return nr1 * nr2;
    }

    console.log(multiply(10, 20));
    console.log(multiply(10, "ala"));
}

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
{
    function printText(name, month) {
        month = month.toUpperCase();

        if (["grudzien", "styczne", "luty"].includes(month)) {
            return `${name} jezdzi na sankach`;
        }
        if (["marzec", "kwiecien", "maj"].includes(month)) {
            return `${name} chodzi po kałużach`;
        }
        if (["czerwiec", "lipiec", "sierpien"].includes(month)) {
            return `${name} się opala`;
        }
        if (["wrzesien", "pazdziernik", "listopad"].includes(month)) {
            return `${name} zbiera liscie`;
        }

        return `${name} uczy się Javascript`;
    }

    console.log("Monika", "styczen");
    console.log("Monika", "lutek");
    console.log("Monika", "LUty");
}

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
{
    function fixText(str, char) {
        const tab = str.split(char);
        tab.sort((a, b) => a.localeCompare(b));
        return tab.join(char);
    }

    const str = "Ania|Marcin|Bartek|Piotr|Kuba|Beata|Agnieszka";
    console.log(fixText(str, "|"));
}

// ## Zadanie 7
// Napisz 2 funkcje. Każda z nich niech przyjmuje tablicę imion.

// Pierwsza funkcja niech zwraca nową tablicę, w której imiona są zapisane dużymi literami. Druga funkcja niech zwraca nową tablicę, w której imiona mają zmienną wielkość liter.

// ```
// input -> ["Ania" , "Marcin" , "Bartek" , "Piotr"]
// output1 -> ["ANIA" , "MARCIN" , "BARTEK" , "PIOTR"]
// output2 -> ["AnIa" , "MaRcIn" , "BaRtEk" , "PiOtR"]
// ```

{
    function bigNames(arr) {
        return arr.map(el => el.toUpperCase())
    }

    function mixNames(arr) {
        return arr.map(el => mix(el)); //użyłem funkcji z 2 zadania
    }

    const tab = ["Ania" , "Marcin" , "Bartek" , "Piotr"];
    console.log(bigNames(tab));
    console.log(mixNames(tab));
}

// ## Zadanie 8
// Napisz funkcję checkFemale, która sprawdza przekazane do niej imię.
// Zróbmy proste teoretyczne założenie, że jeżeli imię kończy się literą "a"
// to jest to żeńskie imię, w przeciwnym wypadku męskie.
// Funkcja powinna wracać true jeżeli imię jest żeńskie i false jeżeli jest męskie.
// Przykładowo:

// ```
// checkFebale("Ania") === true
// checkFemale("Marcin") === false
// ```

function checkFemale(name) {
    return name.substr(-1).toLowerCase() === "a";
}

console.log(checkFemale("Marcin"));
console.log(checkFemale("Ania"));

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

{
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

    function countWomanInTable(arr) {
        let count = 0;
        for (let el of arr) {
            const part = el.split(" ");
            const name = part[0];
            const surname = part[1];
            if (checkFemale(name)) {
                count++;
            }
        }
        return count;
    }

    console.log(countWomanInTable(users));
}