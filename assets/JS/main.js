

// Chiedi all’utente il suo nome,
var nomeUtente = prompt("Inserisci il tuo Nome! \nAttenzione vengono tenute in cnsiderazione le minuscole e le maiuscole !!! ")

//poi chiedi il suo cognome,
var cognomeUtente = prompt("Inserisci il tuo Cognome! \nAttenzione vengono tenute in cnsiderazione le minuscole e le maiuscole !!!")


//poi chiedi il suo colore preferito
var colorePreferito = prompt("Inserisci il tuo colore preferito! \nAttenzione vengono tenute in cnsiderazione le minuscole e le maiuscole !!!")


//Infine scrivi sulla pagina il risultato nomecognomecolorepreferito21

var annoCorrente = 21

document.getElementById("titolo").innerHTML = "Benvenuto " + nomeUtente

document.getElementById("paragrafo").innerHTML = nomeUtente + cognomeUtente + colorePreferito + annoCorrente
