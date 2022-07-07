var terminal = document.getElementById("terminalSection");
var imagesDiv = document.getElementById("images");
var skipButton = document.getElementById("skipButton");
var skip = false;

skipButton.addEventListener("click", function () { skip = true; });
window.addEventListener("load", thirdYearPage);

async function thirdYearPage()
{
    await sleep(2000);

    //clearing screen
    terminal.innerHTML = "";

    stringList = [
        " All'inizio del terzo anno, abbiamo svolto dei corsi riguardanti la sicurezza sul posto di lavoro.",
        "Questo corso mi permise di imparare gli accorgimenti necessari su un luogo di lavoro, per non rischiare incidenti e garantire la mia sicurezza e delle persone intorno.",
        "Il primo corso a carattere informatico che ho svolto \xE9 stato 'Samsung LetsApp', corso che aveva l'obiettivo di formare studenti che potessero sviluppare un'idea di applicativo, puntato a risolvere problemi in cui ci imbattiamo giornalmente.",
        "Questo corso mi ha permesso di sviluppare la mia creativit\xE1, inoltre ho cominciato a capire i miei veri obiettivi futuri.",
        "Un'altra esperienza importante che ho fatto \xE9 stata quella di orientamento con le terze medie, effettuata nella mia vecchia scuola.",
        "Con questa ho appreso delle importanti nozioni sullo spirito di adattamento e sulla gestione di situazioni particolari (domande difficili, recuperare attenzione ragazzi).",
        "Scegliere l'attivit\xE1 di cui si vogliono conoscere i dettagli, oppure tornare alla pagina iniziale."
    ];

    for (var i = 0; i < stringList.length; i++)
    {
        var string = stringList[i];
        for (var j = 0; j < string.length; j++)
        {
            terminal.innerHTML += string[j];
            if (!skip) await sleep(charTime);
        }
        terminal.innerHTML += "<br>";
        if (!skip) await sleep(700);
    }

    //images
    var image1 = document.createElement("img");
    var image2 = document.createElement("img");

    image1.src = "images/Sicurezza.png";
    image2.src = "images/LetsApp.png";

    image2.onclick = function() {
        window.location.href = 'https://news.samsung.com/it/samsung-e-miur-presentano-letsapp-solve-for-tomorrow-edition';
    };

    imagesDiv.appendChild(image1);
    imagesDiv.appendChild(image2);

    //buttons
    var buttonDiv = document.getElementById("buttons");

    var button1 = document.createElement("button");
    var button2 = document.createElement("button");

    button1.innerHTML = "Progetto Samsung LetsApp";
    button2.innerHTML = "Torna alla home";

    button1.onclick = samsLetsApp;
    button2.onclick = function () { window.location.href = "index.html"; };
    
    buttonDiv.appendChild(button1);
    buttonDiv.appendChild(button2);
}

async function samsLetsApp()
{
    //clearing screen
    terminal.innerHTML = "";

    stringList = [
        " La mia idea consiste in una app che viene installata nei telefoni di tutti i netturbini della città.",
        "Il problema delle città pi\xFA grandi è l’enorme quantità di rifiuti e la relativa difficolt\xE1 di gestione dei cestini 'stradali'.",
        "Con un ESP32, un microcontrollore con Wi-Fi e bluetooth integrato, arriviamo all’applicazione hardware:",
        "tramite un sensore LIDAR, che permette di acquisire la distanza fra sensore e un oggetto con precisione, rilevo la quantitá di rifiuti.",
        "Quando questa quantitá supera una certa soglia, il microcontrollore manda un segnale tramite la rete cittadina ad un server, che poi inoltrerá alle app, informando cosí il netturbino tramite notifica che includerá le coordinate del GPS del cestino.",
        "Tramite integrazione con app di navigazione (Maps, Waze o altre), l'operatore ecologico potrá raggiungere il cestino in maniera veloce e semplice.",
        "Tutto ci\xF3 risulta molto scalabile, permettendo di aggiungere molti dettagli in futuro per personalizzare il sistema (collaborazione con cittadini volontari che svuotando i cestini guadagnano qualcosa sulla tassa dei rifiuti).",
        "È un’idea semplice e con costi ragionevoli (per un quartiere rientriamo nell’ordine di qualche migliaia di euro), ma che avrebbe un grande impatto sulla pulizia e sulla salute della città."
    ];

    for (var i = 0; i < stringList.length; i++)
    {
        var string = stringList[i];
        for (var j = 0; j < string.length; j++)
        {
            terminal.innerHTML += string[j];
            if (!skip) await sleep(charTime);
        }
        terminal.innerHTML += "<br>";
        if (!skip) await sleep(700);
    }

    imagesDiv.innerHTML = "";

    var image1 = document.createElement("img");
    var image2 = document.createElement("img");

    image1.src = "images/ESP32.png";
    image2.src = "images/Cestino.jpg";

    image1.onclick = function() { window.location.href = 'https://www.espressif.com/en/products/socs/esp32-s2/'; }

    image2.style.width = "40%";
    image2.style.height = "40%";

    imagesDiv.appendChild(image1);
    imagesDiv.appendChild(image2);
}