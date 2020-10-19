// # Zadania - tablice wielowymiarowe

// ## Zadanie 1
// 1. zrób pętle po 2 wymiarowej tablicy "tab"
// 2. Każdą pobraną wartość z tablicy dodawaj do tekstu za pomocą instrukcji:
//    `text += '<div style="background:' + pobranyKolor + '"></div>'`;
//    gdzie pobranyKolor pobieraj z tablicy colors. Indeks koloru pobierzesz z danego miejsca w tablicy tab np: *tab[0][0] = 0*; czyli *pobranyKolor = #ffffff*
// 3. Po zakończeniu każdej pętli po tablicy 2 wymiaru, do tekstu dodawaj `<br>`
// 4. W rezultacie powinieneś otrzymać rysunek

//zmiennych colors i tab w tym zadaniu nie zmieniaj
const colors = ['#ffffff', '#F8AA00', '#7E1C03', '#DB0F3B', '#0026FF']
const tab = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [3,3,3,0,0,0,0,0,0,0,0,0,0,0],
    [3,4,3,0,0,0,0,0,0,0,0,0,0,0],
    [3,4,3,0,0,0,0,0,0,0,0,0,0,0],
    [3,3,3,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
];

//-----------------------------------------
//START
//-----------------------------------------
let text = '';

for (const subTab of tab) {
    console.log(subTab);
    for (const el of subTab) {
        const color = colors[el];
        text += '<div style="background:' + color + '"></div>'
    }

    text += '<br>';
}

//tutaj wstawiamy do div wygenerowany html - nie ruszaj poniższej linijki
document.querySelector('.canvas').innerHTML = text;