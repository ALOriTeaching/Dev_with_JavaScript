// On récupère les éléments du DOM
const form = document.getElementById("userForm");

const usernameInput = document.getElementById("username");

const emailInput = document.getElementById("email");

let baliseCouleur = document.querySelectorAll('input[name="couleur"]')

const errorMsg = document.getElementById("error");

let errors = []; // Déclaration de la variable errors

// Quand le formulaire est soumis
form.addEventListener("submit", function (event) {
    event.preventDefault(); // On empêche le rechargement de la page

    let couleur = ""
    for (let i = 0; i < baliseCouleur.length; i++) {
        if (baliseCouleur[i].checked) {
            couleur = baliseCouleur[i].value
            break
        }
    }
    console.log(couleur) // affiche la valeur du radio coché
    console.log("Nom d'utilisateur :", usernameInput.value);
    console.log("Email :", emailInput.value);

    alert(
        "Formulaire soumis avec les informations: " +
        "\nNom d'utilisateur : " + usernameInput.value +
        "\nEmail : " + emailInput.value +
        "\nCouleur préférée : " + couleur
    )

    // Validation du nom
    if (usernameInput.value.length < 3) {
        errors.push("❌ Le nom doit contenir au moins 3 caractères");
    }

    // Validation de l'email (simple vérification avec includes)
    if (!emailInput.value.toLowerCase().endsWith('@jord.com')) {
        errors.push("❌ L'adresse e-mail doit se terminer par @jord.com");
    }

    if (errors.length > 0) {
        errorMsg.textContent = errors.join(" | "); // Affiche toutes les erreurs
    } else {
        alert("✅ Formulaire soumis avec succès !");
    }
});
