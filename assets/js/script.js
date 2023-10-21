
console.log("Script chargé");
let alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let listMot = ['REUSSITE','OPTIMISTE','JAVASCRIPT','DEVELOPPEMENT'];
let essais = 6;
// let motadevine = "REUSSITE";  //le mot a deviné........
let lettredevine = [];  // pour stoker les lettres proposées 
// let monMot = []; // stocker le mot  deviner
let trouve = false;

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
 }

// c........creé l'image............
let pendus = ["./assets/img/un.png",
              "./assets/img/deux.png",
              "./assets/img/trois.png",
              "./assets/img/quatre.png",
              "./assets/img/cinq.png",
              "./assets/img/six.png",
              "./assets/img/sept.png"];

let image = document.createElement("img");
image.setAttribute("id", "pendu");
image.setAttribute("src","./assets/img/un.png");
document.body.appendChild(image);
indeximg = 0;

//.............affiche image perdu........
let perdu = document.createElement("img");
perdu.setAttribute("id", "perdu");
//  image.setAttribute("src","./assets/img/perdu.png");
document.body.appendChild(perdu);

//..........affiche image gagner........
 let gagner = document.createElement("img");
 gagner.setAttribute("id","gagner");
//  gagner.setAttribute("src","./assets/img/gagner.jpg");
document.body.appendChild(gagner);

//-------------------------choix du mot mot............
//choisir un mot aléatoire
let motjouer = document.querySelector(".alphabtn");
let mot = listMot[Math.floor(Math.random() * listMot.length)];
console.log(mot);
mot = mot.split('');
    // motjouer.innerHTML = mot.mp(()=>".alphabtn").join("");//revoir demain dimanche //

    // ............afficher les lettres du mot a deviné..........

 let nbrRestant = mot.length;
let tester = document.querySelectorAll(".alphabtn");
//  console.log(tester);
  tester.forEach((unbutton) =>{
     unbutton.addEventListener("click",(evenementClick) =>{
        if(lettredevine.includes(unbutton.innerText)){
          console.log("déja proposée")
        }
        else {
          lettredevine.push(unbutton.innerText);
          for (let index = 0; index < mot.length; index++) {
            if(mot[index] == unbutton.innerText){
              console.log("Le mot mystère contient bien la lettre : ", unbutton.innerText);
              unbutton.style.backgroundColor = "green";
              unbutton.setAttribute("desabled", "");
              nbrRestant --;
              trouve= true;
            }        

             if(nbrRestant ==0){
              console.log("Gagner");
              gagner.setAttribute("src","./assets/img/gagner.jpg");
             } 
            }
          }
          if (trouve === false) {
            essais--;
            indeximg++;
            image.setAttribute("src", pendus[indeximg]);
            console.log("nombre de vies restantes = " + essais);
          }
          if(essais == 0) {
            console.log("perdu");
            perdu.setAttribute("src","./assets/img/perdu.png");
          
          }
          trouve = false;
         }
     )});
        
  
 







 











 
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
