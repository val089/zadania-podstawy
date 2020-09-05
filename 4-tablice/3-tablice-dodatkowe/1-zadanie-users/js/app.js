// ## Zadanie 1
// Wypisz imiona i nazwiska użytkowników oraz ich email np.
// ```
// Claire Lucas -> clairelucas@memora.com
// ```

console.groupCollapsed("Imiona i emaile");
users.forEach(user => {
    console.log(`name: ${user.name} email: ${user.email}`);
})
console.groupEnd();

// ## Zadanie 2
// Wypisz tablicę z wszystkimi użytkownikami pełnoletnimi
const adult = users.filter(user => {
    return user.age >= 18
});
console.log(adult);

// ## Zadanie 3
// Wypisz tablicę z wszystkimi kobietami
const woman = users.filter(user => {
    return user.gender === "female"
});
console.log(woman);

// ## Zadanie 4
// Wypisz tablicę użytkowników którzy mają tag "dolor"
const dolor = users.filter(user => {
    return user.tags.includes("dolor");
});
console.log(dolor);

// ## Zadanie 5
// Wypisz true/false w zależności od tego czy wszyscy użytkownicy są pełnoletni
console.log(users.every(user => user.age >= 18));

// ## Zadanie 6
// Wypisz true/false w zależności od tego czy chociaż jeden z użytkowników jest pełnoletni
console.log(users.some(user => user.age >= 18));

// ## Zadanie 7
// Wypisz nową tablicę zawierającą tylko imiona użytkowników które będą pisane dużymi literami
const names = users.map(user => {
    return user.name.toUpperCase();
});
console.log(names);

// ## Zadanie 8
// Wypisz liczbę kobiet i liczbę mężczyzn
// Wypisz tekst która grupa jest liczniejsza (np. "kobiety wygrywają")
const womanCount = woman.length;
const manCount = users.filter(user => user.gender === "male").length;

if (womanCount > manCount) {
    console.log("Kobiety wygrywają");
} else if (manCount > womanCount) {
    console.log("Panowie wygrywają");
} else {
    console.log("Remis");
}
