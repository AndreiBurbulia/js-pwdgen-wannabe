
//dico le intenzioni al partecipante
prompt("Ciao! ora ti chiedero di inserire il peso in kg, l'età e l'altezza in centimetri di 5 tuoi amici e in base ai dati che mi hai fornito ti restituiro dei dati riguardanti le medie!! /nPremi OK! per proseguire!");


//chiedo di inserire nome eta e altezza in cm al partecipante

//amico1
var pesoAmico1 = parseInt(prompt("Inserisci il peso del tuo primo amico!"));
var etaAmico1 = parseInt(prompt("Inserisci l'età del tuo primo amico!"));
var altezzaAmico1 = parseInt(prompt("Inserisci l'altezza in cm del tuo primo amico!"));

//amico2
var pesoAmico2 = parseInt(prompt("Inserisci il peso del tuo secondo amico!"));
var etaAmico2 = parseInt(prompt("Inserisci l'età del tuo secondo amico!"));
var altezzaAmico2 = parseInt(prompt("Inserisci l'altezza in cm del tuo secondo amico!"));

//amico3
var pesoAmico3 = parseInt(prompt("Inserisci il peso del tuo terzo amico!"));
var etaAmico3 = parseInt(prompt("Inserisci l'età del tuo terzo amico!"));
var altezzaAmico3 = parseInt(prompt("Inserisci l'altezza in cm del tuo terzo amico!"));

//amico4
var pesoAmico4 = parseInt(prompt("Inserisci il peso del tuo quarto amico!"));
var etaAmico4 = parseInt(prompt("Inserisci l'età del tuo quarto amico!"));
var altezzaAmico4 = parseInt(prompt("Inserisci l'altezza in cm del tuo quarto amico!"));

//amico5
var pesoAmico5 = parseInt(prompt("Inserisci il peso del tuo quinto amico!"));
var etaAmico5 = parseInt(prompt("Inserisci l'età del tuo quinto amico!"));
var altezzaAmico5 = parseInt(prompt("Inserisci l'altezza in cm del tuo quinto amico!"));


//peso medio del gruppo di amici

var pesoMedio = (pesoAmico1 + pesoAmico2 + pesoAmico3 + pesoAmico4 + pesoAmico5) / 5;

//eta media del gruppo di amici
var etaMedia = (etaAmico1 + etaAmico2 + etaAmico3 + etaAmico4 + etaAmico5) / 5;

//altezza media del gruppo di amici
var altezzaMedia = (altezzaAmico1 + altezzaAmico2 + altezzaAmico3 + altezzaAmico4 + altezzaAmico5) / 5;

//communico i dati all'utente
//slot amico 1
document.getElementById("peso_amico_1").innerHTML = pesoAmico1
document.getElementById("eta_amico_1").innerHTML = etaAmico1
document.getElementById("altezza_amico_1").innerHTML = altezzaAmico1

//slot amico 2
document.getElementById("peso_amico_2").innerHTML = pesoAmico2
document.getElementById("eta_amico_2").innerHTML = etaAmico2
document.getElementById("altezza_amico_2").innerHTML = altezzaAmico2

//slot amico 3
document.getElementById("peso_amico_3").innerHTML = pesoAmico3
document.getElementById("eta_amico_3").innerHTML = etaAmico3
document.getElementById("altezza_amico_3").innerHTML = altezzaAmico3

//slot amico 4
document.getElementById("peso_amico_4").innerHTML = pesoAmico4
document.getElementById("eta_amico_4").innerHTML = etaAmico4
document.getElementById("altezza_amico_4").innerHTML = altezzaAmico4

//slot amico 5
document.getElementById("peso_amico_5").innerHTML = pesoAmico5
document.getElementById("eta_amico_5").innerHTML = etaAmico5
document.getElementById("altezza_amico_5").innerHTML = altezzaAmico5


//Communico i dati medi all'utente
document.getElementById("peso_medio").innerHTML = pesoMedio
document.getElementById("eta_media").innerHTML = etaMedia
document.getElementById("altezza_media").innerHTML = altezzaMedia