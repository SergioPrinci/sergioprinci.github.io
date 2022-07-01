const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

var terminal = document.getElementById("terminalSection");

var stringList;

async function mainPage()
{
    await sleep(2000);

    //clearing screen
    terminal.innerHTML = "";

    stringList = [
        " *************** PIP-OS(R) V7.1.0.8 ***************",
        "COPYRIGHT 2022 ROBCO(R)", 
        "LOADER V1.1",
        "EXEC VERSION 41.10",
        "CPU TYPE: NVINTEL 128x8",
        "CPU CLOCK: 1.5GHz",
        "4G RAM SYSTEM",
        "32111938904 BYTES FREE",
        "NO HOLOTAPE FOUND",
        "LOAD ROM(1): PCTO.ROM",
        "ROM SIGNAGE: sergioprinci",
        "ROM VERSION: 2.3b",
        "ROM DATE: 2022-07-08",
        "ROM TIME: 00:00:00",
        "ROM SIZE: 32596 BYTES",
        "ROM CRC: 0x9D0A",
        "ROM INTEGRITY: OK",
        "LOADING CONTENT..."
    ];

    for (var i = 0; i < stringList.length; i++)
    {
        var string = stringList[i];
        for (var j = 0; j < string.length; j++)
        {
            terminal.innerHTML += string[j];
            await sleep(5);
        }
        terminal.innerHTML += "<br>";
        await sleep(100);
    }

    await sleep(1500);

    //normal screen
    terminal.innerHTML = "";

    stringList = [
                " Avvio...",
                "Benvenuti in PCTO Versione 2.3b.",
                "Tramite questo sito vi verr\xE1 descritta la mia esperienza di PCTO in questi tre anni.",
                "Prego, sciegliere l'anno di cui si vuole parlare."
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
    
    var buttonDiv = document.getElementById("buttons");

    var button1 = document.createElement("button");
    var button2 = document.createElement("button");
    var button3 = document.createElement("button");

    button1.innerHTML = "Terzo anno";
    button2.innerHTML = "Quarto anno";
    button3.innerHTML = "Quinto anno";

    button1.onclick = loadThirdYear;
    button2.onclick = loadFourthYear;
    button3.onclick = loadFifthYear;
    
    buttonDiv.appendChild(button1);
    buttonDiv.appendChild(button2);
    buttonDiv.appendChild(button3);
}

async function loadThirdYear()
{
    var buttons = document.getElementsByTagName("button");

    for (var i = 0; i < buttons.length; i++)
    {
        buttons[i].disabled = true;
    }

    terminal.innerHTML = "";

    stringList = [
                " Carico pagina...",
                "Mentre aspettate, vi dar\xF3 il contesto nel quale mi sono trovato nel terzo anno.",
                "Con l'inizio del terzo anno di scuola, si sono anche aperte le possibilit\xE1 di effettuare esperienze di PCTO.",
                "Ero molto felice di ci\xF3, e aspettavo soltanto un'opportunit\xE1 per affrontare una situazione di lavoro.",
                "Purtroppo, ci\xF3 non \xE9 stato possibile, a causa di ci\xF3 che ha messo in crisi l'intero mondo nel giro di pochi mesi:",
                "il coronavirus."
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

    await sleep(5000);

    window.location.href = "thirdYear.html";
}


async function loadFourthYear() {
    var buttons = document.getElementsByTagName("button");

    for (var i = 0; i < buttons.length; i++)
    {
        buttons[i].disabled = true;
    }

    terminal.innerHTML = "";

    stringList = [
                " Carico pagina...",
                "Siamo al quarto anno di studio, ed ero particolarmente deluso da ció che ero riuscito a fare l'anno scorso.",
                "Inoltre il periodo di lockdown mi aveva scosso emotivamente e mentalmente, e il mio desiderio di stare in casa si tramutó in un bisogno irrefrenabile di uscire.",
                "Questo anno peró fu di svolta nella mia carriera, e tutt'oggi penso che le esperienze che ho fatto in questo anno scolastico, abbiano cambiato la mia forma mentis definitivamente."
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

    await sleep(5000);

    window.location.href = "fourthYear.html";
}

async function loadFifthYear() 
{
    var buttons = document.getElementsByTagName("button");

    for (var i = 0; i < buttons.length; i++)
    {
        buttons[i].disabled = true;
    }

    terminal.innerHTML = "";

    stringList = [
                " Carico pagina...",
                "Mentre aspettate, vi dar\xF3 il contesto nel quale mi sono trovato nel terzo anno.",
                "Con l'inizio del terzo anno di scuola, si sono anche aperte le possibilit\xE1 di effettuare esperienze di PCTO.",
                "Ero molto felice di ci\xF3, e aspettavo soltanto un'opportunit\xE1 per affrontare una situazione di lavoro.",
                "Purtroppo, ci\xF3 non \xE9 stato possibile, a causa di ci\xF3 che ha messo in crisi l'intero mondo nel giro di pochi mesi:",
                "il coronavirus."];

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

    await sleep(5000);

    window.location.href = "fifthYear.html";
}

mainPage();