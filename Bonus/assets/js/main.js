

//Chiedo nome utente
var nomeUtente = prompt("Inserisci il tuo Nome!! \nAttenzione verrà tenuto conto delle minuscole e delle MAIUSCOLE !!!")

//chiedo cognome utente
var cognomeUtente = prompt("Inserisci il tuo Cognome!! \nAttenzione verrà tenuto conto delle minuscole e delle MAIUSCOLE !!!")

//colore preferito
var coloreUtente = prompt("Inserisci il tuo colore preferito!! \nAttenzione verrà tenuto conto delle minuscole e delle MAIUSCOLE !!!")

// chiedo un numero
var numeroUtente = prompt("Inserisci un numero da usare!!")

//Do il benvenuto al cliente
document.getElementById("titolo").innerHTML = "Benvenuto " + nomeUtente

//comunico i dati inseriti dall'utente
document.getElementById("nomeUtente").innerHTML = nomeUtente
document.getElementById("cognomeUtente").innerHTML = cognomeUtente
document.getElementById("coloreUtente").innerHTML = coloreUtente
document.getElementById("numeroUtente").innerHTML = numeroUtente


//stampo prima opzione di password
document.getElementById("prima_scelta").innerHTML = nomeUtente + cognomeUtente + coloreUtente + numeroUtente

//stampo seconda opzione di password
document.getElementById("seconda_scelta").innerHTML = cognomeUtente + coloreUtente + numeroUtente + nomeUtente

//stampo terza opzione di password
document.getElementById("terza_scelta").innerHTML = coloreUtente + numeroUtente + nomeUtente + cognomeUtente

//stampo quarta opzione di password
document.getElementById("quarta_scelta").innerHTML = numeroUtente + cognomeUtente + coloreUtente + nomeUtente

