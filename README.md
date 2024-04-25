# Project Gamma (Bouie_OS)

![BouieOS](https://github.com/DeveloperCarps/Gamma/assets/129969583/bbb65ab8-5efa-4594-a228-bbdcaa422a6d)

## About

This is a Simple project made by me! I love console screens from fallout, and I especially love making stuff on the Web! Combining both of those, I got this!

Welcome to Bouie_OS, a simple Operating System built with Javascript. (This is a joke, I know you can't build Operating Systems with JS, but just stick with it). BouieOS is a simple, terminal-based, custom-program-reliant terminal that hosts a simple command structure. It works like any other terminal would: by displaying lines of text inside a console screen. 

You may ask, *why bother with the entire thing, Deep?* Well, to that I say **SHUT UP AND TAKE A LOOK AT MY BABY**. 

Passive aggressiveness aside, there's one thing I mentioned above that may confuse you. It says that "BouieOS is a simple, terminal based, ***custom-program-reliant*** terminal". Wait. How is this custom-program-reliant?

## ScriptDisks

ScriptDisks are my idea of floppy disks. At first I wanted to call them terminal programs, but they're technically not even programs, just scripts. And so, with my love for the scripting platform (and javascript as a whole), I decided to call them ScriptDisks. The first, *Script*, is because they technically are scripts, and the second, *Disks*, because they act like floppy disks where you need to insert them to the computer to make them run.

### How to run

It's simple really. Just run the LOAD command and it will open a Explorer/Finder window in your PC. Simply choose the scriptdisk you want to load and ***voilà***! You've got yourself your own running program.

### How to build

Building is fairly simple, provided your knowledgeable with Javascript. All the functions needed like creating a newline are provided by the site itself, but it's up to you to create your own scriptdisk. You'll find a js module in the repository called runnable.js, which shows you the scriptdisk template I made. Still a bit lazy? Here, let me just put it here:

***Sample file:*** `runnable.js`
```
const init_disk = () => {
    // Initialization code here.
};

const main = (console_element) => ![BouieOS](https://github.com/DeveloperCarps/Gamma/assets/129969583/f84c119a-908f-442f-8bf7-d3fe820f949a)
{
    return new Promise((resolve, reject) => {

        // run resolve or reject, depending on your use-case if you want to
        // end execution of main 

    });
};

const exit_disk = () => {
    // Some exit code or cleanup if needed.
    alert("Goodbye, world!");
};

export { init_disk, main, exit_disk };
```
