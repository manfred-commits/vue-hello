// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.



// 1. inizializzo una variabile vue, per poter accedere alle funzionalità di vueJs che ci permettono di accedere a una sintassi per il nostro js diversa da quella utilizzata nel clear Js in cui si utilizza il modello DOM /
const application = new Vue({

    // 2. creo un id, che corrisponderà al nostro "ROOT" da poter associare al html, così da poter utilizzare vueJS per quel SINGOLO elemento
    el: "#application",
    data:{
        message: "Hello there!"
    }

});
