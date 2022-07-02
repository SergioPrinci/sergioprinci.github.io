var terminal = document.getElementById("terminalSection");
var imagesDiv = document.getElementById("images");
var skipButton = document.getElementById("skipButton");
var skip = false;

skipButton.addEventListener("click", function () { skip = true; });
window.addEventListener("load", mainPage);

async function mainPage()
{
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
            if (!skip) await sleep(5);
        }
        terminal.innerHTML += "<br>";
        if (!skip) await sleep(100);
    }

    if (!skip) await sleep(1000);

    //normal screen
    terminal.innerHTML = "";

    stringList = [
                " Avvio...",
                "Benvenuti in PCTO Versione 2.3b",
                "Tramite questo sito vi verr\xE1 descritta la mia esperienza di PCTO in questi tre anni.",
                "Prego, sciegliere l'anno di cui si vuole parlare."
    ];

    for (var i = 0; i < stringList.length; i++)
    {
        var string = stringList[i];
        for (var j = 0; j < string.length; j++)
        {
            terminal.innerHTML += string[j];
            if (!skip) await sleep(50);
        }
        terminal.innerHTML += "<br>";
        if (!skip) await sleep(700);
    }
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
                "Mentre aspettate, vi descriver\xF3 il contesto nel quale mi sono trovato all'interno del terzo anno scolastico.",
                "Con l'inizio di esso, si sono aperte le possibilit\xE1 di effettuare esperienze di PCTO.",
                "Ero molto desideroso di imparare cose nuove, e aspettavo da tempo l'opportunit\xE1 di affrontare una situazione di lavoro.",
                "Purtroppo, ci\xF3 non \xE9 stato possibile, a causa di ci\xF3 che ha messo in crisi l'intero mondo nel giro di pochi mesi:",
                "il coronavirus."
    ];

    for (var i = 0; i < stringList.length; i++)
    {
        var string = stringList[i];
        for (var j = 0; j < string.length; j++)
        {
            terminal.innerHTML += string[j];
            if (!skip) await sleep(50);
        }
        terminal.innerHTML += "<br>";
        if (!skip) await sleep(700);
    }

    await sleep(2000);

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
                "Al quarto anno di studio ero particolarmente deluso dal poco che ero riuscito a fare nell'anno precedente, per quanto non fosse colpa mia.",
                "Il periodo di lockdown mi aveva scosso emotivamente e mentalmente, e il mio desiderio di stare in casa si tramut\xF3 in un bisogno irrefrenabile di uscire.",
                "Tutta questa voglia di fare si tramut\xF3 in un accumulo di energia che mi permise di cogliere tutte le opportunit\xE1 e lavorare al massimo tutto l'anno.",
                "Considero questo anno determinante per me, soprattutto per come le esperienze che ho vissuto abbiano cambiato la mia forma mentis."
    ];

    for (var i = 0; i < stringList.length; i++)
    {
        var string = stringList[i];
        for (var j = 0; j < string.length; j++)
        {
            terminal.innerHTML += string[j];
            if (!skip) await sleep(50);
        }
        terminal.innerHTML += "<br>";
        if (!skip) await sleep(700);
    }

    await sleep(2000);

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
                "Quinto ed ultimo anno di scuola, grazie a ci\xF3 che \xE9 successo negli anni scorsi ho compreso molto di me stesso e cosa mi piace fare.",
                "Ci\xF3 \xE9 stato molto utile, perch\xE9 quest'anno, potendo sfruttare l'orientamento in uscita, ho avuto la possibilit\xE1 di scegliere il mio futuro.",
                "Inoltre, avevo gi\xE1 raggiunto il monte ore grazie alle molte esperienze che ho avuto negli anni precedenti.",
                "Tutto ci\xF3 ha portato a concentrarmi di pi\xFA sull'esame e su ci\xF3 che sarebbe venuto dopo."
    ];

    for (var i = 0; i < stringList.length; i++)
    {
        var string = stringList[i];
        for (var j = 0; j < string.length; j++)
        {
            terminal.innerHTML += string[j];
            if (!skip) await sleep(50);
        }
        terminal.innerHTML += "<br>";
        if (!skip) await sleep(700);
    }

    await sleep(2000);

    window.location.href = "fifthYear.html";
}