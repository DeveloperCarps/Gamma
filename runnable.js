/*

    Here is a template for the scriptdisks. You need three exportable functions:

    1. init_disk: The first time you upload the script and run it on the console, it loads this function. Basically, if you 
    need to run something or fetch from a resource on the web, do it here.

    2. main: The internals of your program. Consider this as the int main() of C++ programs. everything done inside your
    program should be done here.

    3. exit_disk: not necessary, but if you need to do some cleanup, do it here. It's required since the script will call this
    after exit. You can print anything or just simply do nothing. What matters is that this is called. 

    Each function should be exported. It doesn't matter how you export them, so long as it exists in the scriptdisk. Variables 
    and what-not aren't supported yet, but I'm planning to add them soon. Let's see where I can get to first.

 */

const init_disk = () => {
    
};

const main = () => {
    console.log("Hello, World!");
};

const exit_disk = () => {

};

export { init_disk, main, exit_disk };