




document.getElementById('btn_upload').addEventListener('click', function() {
     
    // numero km da percorrere
    const kilometersToGo = document.getElementById("km").value
    console.log(kilometersToGo);
    
    // età del passeggiero
    const userAge = document.getElementById("age").value
    console.log(userAge);
    
    // calcolare il prezzo del viaggio 1km = 0.21€
    const price_per_km = 0.21
    const priceTicket = kilometersToGo * price_per_km
    console.log(priceTicket);

 

    if(userAge < 18){
        const priceTicketYoung = (priceTicket * 0.2).toFixed(2);
        const finalprice = (priceTicket - priceTicketYoung).toFixed(2); 
        console.log(finalprice);
        document.getElementById("total_price").innerHTML = (`il tuo prezzo Giovani é ${finalprice} €`);
    } else if(userAge > 65){
        const priceTicketOld = (priceTicket * 0.4).toFixed(2);
        const finalprice = (priceTicket - priceTicketOld).toFixed(2); 
        console.log(priceTicketOld);
        document.getElementById("total_price").innerHTML = (`il tuo prezzo Anziani é ${finalprice} €`);
    } else{
        document.getElementById("total_price").innerHTML = (`il tuo prezzo Normale é ${priceTicket} €`);
    }  
  })












/* 

// -20% <18 anni
// -40% >65 anni
// output con massimo due decimali .toFixed(2)
if(userAge < 18){
    const priceTicketYoung = (priceTicket / 100 * 20).toFixed(2);
    console.log(priceTicketYoung);
    // output con massimo due decimali 
    document.getElementById("total_price").innerHTML = (`il tuo prezzo Giovani é ${priceTicketYoung} €`);
} else if(userAge > 65){
    const priceTicketOld = (priceTicket / 100 * 40).toFixed(2);
    console.log(priceTicketOld);
    // output con massimo due decimali 
    document.getElementById("total_price").innerHTML = (`il tuo prezzo Anziani é ${priceTicketOld} €`);
} else{
    // output con massimo due decimali 
    document.getElementById("total_price").innerHTML = (`il tuo prezzo Normale é ${priceTicket} €`);
}  

 */









/* 
const kmPercorsi = document.getElementById("km");

function upload() {
    document.getElementById("km").value = kmPercorsi;
    console.log(upload())
  }
  console.log(kmPercorsi)


 */
