# Zadania - tablice

## Zadanie 1
Zadeklaruj tablicę `tab` z 5 losowymi wyrazami. Wypisz w konsoli tą tablicę i jej długość. Następnie wypisz pierwszy i ostatni element oraz ich długość.

## Zadanie 2
Robiąc pętlę po powyższej tablicy wypisz każdy element dużymi literami oraz jego długość. Skorzystaj z pętli `for`, `for of` i `forEach`.

## Zadanie 3
Do tabeli z 1 zadania dodaj na końcu i początku po 1 nowym elemencie.
Wykorzystaj odpowiednie metody. Po dodaniu elementów wypisz długość tablicy oraz całą tablicę za pomocą `console.table()`

## Zadanie 4
Usuń z tablicy 3 element ale tylko wtedy gdy ma ona tyle elementów.

## Zadanie 5
Stwórz tablicę 10 losowych całkowitych liczb z przedziału 10 - 20.
Po utworzeniu tablicy wypisz w konsoli jej największy i najmniejszy element. Zadanie wykonaj za pomocą dowolnej pętli. Czy znasz lepszy sposób od zastosowania pętli?

## Zadanie 6
Mamy tablicę:

```
const names = [
    "Marcin",
    "Ania",
    "Monika",
    "Piotrek",
    "Beata"
]
```
Posortuj ją i wypisz w konsoli.

## Zadanie 7
Mamy tablicę:

```
const tab = [
    "xloremipsumdolor",
    "kloremipsum",
    "aloremipsumdol",
    "blor",
    "cloremipsu",
    "gloremip",
]
```

Posortuj ją po długościach kolejnych elementów. Na początku powinien być najkrótszy tekst, na końcu najdłuższy. Następnie napisz, ile liter mają wszystkie elementy razem.

## Zadanie 8
Mamy tablicę:

```
const tabUsers = [
    {name : "Marcin", age: 14},
    {name : "Piotr", age: 18},
    {name : "Agnieszka", age: 13},
    {name : "Weronika", age: 20}
]
```

Za pomocą dowolnej pętli wypisz w konsoli imiona użytkowników, którzy są pełnoletni.
Dodatkowe - spróbuj zrobić to zadanie także za pomocą odpowiedniej do tego celu funkcji.

## Zadanie 9
Napisz funkcję `checkPalindrom(txt)`, która zwróci true/false w zależności od tego, czy przekazane słowo jest palindromem.

## Zadanie 10
Napisz funkcję `generateRandomTable(min, max, count)`, która zwróci tablicę o długości `count`, w której będą losowe liczby z zakresu min-max. Do losowania liczb wykorzystaj funkcję z poprzedniego zadania.
Sprawdź działanie funkcji w konsoli.

## Zadanie 11
Korzystając z funkcji z poprzedniego zadania wygeneruj pod zmienną `tab` 10-elementową tablicę z losowymi liczbami.

Napisz funkcję **getMinFromTab(arr)**, do której przekażesz powyższą tablicę.
Funkcja powinna zwrócić najmniejszą liczbę z tablicy.
Za pomocą console.log wypisz wartość zwróconą przez funkcję.

## Zadanie 12
Stwórz funkcję `monthName(nr)`, która będzie przyjmować tylko jeden atrybut - numer miesiąca. Funkcja powinna sprawdzić czy numer miesiąca jest prawidłowy (1-12). Jeżeli tak jest powinna zwrócić nazwę miesiąca w języku polskim.

Dla przykładu:
`monthName(10) -> "październik"`