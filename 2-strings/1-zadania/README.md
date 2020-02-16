# Zadania - strings

## Zadanie 1
Mamy tekst: `Koty i psy to fajne zwierzaki`
Wypisz w konsoli liczbę wyrazów w tym zdaniu.

## Zadanie 2
Stwórz nową zmienną z imieniem pisanym małymi literami. Następnie używając odpowiednich funkcji dla stringów popraw to imię tak by zaczynało się z dużej litery.

## Zadanie 3
Mamy zmienną:
```
const text = "Ala ma kota";
```
Sprawdź czy występuje w niej słowo "kot". Jeżeli tak - wypisz w konsoli "Zdanie zawiera słowo kot", w przeciwnym razie wypisz "Zdanie nie zawiera słowa kot".
Sprawdzenia dokonaj za pomocą dwóch metod dostępnych dla stringów.

## Zadanie 4
Mamy zmienną:
```
const text = "Ala ma kota";
```
Wypisz w konsoli:
- tekst pisany małymi literami
- tekst pisany dużymi literami
- tekst pisany naprzemiennie dużymi i małymi literami
- zamień imię Ala na Ola i wypisz wynik w konsoli


## Zadanie 5
Korzystając z obiektu Math stwórz kilka losowych zmiennych z zakresu 10-100000. Możesz skorzystać ze wzoru `Math.floor(Math.random()*(max-min+1)+min)`.
Po wygenerowaniu wypisz je w konsoli tak, by wszystkie kończyły się w jednej linii. Przykładowo:

```
         10
        102
          1
       1002
      92020
```

Wykorzystaj tutaj funkcję [padStart()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart). Zakładamy, że pojedyncza linia powinna mieć długość 10 znaków.

## Zadanie 6
Wygeneruj pod zmienną `uniqueID` tekst będący losowym ciągiem liter i cyfr o długości 20. Nie narzucam tutaj sposobu rozwiązania.