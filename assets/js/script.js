
let alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let listMot = ['REUSSITE','OPTIMISTE','JAVASCRIPT','DEVELOPPEMENT'];
let essais = 8;
let motadeviné = 'REUSSITE';  //le mot a deviné........
let lettredeviné = [];  // pour stoker les lettres proposées 
let monMot = []; // stocker le mot  deviner
let stocklettre;  // stockées la lettre proposée

//............cree contenaire............

let contenaire = document.createElement("div");
document.body.appendChild(contenaire);
contenaire.classList.add("contenaire");

//-------------- crée l'afficheur mots-------

let afficheMots = document.createElement("div");
afficheMots.classList.add("affiche-mots");
contenaire.appendChild(afficheMots);

//-------------crée clavier alphabet----------

 for(let index = 0; index < alphabet.length; index++){
let alphaClavier = document.createElement("button");
alphaClavier.classList.add("alphabtn");
contenaire.appendChild(alphaClavier);
alphaClavier.innerText = alphabet[index];

console.log(alphaClavier);

}

//-------------------------choix du mot mot............
//choisir un mot aléatoire

 const mot = listMot[Math.floor(Math.random() * listMot.length)];
console.log = (mot);

let tester = document.querySelectorAll(".alphabtn");
 console.log(tester);
 

let mesBoutons = document.querySelectorAll(".chiffres, .signes, .vergule");
console.log(mesBoutons);
mesBoutons.forEach((unBouton) => {
  unBouton.addEventListener("click", (evenementClick) => {
    // console.log(saisie.length)
    if(saisie.length === 0)
    document.querySelector(".calc-ecran").innerText = "";
    document.querySelector(".calc-ecran").innerText += evenementClick.target.innerText;
    saisie.push(evenementClick.target.innerText);
  
    
  });
});
 

// let element = alphabet[index];
// const events = ["mouseover", "click"];
// alphabet.forEach(element => {
  
//     for (let index = 0; index < events.length; index++) {
//         element.addEventListener(events[index], function() {
//         element.classList.toggle("classe-toggle");
//     })
        
//     }
    
// });

// let tester = document.querySelectorAll(".alphabtn");
// tester.forEach((unBtn ) => { 
//   unBtn.addEventListener("click", (eventClick) => {
//     //  console.log("Index : ", indexBtn + " " + unBtn);
//     if (motadeviné.includes(unBtn.innerText)) {
//             //  console.log("Vous avez déjà trouvé cette lettre.");
      
//             } else {
//              motadeviné.push(unBtn.innerText);
//              if (mot.includes(unBtn.innerText)) {
//               //  console.log("il est examiner -c'est  OK");
//                unBtn.style.backgroundColor = "gray";
//                unBtn.setAttribute("disabled", "")
//               essais--;
//              }
//             }
//           });
//   });
    


  
  //  let displayword = document.querySelector(".word-display");
  //     displayword.innerText = mot.split('');
//  for (let index = 0; index < displayword.length; index++) {
//     monMot.push(' _ ');
   
//    }
// let examiner = document.querySelectorAll(".alpha-btn");
// examiner.forEach((unBtn, indexBtn) => { 
//   unBtn.addEventListener("click", (eventClick) => {
//     console.log("Index : ", indexBtn + " " + unBtn);
//     if (devine.includes(unBtn.innerText)) {
//       console.log("Vous avez déjà trouvé cette lettre.");
//     } else {
//       devine.push(unBtn.innerText);
//       if (motAleatoire.includes(unBtn.innerText)) {
//         console.log("il est examiner -c'est  OK");
//         unBtn.style.backgroundColor = "gray";
//         unBtn.setAttribute("disabled", "")
//         nombreRestant--;
//         // console.log("index :", indexTiret);
//         // console.log("unTiret :", unTiret);
//         if (nombreRestant === 0) {
//           console.log("vous avez gagné");
//         }
//         document.querySelectorAll(".mot-secret > div").forEach((unTiret, indexTiret) => {
//           for (let indexMotMystere = 0; indexMotMystere < motAleatoire.length; indexMotMystere++) {
//             if (motAleatoire[indexMotMystere] === unBtn.innerText && indexMotMystere == indexTiret) {
//               // console.log("arrayMotMystere[indexMotMystere] :", motAleatoire[indexMotMystere]);
//               // console.log("unBtn.innerText :", unBtn.innerText);
//               unTiret.innerText = "-" + motAleatoire[indexMotMystere] + "-";
//             }
//           }
//           console.log(unBtn.innerText);
//         })
//       } else {
//         console.log("c'est n'ai pas bon ");
//         nombreDevie--;
//         console.log(nombreDevie);
//         if (nombreDevie === 0) {
//           console.log("vous avez perdu !");
//         }
//       }
//     }
//     console.log(devine);
//   })
// })
