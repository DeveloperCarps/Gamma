import * as loader from'./loader.js';

async function load_screen_intro() {
    let screen = document.getElementById("console");
    
    let returnVal = await loader.commands[2].commandFunction();
    // If the return value is an array, print each element in the array
    returnVal.forEach(async (element) => {
        newline(element, false);
    });
    setTimeout(() => { newline()}, 0);
    setTimeout(() => { newline("Type 'help' for a list of commands.")}, Math.floor(Math.random() * 2000));   
}

async function newline(value = null , human = false) {
    let screen = document.getElementById("console");

    if(value == null) {
        let br = document.createElement('div');
        br.classList.add('break');
        screen.append(br);
        br.scrollIntoView({ behavior: "smooth", block: "end" });
    } else {
        let line = document.createElement('span');
        line.classList.add('newline');
        line.innerHTML = human == true ? "# " + value : value;
        screen.append(line);
        line.scrollIntoView({ behavior: "smooth", block: "end" });
    }
}
async function takeInput() {
    let input = document.getElementById("screen_input");
    const value = input.value.toLowerCase();
    // There should be a function here that parses the input to return the specified command and function. But for now,
    // we will just print the input to the screen.

    newline(value, true);

    for(var i = 0;i < loader.commands.length;i++) {
        // Iterates through each array object to find if command matches any in the array
        if(value == loader.commands[i].name) {
            // If it does, execute the command function and print the return value to the screen
            let returnVal = await loader.commands[i].commandFunction();
            // If the return value is an array, print each element in the array
            returnVal.forEach(async (element) => {
                newline(element, false);
            });
            // Break out of the loop
            break
        } else if(i == loader.commands.length - 1) {
            // If the command is not found, print an error message
            newline("Command not found.", false);
        }
    }
    input.value = "";
}

document.addEventListener('keydown', async (event) => {
    if (event.key === "Enter") {
        event.preventDefault
        await takeInput();
    }
})



load_screen_intro();