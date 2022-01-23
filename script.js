// Tableau de citations

import { CITATIONS } from './modele.js'


 let button = document.querySelector('#nouveau');

 let citation = document.querySelector('#citation');
 let auteur = document.querySelector('#auteur')

//  console.log(nombreRandom);


 button.addEventListener('click', ()=>{
   let nombreRandom = 0
   nombreRandom = Math.round(Math.random() * 21);
   AfficheCitation(nombreRandom)
 })

 function AfficheCitation(nombre){
console.log(nombre);
  citation.innerHTML = CITATIONS[nombre][0]
  auteur.innerHTML = CITATIONS[nombre][1]
//  console.log(citations[nombre]);
 }
