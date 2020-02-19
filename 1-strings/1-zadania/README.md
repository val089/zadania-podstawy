# Zadania - strings

## Zadanie 1
Mamy tekst: `Koty to fajne zwierzaki`
Wypisz w konsoli liczbę wyrazów w tym zdaniu.

## Zadanie 2
Za pomocą funkcji [Prompt()](https://developer.mozilla.org/pl/docs/Web/API/Window/prompt) pobierz od użytkownika jego imię. Następnie używając odpowiednich funkcji dla stringów wypisz w konsoli to imię tak by było pisane małymi, literami a rozpoczynało się od dużej litery np.

```
Witaj Piotr!
```

## Zadanie 3
Mamy zmienną:
```
const text = "Ala ma kota";
```
Sprawdź czy występuje w niej słowo `"kot"`. Jeżeli tak - wypisz w konsoli `"Zdanie zawiera słowo kot"`, w przeciwnym razie wypisz `"Zdanie nie zawiera słowa kot"`.

## Zadanie 4
Mamy zmienną:
```
const text = "Ala ma kota";
```
Wypisz ten tekst w konsoli:
- pisany małymi literami
- pisany dużymi literami
- pisany naprzemiennie dużymi i małymi literami
- za pomocą metody [replace()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace) zamień imię Ala na twoje imię i wypisz wynik w konsoli


## Zadanie 5
Korzystając z obiektu Math stwórz kilka losowych zmiennych z zakresu 10-100000. Możesz skorzystać ze wzoru `Math.floor(Math.random()*(max-min+1)+min)`.
Po wygenerowaniu wypisz je w konsoli tak, by wszystkie kończyły się w jednym rzędzie. Przykładowo:

```
.........10
........102
..........1
.......1002
......92020
```

Wykorzystaj tutaj funkcję [padStart()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart). Zakładamy, że pojedyncza linia powinna mieć długość 10 znaków.

## Zadanie 6
Wygeneruj pod zmienną `uniqueID` tekst będący losowym ciągiem liter i cyfr o długości 20 znaków. Nie narzucam tutaj sposobu rozwiązania.

## Zadanie 7
Stwórz zmienną `x` równą jakiejś wartości liczbowej. Następnie wypisz w konsoli tekst:

```
Liczba x * x da w wyniku x*x
```

Gdzie w odpowiednie miejsca wstawisz zmienną x i wynik działania.
