// Récupérer un élément par ID
let monTitre = document.querySelector("#titre");
console.log(monTitre);

// Récupérer un élément par classe
let monParagraphe = document.querySelector(".texte");
console.log(monParagraphe);

// Alternative : document.getElementById("titre");
// Alternative : document.getElementsByClassName("texte")[0];


//changer le texte
monTitre.textContent = "Bienvenue dans ma page JavaScript !";

//changer le style

monTitre.style.color = "red";
monTitre.style.fontSize = "40px";
monTitre.style.backgroundColor = "yellow";


// Créer un nouvel élément <p>
let nouveauParagraphe = document.createElement("p");




// Ajouter le paragraphe dans le body
document.body.appendChild(nouveauParagraphe);


// Ajouter dans un conteneur précis
let bouton = document.createElement("button");
bouton.textContent = "Cliquez-moi";

    // Ajouter une petite interaction
    bouton.onclick = function () {
        alert("Bouton cliqué !");
    };

let zone = document.querySelector("#conteneur");

zone.appendChild(bouton);


// Ajouter directement à l’intérieur d’un élément

document.querySelector("#conteneur").innerHTML += "<p>Texte ajouté directement avec innerHTML</p>"


// Ajouter un écouteur d’événement

let monBouton = document.getElementById("monBouton");

monBouton.addEventListener("click", () => {
    document.getElementById("message").innerText = "Bouton cliqué ✅";
});

// Fonction classique vs fonction fléchée

// Version classique
titre.addEventListener("click", function () {
    console.log("Clic détecté (classique)");
});

// Version fléchée
monBouton.addEventListener("click", () => {
    console.log("Clic détecté (fléchée)");
});

// Utiliser l’objet event

document.addEventListener("keydown", (event) => {
    console.log("Touche pressée :", event.key);
    if (event.key === "Enter") {
        alert("Vous avez appuyé sur Entrée !");
    }
});


// Exemple pratique : changer un bloc avec un bouton
let bloc = document.getElementById("bloc");
let monBouton2 = document.getElementById("changer");

monBouton2.addEventListener("click", () => {
    bloc.style.backgroundColor = "lightblue";
});
