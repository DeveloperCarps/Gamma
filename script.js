async function load_screen_intro() {
    let screen = document.getElementById("console");
    
    setTimeout(() => { newline('BOUIE_OS Version 1.0.0')}, 1000);
    setTimeout(() => { newline("(c) 2024 CARPESO TECHNOLOGIES. All rights reserved.")}, 1500);
    setTimeout(() => { newline("any tampering will result in legal action.")}, 2000);
    setTimeout(() => { newline()}, 2000);
    setTimeout(() => { newline("Type 'help' for a list of commands.")}, Math.floor(Math.random() * 2000) + 2000);   
}

async function newline(value = null , human = false) {
    let screen = document.getElementById("console");

    if(value == null) {
        let br = document.createElement('div');
        br.classList.add('break');
        screen.append(br);
    } else {
        let line = document.createElement('span');
        line.classList.add('newline');
        line.innerHTML = human == true ? "# " + value : value;
        screen.append(line);
    }
}
async function takeInput() {
    let input = document.getElementById("screen_input");
    const value = input.value;
    // There should be a function here that parses the input to return the specified command and function. But for now,
    // we will just print the input to the screen.
    newline(value, true);
    input.value = "";
}

/*
    This is a veritable prototype of what I thought would be the best way to handle commands in BouieOS. Normally, systems
    like windows and unix have directories full of programs which the terminal can access and run. Since Javascript can't really
    gain directory access to the files within the computer, the next best thing would be to load it via a JSON object, old-school
    style (like those days when you load floppy disks on old computers to run programs).

    The challenge here is to figure out how to load the commands from the JSON object and run them in the console. I'm thinking
    functions, but you can't store that on JSON objects. An alternative approach is to tie the JSON object with a parser of some
    sorts, one that parses your JSON input and outputs commands which can be run in-function. It's a very complicated, messy way
    of doing this, but it's the only way I can think of right now.
 */
async function load_command() {

}

document.addEventListener('keydown', async (event) => {
    if (event.key === "Enter") {
        event.preventDefault
        await takeInput();
    }
})

load_screen_intro();