// creo un array contenente una lista di cognomi
var lista = ['Rossi', 'Ferrari', 'Esposito', 'Romano', 'Gallo', 'Conte', 'Leone', 'Pellegrino'];


// chiedo il cognome dell'utente

var cognomeUtente = prompt('Inserisci il tuo cognome');

console.log(cognomeUtente);

//inserisco nella lista il cognome inserito dall'utente

lista.push(cognomeUtente);

console.log(lista);

//ordino la lista di cognomi in ordine alfabetico

lista.sort()

console.log(lista);
//determino la posizione del cognome dell'utente all'interno della lista
var posizione = lista.indexOf(cognomeUtente);

posizione = posizione + 1;

console.log(posizione);

document.getElementById('cognome').innerHTML = 'il suo cognome di trova in posizione ' + posizione;
