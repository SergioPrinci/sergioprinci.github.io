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
        "Durante il quinto anno ho quindi svolto principalmente attivit\xE1 di orientamento, come l'incontro Zucchetti o con il politecnico di Torino.",
        "L'orientamento con le medie \xE9 stata un esperienza stimolante, perch\xE9 mi ha permesso di allenarmi sul come improvvisare un discorso.",
        "L'orientamento con il politecnico invece mi ha permesso di capire finalmente quale fosse il percorso di studi pi\xFA adatto a me, ovvero l'ingegneria informatica.",
        "Infatti trovo molto interessante applicare l'informatica e i suoi concetti a situazioni varie, come la realizzazione di applicazioni 'dalla H alla S', oppure l'applicazione dell'informatica nella vita reale.",
        "Probabilmente sceglier\xF3 in futuro delle specializzazioni in sicurezza informatica e elettronica, della quale mi sono appassionato molto sempre in questo anno.",
        "Essendo questo anche l'anno finale, vorrei aggiungere delle considerazioni finali su cosa penso dell'attivit\xE1 svolta negli anni scorsi:",
        "Il punto dolente \xE9 senza ombra di dubbio le poche attivit\xE1 in presenza che siamo riusciti a fare causa pandemia, il che ha causato una scarsa attivit\xE1 pratica durante gli anni (riguardo il PCTO).",
        "Il professore ha comunque cercato di riempire le lacune illustrandoci numerose volte la sua esperienza in azienda e come viene gestito il tutto.",
        "Sono molto soddisfatto invece delle soft skill che ho imparato riguardo la gestione degli eventi e delle attivit\xE1 e l'uso dei programmi di videoconferenza come Google Meet, Microsoft Teams, Zoom ed altri.",
        "Posso anche dire che 'grazie' a questo periodo ho potuto seguire un processo di introspezione che ha portato a conoscere meglio me stesso e i miei vantaggi e difetti.",
        "Nonostante tutto, posso dire di essere appagato del percorso di PCTO che ho fatto in questi anni, e quindi ringrazio tutti i professori delle opportunit\xE1 che mi sono state offerte e dell'incredibile supporto che mi \xE9 stato fornito.",
        "\xE9 anche grazie a voi se sono diventato la persona che sono oggi, e non potr\xF3 mai ringraziarvi abbastanza.",
        "Princivalle Sergio"
    ];

    for (var i = 0; i < stringList.length; i++)
    {
        var string = stringList[i];
        for (var j = 0; j < string.length; j++)
        {
            terminal.innerHTML += string[j];
            if (!skip) await sleep(30);
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

