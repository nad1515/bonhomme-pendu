let main = document.createElement("main");
document.body.appendChild(main);
let alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let vocabulaire = ['reussite','optimiste','perceverance','patience'];
let essais = 8;
let lettres_restantes = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let motadeviné;

//............cree contenaire............

let contenaire = document.createElement("div");
main.appendChild(contenaire);
contenaire.classList.add("contenaire");

//-------------- crée l'afficheur mots-------

let afficheMots = document.createElement("div");
afficheMots.classList.add("affiche-mots");
contenaire.appendChild(afficheMots);

//-------------crée clavier alphabet----------

 for(let index = 0; index < alphabet.length; index++){
let alphaClavier = document.createElement("button");
alphaClavier.classList.add("alphabet");
contenaire.appendChild(alphaClavier);
alphaClavier.innerText = alphabet[index];

console.log(alphaClavier);
}
//-------------------------afficher l'alphabet dans affiche mot............



  let monimage = document.createElement("div");
  monimage.classList.add("image");
  contenaire.appendChild(monimage);

// //----------------------crée container img pendu----
