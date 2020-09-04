# Zadania - funkcje

## Zadanie 1
Zamień na funkcje strzałkową poniższe funkcje:

```
const sum = function(a, b) {
    const result = a + b;
    console.log(result);
}

const myPow = function(a) {
    return Math.pow(a);
}

const hr = function() {
    console.log("-------");
}

const bigWords = function(tab) {
    const result = [];
    for (let i=0; i<tab.length; i++) {
        result.push(tab[i].toUpperCase());
    }
    return result;
}

const sumTab = function(tab)  {
    const sum = 0;
    for (let i=0; i<tab.length; i++) {
        sum += tab[i];
    }
    return sum;
}

function test() {
    return "abecadło z pieca spadło";
}

(function() {
    console.log("Prawie koniec");
});

function findFirst(arr, name) {
    let math = undefined;
    for (var i=0; i<arr.length; i++) {
        if (arr[i].name === name) {
            math = arr[i];
            break;
        }
    }
    return math;
}
```