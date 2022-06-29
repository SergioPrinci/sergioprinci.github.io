const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

var terminal = document.getElementById("terminalSection");

var stringList;

async function main(stringList)
{
    //startup screen
    terminal.innerHTML = "";

    stringList = [
        " *************** PIP-OS(R) V7.1.0.8 ***************",
        "COPYRIGHT 2075 ROBCO(R)", 
        "LOADER V1.1",
        "EXEC VERSION 41.10",
        "CPU TYPE: NVITEL 128x8",
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
            await sleep(10);
        }
        terminal.innerHTML += "<br>";
        await sleep(200);
    }

    await sleep(2000);

    //normal screen
    terminal.innerHTML = "";

    stringList = [
                " Booting up...",
                "Benvenuti in PCTO Versione 2.3b.",
                "Tramite questo sito vi verrá descritta la mia esperienza di PCTO in questi tre anni.",
                "Prego, sciegliere l'anno di cui si vuole parlare."];

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

    button1.innerHTML = "Third year";
    button2.innerHTML = "Fourth year";
    button3.innerHTML = "Fifth year";

    button1.onclick = loadThirdYear;
    
    buttonDiv.appendChild(button1);
    buttonDiv.appendChild(button2);
    buttonDiv.appendChild(button3);
}

async function loadThirdYear()
{
    terminal.innerHTML = "";

    stringList = [
                " Loading page...",
                "While you wait, I'll talk about what happened in your third year.",
                "On the third year of your studies, the possibilities of PCTO experiences just opened.",
                "I still remember how much you were excited about going to learn how to work..."];

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

    await sleep(2000);

    window.location.href = "thirdYear.html";
}

main(stringList);