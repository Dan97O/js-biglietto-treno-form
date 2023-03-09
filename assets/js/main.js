// numero km da percorrere
const kilometersToGo = Number(prompt('Quanti km devi percorrere?'))
console.log(kilometersToGo);

// età del passeggiero
const userAge = Number(prompt('Quanti anni hai?'));
console.log(userAge);

// calcolare il prezzo del viaggio 1km = 0.21€
const price_per_km = kilometersToGo * 0.21
const priceTicket = kilometersToGo * price_per_km

console.log(priceTicket);


// -20% <18 anni
// -40% >65 anni
// output con massimo due decimali .toFixed(2)
if(userAge < 18){
    const priceTicketYoung = (priceTicket / 100 * 20).toFixed(2);
    console.log(priceTicketYoung);
    // output con massimo due decimali 
    document.getElementById("total_price").innerHTML = (`il tuo prezzo Giovani é ${priceTicketYoung} €`);
} else if(userAge >65){
    const priceTicketOld = (priceTicket / 100 * 40).toFixed(2);
    console.log(priceTicketOld);
    // output con massimo due decimali 
    document.getElementById("total_price").innerHTML = (`il tuo prezzo Anziani é ${priceTicketOld} €`);
} else{
    // output con massimo due decimali 
    document.getElementById("total_price").innerHTML = (`il tuo prezzo Normale é ${priceTicket} €`);
}
