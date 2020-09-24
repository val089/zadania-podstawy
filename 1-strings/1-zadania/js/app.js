//ZAD. 1
//Mamy tekst: `Koty to fajne zwierzaki`
//Wypisz w konsoli liczbę wyrazów w tym zdaniu.

const txt = 'Koty to fajne zwierzaki';
console.log(txt.split(' ').length);

//ZAD. 2
//Za pomocą funkcji [Prompt()](https://developer.mozilla.org/pl/docs/Web/API/Window/prompt) pobierz od użytkownika jego imię. Następnie używając odpowiednich funkcji dla stringów wypisz w konsoli to imię tak by było pisane małymi, literami a rozpoczynało się od dużej litery np. Witaj Piotr!

const name = prompt();
console.log(`Witaj ${name.charAt(0).toUpperCase()}${name.substr(1)}!`);

//ZAD. 3
// Mamy zmienną:
// ```
// const text = "Ala ma kota";
// ```
// Sprawdź czy występuje w niej słowo `"kot"`. Jeżeli tak - wypisz w konsoli `"Zdanie zawiera słowo kot"`, w przeciwnym razie wypisz `"Zdanie nie zawiera słowa kot"`.

let text = "Ala ma kota";

if (text.includes('kot')) {
    console.log('Zdanie zawiera słowo kot');
} else { console.log('Zdanie nie zawiera słowa kot') };

//ZAD. 4
// Mamy zmienną:
// ```
// const text = "Ala ma kota";
// ```
// Wypisz ten tekst w konsoli:
// - pisany małymi literami
// - pisany dużymi literami
// - pisany naprzemiennie dużymi i małymi literami
// - za pomocą metody [replace()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace) zamień imię Ala na twoje imię i wypisz wynik w konsoli

console.log(text.toLowerCase());
console.log(text.toUpperCase());

let text2 = '';

for (let i=0; i < text.length; i++) {
    if (i % 2 === 0) {
        text2 += text[i].toLowerCase();
    } else {
        text2 += text[i].toUpperCase();
    }
}

console.log(text2);

//ZAD. 5
// Korzystając z obiektu Math stwórz kilka losowych zmiennych z zakresu 10-100000. Możesz skorzystać ze wzoru `Math.floor(Math.random()*(max-min+1)+min)`.
// Po wygenerowaniu wypisz je w konsoli tak, by wszystkie kończyły się w jednym rzędzie. Przykładowo:

// ```
// .........10
// ........102
// ..........1
// .......1002
// ......92020
// ```

// Wykorzystaj tutaj funkcję [padStart()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart). Zakładamy, że pojedyncza linia powinna mieć długość 10 znaków.

function getNumber(max, min) {
    return [Math.floor(Math.random()*(max - min + 1) + min)].toString();
}

for (let i=0; i < 5; i++) {
    console.log(getNumber(100000, 10).padStart(10, '.'));
}

//ZAD. 6
// Wygeneruj pod zmienną `uniqueID` tekst będący losowym ciągiem liter i cyfr o długości 20 znaków. Nie narzucam tutaj sposobu rozwiązania.

// a -> 97
// A -> 65
const tabLetters = Array(24).fill(0).map((el, i) => String.fromCharCode(65 + i));
const tabNumbers = Array(10).fill(0).map((el, i) => i);
const tab = [...tabLetters, ...tabNumbers];
console.log(tab);

const getIndex = () => {
    return Math.floor(Math.random() * tab.length); // zakres od 0 do chars.length bez ostatniej liczby
}

let uniqueID = '';
for (let i=0; i < 20; i++) {
    uniqueID += tab[getIndex()];
}

console.log(uniqueID);

//ZAD. 7
// Stwórz zmienną `x` równą jakiejś wartości liczbowej. Następnie wypisz w konsoli tekst:

// ```
// Liczba x * x da w wyniku x*x
// ```

// Gdzie w odpowiednie miejsca wstawisz zmienną x i wynik działania.

const x = 5;
console.log(`Liczba ${x} * ${x} da w wyniku ${x * x}`)