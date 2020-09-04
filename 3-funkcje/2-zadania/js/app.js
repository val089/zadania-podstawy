const sum = (a, b) => console.log(a + b);

const myPow = a => Math.pow(a);

const hr = _ => console.log("-------");

const bigWords = tab => tab.map(el => el.toUpperCase())

const sumTab = tab => tab.reduce((a, b) => a + b);

const test = _ => "abecadło z pieca spadło";

(() => {
    console.log("Prawie koniec");
});

const findFirst = (arr, name) =>  {
    return arr.find(el => el === name)
}