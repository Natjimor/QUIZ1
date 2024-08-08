console.log('hola')
let words = [
    {
        word: ["f","l","o","w","e","r","s"],
        letter: ["l","w","f","s","r","o","e"]
    },
    {
        word: ["a","p","p","l","e"],
        letter: ["p","a","p","e","l"]
    },
    {
        word: ["o","r","a","n","g","e"],
        letter: ["r","o","a","g","n","e"]
    },
    {
        word: ["w","a","t","c","h","e","r"],
        letter: ["r","a","e","c","h","t","w"]
    },
    {
        word: ["w","i","t","c","h"],
        letter: ["h","t","i","c","w"]
    },
];

const aleatorio = words[Math.floor(Math.random() * words.length)];
console.log(aleatorio)

const letters = document.getElementById("containerword")
letters.textContent = aleatorio.letter.join();

aleatorio.letter.forEach(l => {
    const container = document.querySelector("#wordcontainer")
    const inputs = document.createElement("input")
    inputs.type = "text"
    container.appendChild(inputs)
});
