alert("dovrebbefunzionare");
//Chiediamo all'utente il suo nome
//Chiediamo all'utente il suo Cognome
//chiediamo all'utente il suo colore preferito
//chiediamo all'utente la sua etá
//Stampo a schermo il risultato usando: nomecognomecolorepreferito23
/*-------------------------*/

//Uso il prompt per chiedere il Nome all'utente salvandola in una variabile
let username = prompt("inserisci il tuo nome");
//console.log il risultato del prompt
console.log(username);
// Inserisco un h1 nell'html
/*---------NAME-----*/

//Uso il prompt per chiedere il Cognome all'utente salvandola in una variabile
let surname = prompt("inserisci il tuo cognome");
//console.log il risultato del prompt
console.log(surname);
// Inserisco un h1 nell'html
/*---------SURNAME-----*/

//Uso il prompt per chiedere il Colore preferito all'utente salvandola in una variabile
let favoritecolor = prompt("inserisci il tuo colore prefetito");
//console.log il risultato del prompt
console.log(favoritecolor);
// Inserisco un h1 nell'html
/*---------FAVORITE_COLOR----*/

//addizioniamo usando il segno +
let somma = "name" + "surname" + "fcolor" + 23;
let result = somma;

//seleziono e salvo in una variabile un elemento della doma con getElementById
let nameElement = document.getElementById("name");
console.log(nameElement);

//assegno all'innerHTML un nuovo valore
nameElement.innerHTML = ` ${username + surname + favoritecolor + 23}`;
