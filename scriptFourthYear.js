var terminal = document.getElementById("terminalSection");
var imagesDiv = document.getElementById("images");
var skipButton = document.getElementById("skipButton");
var skip = false;

skipButton.addEventListener("click", function () { skip = true; });
window.addEventListener("load", fourthYearPage);

async function fourthYearPage()
{
    await sleep(2000);

    //clearing screen
    terminal.innerHTML = "";

    var stringList = [
        "In questo quarto anno abbiamo cominciato con corsi offerti da Cisco, riguardanti vari aspetti dell'informatica.",
        "Sono stati corsi sui quali ho opinioni altalenanti: per quanto siano stati utili, c'era molta poca pratica all'interno.",
        "Poi si \xE9 presentata una grande occasione: il progetto CyberChallenge con l'universit\xE1 di Pisa.",
        "Ho fatto il test di ammissione, che purtroppo non ho passato, ma il risultato era abbastanza buono da poter rientrare in una graduatoria che sarebbe stata usata in caso di rinuncia da parte di qualcuno.",
        "Fortunatamente, sono entrato nel corso come 'spettatore esterno', anche se in seguito ho avuto il permesso di seguire il corso normalmente con i miei compagni.",
        "Credo che questo corso sia stato in assoluto una delle migliori esperienze che io abbia mai praticato, mi ha insegnato veramente tanto e di questo sono grato ai miei compagni di studio e ai tutor dell'ateneo.",
        "Infine, nel corso dell'anno ho avuto occasione di prendere parte a dei progetti con il professor Scimone, che mi hanno permesso di apprendere nozioni importanti sui vari linguaggi di programmazione e sui vantaggi/difetti che presentano.",
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
    var image3 = document.createElement("img");

    image1.src = "Images/Cisco.png";
    image2.src = "https://cyberchallenge.it/assets/press-kit/CCIT_Logo.png";
    image3.src = "https://img2.freepng.es/20190217/cu/kisspng-lecturer-clip-art-teacher-professor-school-5c690c02c2f318.1893442115503882267985.jpg";

    image1.onclick = "https://learningnetwork.cisco.com/s/";
    image2.onclick = "https://cyberchallenge.it/";

    image1.style.width = "60%";
    image2.style.width = "60%";
    image3.style.width = "60%";
    image1.style.height = "15%";
    image2.style.height = "15%";
    image3.style.height = "15%";

    imagesDiv.appendChild(image1);
    imagesDiv.appendChild(image2);
    imagesDiv.appendChild(image3);

    //button
    var buttonDiv = document.getElementById("buttons");

    var button1 = document.createElement("button");
    var button2 = document.createElement("button");
    var button3 = document.createElement("button");
    var button4 = document.createElement("button");

    button1.innerHTML = "Progetti Cisco";
    button2.innerHTML = "Progetto CyberChallenge";
    button3.innerHTML = "Progetti interni alla scuola";
    button4.innerHTML = "Torna alla home";

    button1.onclick = ciscoPage;
    button2.onclick = cyberChallengePage;
    button3.onclick = internProjPage;
    button4.onclick = function () { window.location.href = "index.html"; };
    
    buttonDiv.appendChild(button1);
    buttonDiv.appendChild(button2);
    buttonDiv.appendChild(button3);
    buttonDiv.appendChild(button4);
}

async function ciscoPage()
{
    //clearing screen
    terminal.innerHTML = "";

    var stringList = [
        "I tre progetti Cisco che abbiamo svolto sono stati interessanti, tranne in alcuni casi:",
        "Il primo corso, Get Connected, aveva l'obiettivo di dare un infarinatura base sul funzionamento di un computer, con concetti talvolta troppo semplici e ripetitivi.",
        "Il secondo corso trattava argomenti di era cybersecurity, soffermandosi sugli apparati di rete che hanno il compito di rinforzare la sicurezza interna (honeypot, firewall ecc).",
        "Il terzo corso infine, era un corso dedicato all'Internet of Things:",
        "L'IoT \xE9 quel gruppo di oggetti interconnessi che, dialogando fra di loro, possono fornire un servizio all'utente, (es. domotica, se una stazione meteorologica rileva pioggia, vengono chiuse le persiane elettriche).",
        "\xE9 stato sicuramente il pi\xFA interessante, poich\xE9 mi ha permesso di sviluppare certi dettagli del progetto realizzato in occasione di LetsApp",
        "Il vantaggio maggiore nell'aver praticato questi corsi sono indubbiamente i certificati Cisco, che risaltano in un curriculum di uno studente senza esperienze lavorative."
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
}

async function cyberChallengePage()
{
    //clearing screen
    terminal.innerHTML = "";

    var stringList = [
        "Questo corso \xE9 stato ricco di concetti, nozioni e 'epifanie' su molti aspetti dell'informatica.",
        "Il corso era basato principalmente sulla cybersicurezza (identificare vulnerabilit\xE1 di un programma, rilevare falle e eliminarle).",
        "Abbiamo esaminato i programmi a partire dal codice assembly degli stessi, per poi passare alle protezioni in compilazione e arrivare fino ai vari tipi di exploit da usare in esecuzione.",
        "Poi siamo passati alle vulnerabilit\xE1 web, che risultano essere diffuse quanto pericolose.",
        "Tutto ci\xF3 ha sicuramente aumentato la mia sensibilit\xE1 verso la sicurezza informatica, perfezionando la capacit\xE1 di scrivere codice sicuro.",
        "Per informazioni pi\xFA dettagliate, lascio il link ad un documento che contiene una descrizione ancora pi\xFA accurata del corso."
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

    var link = document.createElement("a");

    link.href = "CyberChallenge.html";
    link.innerHTML = "Link al documento";

    terminal.appendChild(link);
}

async function internProjPage()
{
    //clearing screen
    terminal.innerHTML = "";

    var stringList = [
        "I progetti che ho svolto all'interno della scuola sono stati due:",
        "Un progetto sulla 'computer vision': rimozione dello sfondo in un flusso video webcam, creazione di una sorgente video virtuale da poter usare nei programmi di videoconferenza.",
        "Un progetto sulla realt\xE1 aumentata: realizzazione di un applicativo, che mediante l'uso di un prisma in plastica, potesse creare un 'ologramma'.",
        "Sul primo progetto, abbiamo avuto un notevole aumento di prestazione (oltre il 300%) fra le due revisioni: la prima scritta con un linguaggio ad alto livello (Python, 18fps), la seconda usando un linguaggio pi\xFA a basso livello (C++, 80fps grazie alle API di accelerazione hardware Nvidia CUDA).",
        "Il secondo progetto invece non necessitava di una grande richiesta di prestazioni, quindi abbiamo mantenuto il codice semplice con l'utilizzo del linguaggio Python.",
        "Purtroppo ho perso i codici sorgente di questi due progetti, che si sono rivelati molto interessanti, soprattutto nell'analisi e nella profilazione delle due revisioni del primo progetto.",
        "Infine, grazie a questi progetti ho capito la mia area di lavoro preferita: il back-end, o comunque la realizzazione di applicativi a basso livello."
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
}