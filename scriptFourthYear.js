var terminal = document.getElementById("terminalSection");
var imagesDiv = document.getElementById("images");

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
            await sleep(30);
        }
        terminal.innerHTML += "<br>";
        await sleep(700);
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

    image1.style.width = "50%";
    image2.style.width = "50%";
    image3.style.width = "50%";
    image1.style.height = "20%";
    image2.style.height = "20%";
    image3.style.height = "20%";

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
    button3.innerHTML = "Progetto interni alla scuola";
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
        "Cisco"
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
}

async function cyberChallengePage()
{
    //clearing screen
    terminal.innerHTML = "";

    var stringList = [
        "CyberChallenge"
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
}

async function internProjPage()
{
    //clearing screen
    terminal.innerHTML = "";

    var stringList = [
        "Intern Proj"
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
}

fourthYearPage();