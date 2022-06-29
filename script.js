const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

var terminal = document.getElementById("terminalSection");

var stringList;

async function main(stringList)
{
    var stringList = [" Booting up...", 
                    "Found myself in: Italy",
                    "...",
                    "Well, that was quite unexpected.",
                    "I don't know italian so, you'll get english.",
                    "Hi Sergio, how are you doing?",
                    "Not the right moment isn't it?",
                    "Sorry, sorry, I'll try to focus.",
                    "My job is to talk about your PCTO experiences.",
                    "Now, Sergio, what do you want me to talk about?"];
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
    
    buttonDiv.appendChild(button1);
    buttonDiv.appendChild(button2);
    buttonDiv.appendChild(button3);

    button1.innerHTML = "Third year";
    button2.innerHTML = "Fourth year";
    button3.innerHTML = "Fifth year";

    button1.onclick = loadThirdYear()
}

function loadThirdYear()
{
    stringList = [" Loading page...",
                "While you wait, I'll talk about what happened in your third year.",
                "On the third year of your studies, the possibilities of PCTO experiences opened.",
                "I still remember how much you were excited about going to learn how to work..."];

    terminal.innerHTML = "";
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