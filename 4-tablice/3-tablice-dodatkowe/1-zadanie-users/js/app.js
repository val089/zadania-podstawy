// ## Zadanie 1
// Wypisz imiona i nazwiska użytkowników oraz ich email np.

// ```
// Claire Lucas -> clairelucas@memora.com
// ```

        for (const user of users) {
            console.log(`${user.name} -> ${user.email}`);
        }

// ## Zadanie 2
// Wypisz tablicę z wszystkimi użytkownikami pełnoletnimi

        const adultUsers = users.filter(user => {
            return user.age >= 18;
        });

        console.log(adultUsers);

// ## Zadanie 3
// Wypisz tablicę z wszystkimi kobietami

        const women = users.filter(user => {
            return user.gender === 'female';
        });

        console.log(women);

// ## Zadanie 4
// Wypisz tablicę użytkowników którzy mają tag "dolor"


        function findDolor() {
            for (const user of users) {
                let index = user.tags.findIndex(el => {
                    return  el === 'dolor';
                });

                if (user.tags[index] === 'dolor') {
                    console.log(user);
                };
            }
        }
        findDolor();

        or

        const dolor = users.filter(user => {
            return user.tags.includes('dolor');
        });
        console.log(dolor);

// ## Zadanie 5
// Wypisz true/false w zależności od tego czy wszyscy użytkownicy są pełnoletni

        function allAdults() {
                return adultUsers.length === users.length;
        }
        console.log(allAdults());

        or

        console.log(users.every(user => user.age >= 18));

// ## Zadanie 6
// Wypisz true/false w zależności od tego czy chociaż jeden z użytkowników jest pełnoletni

        console.log(users.some(user => user.age >= 18));

// ## Zadanie 7
// Wypisz nową tablicę zawierającą tylko imiona użytkowników które będą pisane dużymi literami

        const usersNames = users.map(user => {
                const names = user.name.split(" ");
                return names[0];
        });
        console.log(usersNames);

// ## Zadanie 8
// Wypisz liczbę kobiet i liczbę mężczyzn
// Wypisz tekst która grupa jest liczniejsza (np. "kobiety wygrywają")

        const womenCount = women.length;
        const menCount = users.filter(user => user.gender === 'male').length;

        console.log(`Mężczyzn jest: ${menCount}.`);
        console.log(`Kobiet jest: ${womenCount}.`);

        if (menCount > womenCount) {
                console.log('Faceci wygrywają!');
        } else if (menCount < womenCount) {
                console.log('Kobiety wygrywają!');
        } else {
                console.log('Remis!');
        }