var terminal = document.getElementById("terminalSection");
var imagesDiv = document.getElementById("images");
var skipButton = document.getElementById("skipButton");
var skip = false;

skipButton.addEventListener("click", function () { skip = true; });

async function fourthYearPage()
{
    await sleep(2000);

    //clearing screen
    terminal.innerHTML = "";

    var stringList = [
        "In questo quarto anno, abbiamo iniziato con dei corsi offerti da Cisco, riguardanti vari aspetti dell'informatica.",
        "Sono stati corsi sui quali ho opinioni altalenanti, perché per quanto siano stati utili c'era molta poca pratica all'interno.",
        "Poi si é presentata una grande occasione: il progetto CyberChallenge con l'universitá di Pisa.",
        "Ho fatto il test di ammissione, e purtroppo non lo ho passato, ma il risultato era abbastanza buono da permettermi di farmi finire in una graduatoria.",
        "Per fortuna, in questa graduatoria ero in buona posizione, e sono stato chiamato a entrare nel corso come 'spettatore esterno', anche se poi ho avuto il permesso di seguire il corso normalmente con i miei compagni.",
        "Credo che questo corso sia stato in assoluto una delle migliori esperienze che io abbia mai praticato, mi ha insegnato veramente tanto e di questo sono grato ai miei compagni di studio e ai tutor che mi hanno aiutato anche in momenti di crisi.",
        "Infine, nel corso dell'anno ho avuto occasione di prendere parte a dei progetti con il professor Scimone, che mi hanno permesso di capire cose nuove sui linguaggi di programmazione e sui vantaggi/difetti che presentano.",
        "Scegliere l'attivitá di cui si vogliono conoscere i dettagli, oppure tornare alla pagina iniziale."
    ];

    for (var i = 0; i < stringList.length; i++)
    {
        var string = stringList[i];
        for (var j = 0; j < string.length; j++)
        {
            terminal.innerHTML += string[j];
            if (skip == false) await sleep(30);
        }
        terminal.innerHTML += "<br>";
        if (skip == false) await sleep(700);
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
        "I tre progetti Cisco che abbiamo svolto sono stati in parte interessanti, in parte abbastanza noiosi:",
        "Il primo corso, Get Connected, aveva l'obiettivo di dare un infarinatura base sul funzionamento di un computer, concetti che peró noi informatici conoscevamo giá.",
        "Il secondo e il terzo corso invece sono stati molto interessanti: il primo era sulla cybersecurity e sul come costruire una rete sicura, quindi con concetti di networking che reputo essere stati molto interessanti.",
        "Il terzo corso infine, era un corso dedicato all'internet of things, ovvero a quello che oggi chiameremmo 'smart':",
        "L'IoT é quel gruppo di oggetti interconnessi che dialogando fra di loro possono fornire un servizio all'utente, cosa che vediamo molto utilizzata in domotica (ad esempio, se una stazione meteorologica vede che sta piovendo, puó comunicare con una casa per fare chiudere le persiane elettroniche).",
        "É stato sicuramente il piú interessante, poiché mi ha permesso di sviluppare certi aspetti del progetto personale che avevo realizzato l'anno precedente.",
        "Questi corsi sono stati molto utili, e penso che uno dei vantaggi piú grandi sia il rilascio dei certificati firmati Cisco, che risaltano in un curriculum di uno studente senza esperienze lavorative."
    ];

    for (var i = 0; i < stringList.length; i++)
    {
        var string = stringList[i];
        for (var j = 0; j < string.length; j++)
        {
            terminal.innerHTML += string[j];
            if (skip == false) await sleep(30);
        }
        terminal.innerHTML += "<br>";
        if (skip == false) await sleep(700);
    }
}

async function cyberChallengePage()
{
    //clearing screen
    terminal.innerHTML = "";

    var stringList = [
        "Questo corso é stato ricco di concetti, nozioni e 'rivelazioni' vere e proprie su molti aspetti dell'informatica.",
        "Il corso era basato principalmente sulla cybersicurezza e sull'identificare le vulnerabilitá di un programma.",
        "Abbiamo quindi esaminato i programmi a partire dal codice assembly degli stessi, per poi passare alle protezioni in compilazione e arrivare fino ai vari tipi di exploit da usare in esecuzione.",
        "Poi siamo passati alle vulnerabilitá web, che si trovano su internet e che risultano essere molto diffuse quanto pericolose.",
        "Tutto ció ha sicuramente avuto effetto sulla mia sensibilitá riguardo la sicurezza informatica, quindi sulla capacitá di scrivere codice sicuro.",
        "Per informazioni piú dettagliate lascio il link ad un documento Markdown che contiene una descrizione ancora piú accurata del corso."
    ];

    for (var i = 0; i < stringList.length; i++)
    {
        var string = stringList[i];
        for (var j = 0; j < string.length; j++)
        {
            terminal.innerHTML += string[j];
            if (skip == false) await sleep(30);
        }
        terminal.innerHTML += "<br>";
        if (skip == false) await sleep(700);
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
        "Un progetto sull'elaborazione di immagini da una webcam e relativa rimozione dello sfondo, con la creazione di una sorgente video virtuale da usare nei programmi di videoconferenza.",
        "Un progetto sulla realtá aumentata, con la realizzazione di un applicativo che tramite un prisma potesse creare un ologramma.",
        "Sul primo progetto, abbiamo avuto un notevole aumento di prestazione (oltre il 300%) fra le due revisioni, una usando un linguaggio ad alto livello (Python, 18fps), l'altra usando un linguaggio piú a basso livello (C++, 80fps grazie alle API di accelerazione hardware Nvidia CUDA).",
        "Il secondo progetto invece non necessitava di una grande richiesta di prestazioni, quindi lo abbiamo mantenuto piú semplice sempre con l'utilizzo di Python.",
        "Purtroppo ho perso i codici sorgente di questi due progetti, ma si sono rivelati molto interessanti, soprattutto nell'analisi e nella profilazione delle due revisioni del primo progetto.",
        "Infine, grazie a questi progetti ho capito che la mia area di lavoro preferita é sicuramente il back-end, o comunque la realizzazione di applicativi a basso livello."
    ];

    for (var i = 0; i < stringList.length; i++)
    {
        var string = stringList[i];
        for (var j = 0; j < string.length; j++)
        {
            terminal.innerHTML += string[j];
            if (skip == false) await sleep(30);
        }
        terminal.innerHTML += "<br>";
        if (skip == false) await sleep(700);
    }
}

fourthYearPage();