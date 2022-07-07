var terminal = document.getElementById("terminalSection");
var imagesDiv = document.getElementById("images");
var skipButton = document.getElementById("skipButton");
var skip = false;

skipButton.addEventListener("click", function () { skip = true; });
window.addEventListener("load", fifthYearPage);

async function fifthYearPage()
{
    //clearing screen
    terminal.innerHTML = "";

    var stringList = [
        "Durante il quinto anno ho svolto principalmente attivit\xE1 di orientamento (in ingresso e in uscita).",
        "L'orientamento con il politecnico mi ha permesso di capire finalmente quale fosse il percorso di studi pi\xFA adatto a me, ovvero l'ingegneria informatica.",
        "Trovo molto interessante l'applicazione dell'informatica e dei suoi concetti a situazioni concrete e di varia natura.",
        "In futuro sceglier\xF3 molto probabilmente di specializzarmi nel campo della sicurezza informatica e dell'elettronica, materia di cui mi sono appassionato durante gli anni nell'istituto.",
        "Essendo questo l'anno finale, vorrei aggiungere delle considerazioni finali sul mio pensiero riguardo l'attivit\xE1 PCTO nel complesso:",
        "Il punto dolente \xE9 la limitata presenza di attivita in-loco a causa pandemia.",
        "Il professore ha comunque cercato di riempire le lacune illustrandoci numerose volte le sue esperienze in azienda.",
        "Sono molto soddisfatto invece delle soft skill che ho acquisito, riguardo la gestione di eventi inattesi e la programmazione di attivit\xE1, l'uso dei programmi di videoconferenza come Google Meet, Microsoft Teams, Zoom e quindi l'acquisizione di esperienza su determinati ecosistemi di lavoro.",
        "Posso anche dire che 'grazie' al periodo difficile nel quale abbiamo tutti vissuto, ho potuto seguire un processo di introspezione che mi ha portato a conoscermi meglio, quindi a rendermi conto dei miei vantaggi e dei miei difetti.",
        "Ho lavorato anche sui miei difetti, cercando di tramutarli in vantaggi in modo da poterli sfruttare (competitivitá).",
        "Concludendo, sono appagato del percorso di PCTO che ho compiuto in questi anni e ringrazio tutti i professori delle opportunit\xE1 che mi sono state offerte e dell'incredibile supporto che mi \xE9 stato fornito.",
        "\xE9 anche grazie a voi se sono diventato la persona che sono oggi, e non potr\xF3 mai ringraziarvi abbastanza.",
        "Princivalle Sergio"
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

    image1.src = "Images/Zucchetti.png";
    image2.src = "Images/Orientamento.jpg";

    image2.style.width = "100%";
    image2.style.height = "40%";

    imagesDiv.appendChild(image1);
    imagesDiv.appendChild(image2);

    //button
    var buttonDiv = document.getElementById("buttons");

    var button1 = document.createElement("button");

    button1.innerHTML = "Torna alla home";
    button1.onclick = function () { window.location.href = "index.html"; };

    buttonDiv.appendChild(button1);
}

