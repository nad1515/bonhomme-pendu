let main = document.createElement("main");
document.body.appendChild(main);
let alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let vocabulaire = ['REUSSITE','OPTIMISTE','JAVASCRIPT','DEVELOPPEMENT'];
let essais = 8;
// let lettres_restantes = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let motadeviné = 'REUSSITE';  //le mot deviné........
let tousdeviné = [];  // pour stoker les lettres proposées 
let monMot = []; // stocker le mot a deviner
let devine;  // stockées la lettre proposée

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
//-------------------------choix du mot mot............
//choisir un mot aléatoire

currentWord = vocabulaire[Math.floor(Math.random() * vocabulaire.length)];
console.log = (currentWord);


     let displayword = motadeviné.split('');
    for (let index = 0; index < displayword.length; index++) {
    monMot.push(' _ ');
   
   }
//  let monMotDisplay = document.getElementById('mot'); //recuperer l'objet qui va afficher le mot au fur et a mesure
//  let tousdevinéDisplay = document.getElementById('tousdeviné');// recuperer l'objet qui va afficher les lettres deja proposer
//  let infosDisplay = document.getElementById('infos'); //recupere l'objet pour afficher le message de felicitations
  //on concatene le tableau pour faire un mot
  //  monMotDisplay.textContent = monMot.join('');
  // fonction pour verifier les lettres entrées
  // function validate(){

  // }




// let monMot = document.querySelectorAll("alphabet");
// console.log(monMot);
// monMot.forEach((alphabtn) =>{
//   alphabtn.addEventListener('click',(eventClick) =>{
//     if()
  
//   } );

// });
//
// const events = ["mouseover", "click"];
// arrayElements.forEach(element => {
//     for (let index = 0; index < events.length; index++) {
//         element.addEventListener(events[index], function() {
//         element.classList.toggle("classe-toggle");
//     })
        
//     }
    
// });



//   let monimage = document.createElement("div");
//   monimage.classList.add("image");
//   contenaire.appendChild(monimage);

// // //----------------------crée container img pendu----
