//## Zadanie 1
//Mamy tekst: `Koty to fajne zwierzaki`
//Wypisz w konsoli liczbę wyrazów w tym zdaniu.
{
    const text = `Koty to fajne zwierzaki`;
    const words = text.split(" ");
    console.log(`Liczba wyrazów: ${words.length}`);
}

//## Zadanie 2
//Za pomocą funkcji [Prompt()](https://developer.mozilla.org/pl/docs/Web/API/Window/prompt) pobierz od użytkownika jego imię. Następnie używając odpowiednich funkcji dla stringów wypisz w konsoli to imię tak by było pisane małymi, literami a rozpoczynało się od dużej litery np. Witaj Piotr!
{
    const name = prompt("Podaj swoje imię");
    if (name) {
        const fix = name[0].toUpperCase() + name[0].substr(1);
        console.log(`Witaj ${fix}!`);

        //lub
        const tab = [...name];
        tab[0] = tab[0].tuUpperCase();
        console.log(`Witaj ${tab.join()}!`);
    }
}

// ## Zadanie 3
// Mamy zmienną:
// ```
// const text = "Ala ma kota";
// ```
// Sprawdź czy występuje w niej słowo `"kot"`. Jeżeli tak - wypisz w konsoli `"Zdanie zawiera słowo kot"`, w przeciwnym razie wypisz `"Zdanie nie zawiera słowa kot"`.
const text = "Ala ma kota";
if (text.includes("kot")) {
    console.log("Zdanie zawiera słowo kot");
} else {
    console.log("Zdanie nie zawiera słowa kot");
}

// ## Zadanie 4
// Mamy zmienną:
// ```
// const text = "Ala ma kota";
// ```
// Wypisz ten tekst w konsoli:
// - pisany małymi literami
// - pisany dużymi literami
// - pisany naprzemiennie dużymi i małymi literami
// - za pomocą metody [replace()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace) zamień imię Ala na twoje imię i wypisz wynik w konsoli
{
    const text = "Ala ma kota";
    console.log(text.toLowerCase());
    console.log(text.toUpperCase());

    let str = "";
    for (let i=0; i<text.length; i++) {
        if (i % 2 === 0) {
            str += text[i].toUpperCase();
        } else {
            str += text[i].toLowerCase();
        }
    }
    console.log(str);

    //lub
    [...text].map((el, i) => (i % 2 === 0)? el.toUpperCase() : el.toLowerCase()).join("");
}

// ## Zadanie 5
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
{
    const tab = [];
    //tworzę kilka zmiennych
    for (let i=0; i<5; i++) {
        const min = 1;
        const max = 99999;
        tab.push( Math.floor(Math.random()*(max-min+1)+min) );
    }

    tab.forEach(el => {
        console.log(String(el).padStart(10, "."));
    })
}

// ## Zadanie 6
// Wygeneruj pod zmienną `uniqueID` tekst będący losowym ciągiem liter i cyfr o długości 20 znaków. Nie narzucam tutaj sposobu rozwiązania.
{
    //tworzę tablicę z literami
    //każdą literę tworzę na podstawie jej kodu. Litera a ma kod 97
    const tabLetters = Array(26).fill(0).map((el, i) => String.fromCharCode(97 + i))
    //generuję tablicę z liczbami 0-9
    const tabNumbers = Array(10).fill(0).map((el, i) => i);
    //generuję wspólną tablicę
    const tab = [...tabLetters, ...tabNumbers];

    //na jej podstawie generuję ID
    let id = "";
    const min = 0;
    const max = tab.length-1;
    for (let i=0; i<20; i++) {
        const rand = Math.floor(Math.random()*(max-min+1)+min);
        id += tab[rand];
    }
    console.log(id);
}

// ## Zadanie 7
// Stwórz zmienną `x` równą jakiejś wartości liczbowej. Następnie wypisz w konsoli tekst:

// ```
// Liczba x * x da w wyniku x*x
// ```

// Gdzie w odpowiednie miejsca wstawisz zmienną x i wynik działania.
{
    const x = 20;
    console.log(`Liczba ${x} * ${x} da w wyniku ${x * x}`);
}