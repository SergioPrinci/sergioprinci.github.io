var terminal = document.getElementById("terminalSection");

async function fourthYearPage()
{
    await sleep(2000);

    //clearing screen
    terminal.innerHTML = "";

    var stringList = [
        "Cachet"
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