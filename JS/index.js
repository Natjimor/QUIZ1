console.log('hola');

let words = [
    {
        word: ["f","l","o","w","e","r","s"],
        letter: ["LWFSROE"]
    },
    {
        word: ["a","p","p","l","e"],
        letter: ["PAEPL"]
    },
    {
        word: ["o","r","a","n","g","e"],
        letter: ["ROAGNE"]
    },
    {
        word: ["w","a","t","c","h","e","r"],
        letter: ["RAECHTW"]
    },
    {
        word: ["w","i","t","c","h"],
        letter: ["HTICHW"]
    },
];

const aleatorio = words[Math.floor(Math.random() * words.length)];
console.log(aleatorio);

const letters = document.getElementById("containerword");
letters.textContent = aleatorio.letter.join('');

aleatorio.word.forEach((letter, index) => {
    const container = document.querySelector("#wordcontainer");
    const input = document.createElement("input");
    input.type = "text";
    input.maxLength = 1;
    container.appendChild(input);

    input.addEventListener("change", (e) => {
        const userInput = e.target.value.toLowerCase(); 

        if (userInput === letter) {
            console.log("Éxito");
        } else {
            console.log("Intenta de nuevo"); 
        }
    });
});

