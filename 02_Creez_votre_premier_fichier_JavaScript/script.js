console.log("hello world")

console.log("Démarrage du programme...");

let prenom = "Sophie";
let age = 21;
console.log(`Bonjour ${prenom}, tu as ${age} ans.`);


// les conditions
// let taille = prompt("Entrez la taille en cm : ")

// if (taille >= 170) {
//     console.log(`${prenom}, tu es grande de taille.`);
// } else {
//     console.log(`${prenom}, tu es petite de taille.`);
// }

// const mot = "Bonjour J"
// let motUtilisateur = prompt("Entrez le mot : " + mot)

// switch (motUtilisateur) {
//     case mot:
//         console.log("Bravo !")
//         break
//     case "cretin":
//         console.log("Restez correct !")
//         break
//     case "Mecrant":
//         console.log("Restez correct !")
//         break
//     case "Vilain":
//         console.log("Soyez gentil !")
//         break
//     default:
//         console.log("Vous avez fait une erreur de frappe.")
// }


// les boucles 

// const listeMots = ['Cachalot', 'Pétunia', 'Serviette']

// console.log(listeMots[0])
// console.log(listeMots[1])
// console.log(listeMots[2])

// for (let i = 0; i < 3; i++) {
//     console.log(listeMots[i]);
// }

// for (let i = 5; i >= 1; i--) {
//     console.log(`Compte à rebours : ${i}`);
// }

// let i = 0
// while (i < 10) {
//     console.log(i)
//     i++
// }

// 
// Les fonctions 
// 


// 1. Définir une fonction simple

function direBonjour() {
    console.log("Bonjour !");
}

// Appel
direBonjour();


// 2. Les fonctions avec paramètres

function direBonjourA(nom) {
    console.log("Bonjour " + nom + " !");
}

// Appels
direBonjourA("Alice");
direBonjourA("Jordan");

// 3. Les fonctions qui retournent une valeur

function addition(a, b) {
    return a + b;
}

let resultat = addition(5, 3);
console.log("Résultat :", resultat);

// 5. Fonctions fléchées (ES6)

const multiplier = (x, y) => {
    return x * y;
};

console.log(multiplier(4, 5));