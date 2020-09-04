// ## Zadanie 1
// Za pomocą pętli wypisz w konsoli tekst `12345678910`
{
    let str = "";
    for (let i=1; i<=10; i++) {
        str += i;
    }
    console.log(i);

    //lub
    console.log(Array(10).fill(0).map((el, i) => i+1).join(""));
}


// ## Zadanie 2
// Stwórz zmienną `n`, pod którą postawisz jakąś liczbę całkowitą z przedziału 1-10 oraz dodatkową zmienną `txt`, która będzie zawierać jakiś tekst np. `kot`.

// Sprawdź czy liczba `n` jest dodatnia. Jeżeli jest wypisz w konsoli tekst, który będzie powtórzeniem `n` razy tekstu ze zmiennej `txt`. Przykładowo:

// ```
// input -> "kot";
// n -> 3
// wynik -> "kotkotkot";
// ```

// Powtórzenie tekstu wygeneruj za pomocą pętli. Po uzyskaniu efektu, powtórzenie wygeneruj za pomocą metody [repeat()](https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/Obiekty/String/repeat) dla stringów.

{
    const n = 5;
    const txt = "kot";
    let str = "";

    for (let i=0; i<n; i++) {
        str += txt;
    }
    console.log(str);

    console.log(txt.repeat(n));
}

// ## Zadanie 3
// Wygeneruj i wypisz w konsoli tekst:

// ```
// ╔═══════════════════════╗
// ║  To jest jakiś tekst  ║
// ╚═══════════════════════╝
// ```

// Tekst w ramce powinien być postawiony pod zmienną, tak by łatwo można było go zmienić. Narożniki wygeneruj po prostu kopiując odpowiedni znaki z powyższego przykładu.

// Rozbuduj to zadanie tak, by tekst był podawany przez użytkownika za pomocą [Prompt()](https://developer.mozilla.org/pl/docs/Web/API/Window/prompt). Jeżeli tekst jest dłuższy od 20 znaków, wyświetl tylko 20 i pokaż `...`. Przycięcie możesz dokonać za pomocą [Slice()](https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/Obiekty/String/slice)


{
    const txt = "To jest jakiś tekst";
    let allText = "";
    allText += "╔" + "=".repeat(txt.length + 4) + "╗\n";
    allText += "║  " + txt + "  ║\n";
    allText += "╚" + "=".repeat(txt.length + 4) + "╝\n";
    console.log(allText);
}

{
    let txt = prompt("Podaj jakiś tekst");
    if (txt.length > 20) {
        txt = txt.substr(0, 20) + "...";
    }
    const line = "=".repeat(txt.length + 4);
    const allText = `
    ╔${line}╗
    ║  ${txt}  ║
    ╚${line}╝
    `;
    console.log(allText);
}

// ## Zadanie 4
// Zrób losowanie 10 liczb z przedziału 1-10. Wypisz je w konsoli. Jeżeli przynajmniej połowa z nich jest większa niż 5, wtedy w konsoli wypisz tekst `udało się`, w przeciwnym razie wypisz w konsoli tekst `niestety nie tym razem`.
{
    let matchCount = 0;
    let numberCount = 10;

    for (let i=0; i<numberCount; i++) {
        const min = 1;
        const max = 10;
        const nr = Math.floor(Math.random()*(max-min+1)+min);
        if (nr > 5) {
            matchCount++;
        }
    }

    if (count >= numberCount / 2) {
        console.log("udało się");
    } else {
        console.log("niestety nie tym razem");
    }
}

// ## Zadanie 5
// Za pomocą pętli wygeneruj poniższy tekst:
// `01-2--3---4----5-----6------7-------`
// Zadanie wykonaj dla zmiennej równej `n=7`
{
    const n = 7;
    let str = "";
    for (let i=0; i<=n; i++) {
        str += i;
        str += "-".repeat(i);
    }
    console.log(str);
}

// ## Zadanie 6
// Mamy dwie zmienne:
// ```
// const min = 1;
// const max = 1000;
// ```
// Za pomocą `prompt()` pobierz od użytkownika liczbę z przedziału min-max. Pamiętaj, że prompt() zwraca zawsze tekst, więc skonwertuj ją na liczbę.

// Robiąc pętlę while generuj losową liczbę z przedziału min-max.
// Wypisz w konsoli ile wykonało się iteracji, aż wylosowana liczba była równa tej, którą podał użytkownik.

const min = 1;
const max = 1000;
const nr = Number(prompt(`Podaj liczbę z przedziału ${min} - ${max}`));
let count = 0;
let rand = Math.floor(Math.random()*(max-min+1)+min);
while (nr !== rand) {
    count++;
    rand = Math.floor(Math.random()*(max-min+1)+min);
}
console.log(`Wylosowana liczba to ${rand}. Musieliśmy zrobić ${count} losowań by trafić taką samą liczbę`);