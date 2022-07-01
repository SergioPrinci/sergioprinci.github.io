var terminal = document.getElementById("terminalSection");

async function thirdYearPage()
{
    await sleep(2000);

    //clearing screen
    terminal.innerHTML = "";

    stringList = [
        " All'inizio del terzo anno, abbiamo svolto dei corsi riguardanti la sicurezza sul posto di lavoro.",
        "Questo fu un corso che mi permise di imparare come gestire i pericolo sul luogo di lavoro e come svolgere il proprio lavoro in sicurezza, evitando incidenti.",
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
}

thirdYearPage();