var terminal = document.getElementById("terminalSection");
var imagesDiv = document.getElementById("images");

async function thirdYearPage()
{
    await sleep(2000);

    //clearing screen
    terminal.innerHTML = "";

    stringList = [
        " All'inizio del terzo anno, abbiamo svolto dei corsi riguardanti la sicurezza sul posto di lavoro.",
        "Questo corso mi permise di imparare come gestire i pericoli sul luogo di lavoro, quindi come svolgere il proprio lavoro in sicurezza, evitando incidenti.",
        "Il primo corso vero e proprio che ho svolto fu 'Samsung LetsApp', un corso con l'obiettivo di formare studenti che potessero sviluppare un idea di applicativo, puntato a risolvere problemi cittadini, come nettezza urbana ecc.",
        "Questo corso mi ha permesso di sviluppare la mia creativitá in modi che non avrei immaginato, e che mi ha permesso di compiere il primo passo nel farmi un idea sul mio futuro.",
        "Un'altra esperienza importante che ho fatto é stata quella di orientamento con le terze medie, esperienza nella quale sono andato nella mia vecchia scuola:",
        "per via di situazioni un po' difficili che si sono sviluppate con dei genitori, ho imparato ad adattarmi alle situazioni piú complicate e a rispondere a 'domande difficili'.",
        "Scegliere l'attivitá di cui si vogliono conoscere i dettagli, oppure tornare alla pagina iniziale."
    ];

    for (var i = 0; i < stringList.length; i++)
    {
        var string = stringList[i];
        for (var j = 0; j < string.length; j++)
        {
            terminal.innerHTML += string[j];
            await sleep(30);
        }
        terminal.innerHTML += "<br>";
        await sleep(700);
    }

    //images
    var image1 = document.createElement("img");
    var image2 = document.createElement("img");

    image1.src = "images/Sicurezza.png";
    image2.src = "images/LetsApp.png";

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
        "Il problema delle città piú grandi è l’enorme quantità di rifiuti e la relativa difficoltá di gestione dei cestini pieni.",
        "Con un semplice ESP32, un microcontrollore con Wi-Fi integrato, arriviamo all’applicazione hardware.",
        "Con questo, tramite un sensore LIDAR, che permette di acquisire la distanza dell'oggetto puntato dai vari laser che lo stesso sensore emette, rilevo quanto il cestino sia pieno, e se viene visto come pieno, il Raspberry manda un segnale tramite wi-fi all’app, informando il netturbino tramite notifica e dandogli il compito di svuotare quel particolare cestino.",
        "Tutto ció risulta molto scalabile, quindi permettendo di aggiungere molti dettagli in futuro per personalizzare il tutto, ad esempio la collaborazione con cittadini volontari che possono svuotare i cestini guadagnando qualcosa sulla tassa dei rifiuti.",
        "È un’idea credo piuttosto facile da realizzare e poco dispendiosa soprattutto (per una città come La Spezia rientriamo nell’ordine di piú o meno una migliaia di euro), ed è soprattutto un buon investimento per la pulizia e la salute della città."
    ];

    for (var i = 0; i < stringList.length; i++)
    {
        var string = stringList[i];
        for (var j = 0; j < string.length; j++)
        {
            terminal.innerHTML += string[j];
            await sleep(30);
        }
        terminal.innerHTML += "<br>";
        await sleep(700);
    }

    imagesDiv.innerHTML = "";

    var image1 = document.createElement("img");
    var image2 = document.createElement("img");

    image1.src = "images/ESP32.png";
    image2.src = "images/Cestino.jpg";

    imagesDiv.appendChild(image1);
    imagesDiv.appendChild(image2);
}

thirdYearPage();