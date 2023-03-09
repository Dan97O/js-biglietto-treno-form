
/* btn upload */
document.getElementById('btn_upload').addEventListener('click', function() {
     
    // numero km da percorrere
    const kilometersToGo = document.getElementById("km").value
    console.log(kilometersToGo);
    
    // età del passeggiero
    const userAge = document.getElementById("age").value
    console.log(userAge);

    const name = document.getElementById("name").value
    console.log(name);
    document.getElementById("passengers").innerHTML = (`Nome passeggiero ${name}`);


    
    // calcolare il prezzo del viaggio 1km = 0.21€
    const price_per_km = 0.21
    const priceTicket = kilometersToGo * price_per_km
    console.log(priceTicket);

 

    if(userAge < 18){
        const priceTicketYoung = (priceTicket * 0.2).toFixed(2);
        const finalprice = (priceTicket - priceTicketYoung).toFixed(2); 
        console.log(finalprice);
        document.getElementById("total_price").innerHTML = (`Il tuo prezzo Giovani é ${finalprice} €`);
    } else if(userAge > 65){
        const priceTicketOld = (priceTicket * 0.4).toFixed(2);
        const finalprice = (priceTicket - priceTicketOld).toFixed(2); 
        console.log(priceTicketOld);
        document.getElementById("total_price").innerHTML = (`Il tuo prezzo Anziani é ${finalprice} €`);
    } else{
        document.getElementById("total_price").innerHTML = (`Il tuo prezzo Normale é ${priceTicket} €`);
    }  
})


/* btn reset */
document.getElementById('reset').addEventListener('click', function() {
        document.getElementById("name").value = "";
        document.getElementById("age").value = "";
        document.getElementById("km").value = "";
        document.getElementById("passengers").innerHTML = "";
        document.getElementById("total_price").innerHTML = "";
})
  
  
    