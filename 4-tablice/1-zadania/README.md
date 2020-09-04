# Zadania - tablice

## Zadanie 1
Zadeklaruj tablicę `tab` z 5 losowymi wyrazami. Wypisz w konsoli tą tablicę i jej długość. Następnie wypisz pierwszy i ostatni element oraz ich długość.

Robiąc pętlę po powyższej tablicy wypisz każdy element dużymi literami oraz jego długość. Skorzystaj z pętli `for`, `for of` i `forEach`.

## Zadanie 2
Do tabeli z 1 zadania dodaj na końcu i początku po 1 nowym elemencie.
Wykorzystaj odpowiednie metody. Po dodaniu elementów wypisz długość tablicy oraz całą tablicę za pomocą `console.table()`

## Zadanie 3
Usuń z tablicy 3 element ale tylko wtedy gdy ma ona tyle elementów.

## Zadanie 4
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

## Zadanie 5
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

## Zadanie 6
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

## Zadanie 7
Napisz funkcję `checkPalindrom(txt)`, która zwróci true/false w zależności od tego, czy przekazane słowo jest palindromem.

## Zadanie 8
Napisz funkcję, która zwróci losową liczbę z przedziału min-max.

## Zadanie 9
Napisz funkcję `generateRandomTable(min, max, count)`, która zwróci tablicę o długości `count`, w której będą losowe liczby z zakresu min-max. Do losowania liczb wykorzystaj funkcję z poprzedniego zadania.
Wynik odpalenia funkcji podstaw po zmienną, a następnie wypisz ją w konsoli. Następnie wypisz w konsoli największą liczbę w tej tablicy.

## Zadanie 10
Stwórz funkcję `monthName(nr)`, która będzie przyjmować tylko jeden atrybut - numer miesiąca. Funkcja powinna sprawdzić czy numer miesiąca jest prawidłowy (1-12). Jeżeli tak jest powinna zwrócić nazwę miesiąca w języku polskim. Wykorzystaj tutaj tablicę.

Dla przykładu:
`monthName(10) -> "październik"`

