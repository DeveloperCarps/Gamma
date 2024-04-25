/*
    UPDATED on 04/24/2024

    We'll be using dynamic imports from now on to load scriptdisks. What are scriptdisks you ask? Well, they're the 
    programs silly! :) Kidding aside, this removes any form of complexity with the functions and what-not. I'll be
    attaching a PERMANENTLY linked disk to the script console so it has some basic commands, but for all the other
    functionalities, the user will need to provide their own code. I've also created a simple scriptdisk template 
    inside the root of this folder (called runnable.js). I'll be posting that on the README later on.

    Notes to remember:
    1. Return an array if your values are multiline, so the newline function can print it properly on screen.
 */



const commands = [
    {
        name: "help",
        commandFunction: async function() {
            return [
                "---------------------",
                "List of commands:",
                "help - displays this message",
                "about - displays information about the system",
                "clear - clears the screen",
                "---------------------"
            ];
        }
    },
    {
        name: "clear",
        commandFunction: async function() {
            document.getElementById('console').innerHTML = "";
            return ["Screen cleared."];   
        }
    },
    {
        name: "about",
        commandFunction: async function() {
            return [
                "BOUIE_OS Version 1.0.0",
                "(c) 2024 CARPESO TECHNOLOGIES. All rights reserved.",
                "any tampering will result in legal action."
            ];
        }
    }
]

export { commands };