
# LIENS VERS LA PLATEFORME DE TEST: https://jsbin.com

# Déclarez une variable

```javascript
let monAge = 40

monAge = 49

const monPrenom = "JORDAN"

console.log(monAge)
```

# Modifiez une variable

1- Utilisez des opérateurs

```javascript
let platsDejaVendues = 150
platsDejaVendues = placesDejaVendues + 10

let autresDeVendues = 150
autresDeVendues += 10

let Partie1 = "Mon nom est JORDAN"
let Partie2 = ", James JORDAN."
let punchline = Partie1 + Partie2

let punchline = "Mon nom est JORDAN"
punchline += ", James JORDAN."
```

2- Différenciez les types de données

```javascript
let platsDejaVendues = "150"
platsDejaVendues += "10"
console.log(platsDejaVendues)

let autresDeVendues = Number("150")
autresDeVendues += Number("10")
console.log(autresDeVendues)
```

# Structurez des données grâce aux objets

1- Déclarez un objet en JavaScript

```javascript
let Personnage = {
nom: "Wayne",
prenom: "JORDAN",
age: 25,
couleurPreferee: "rouge",
hobbies: "piscine"
}
```

2- Ajoutez une propriété à un objet JavaScript

```javascript
Personnage.vehiculePrefere = "bus"
```

3- Accédez à une propriété d’un objet JavaScript

```javascript
const nomDeMonPersonnage = Personnage.nom

// Vérification
console.log(nomDeMonPersonnage)
console.log(Personnage.nom)
```

# Regroupez des données grâce aux tableaux

1- Déclarez un tableau en JavaScript

```javascript
const CollectionDeFilms = ["Titanic", "Jurassic Park", "Le Seigneur des Anneaux"]

let premierFilmDuTableau = CollectionDeFilms[0]

const nombreDeFilms = CollectionDeFilms.length

CollectionDeFilms.push("Retour vers le futur")

CollectionDeFilms.pop()
```

2- copie par valeur

```javascript
let varSimple1 = 25
let varSimple2  = varSimple1

varSimple2 = 30

console.log("variable Simple1", varSimple1)
console.log("variable Simple2", varSimple2)
```

3- copie par refference

```javascript
let varComplexe1 = ['pomme', 'cerise']
let varComplexe2 = varComplexe1
let varComplexe3 = [...varComplexe1];

variableComplexe2.push('poire')

console.log('variable Complexe1', varComplexe1)
console.log('variable Complexe2', varComplexe2)
console.log('variable Complexe3', varComplexe3)
```
