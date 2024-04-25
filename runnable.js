/*

    Here is a template for the scriptdisks. You need three exportable functions:

    1. init_disk: The first time you upload the script and run it on the console, it loads this function. Basically, if you 
    need to run something or fetch from a resource on the web, do it here.

    2. main: The internals of your program. Consider this as the int main() of C++ programs. everything done inside your
    program should be done here.

    3. exit_disk: not necessary, but if you need to do some cleanup, do it here. It's required since the script will call this
    after exit. You can print anything or just simply do nothing. What matters is that this is called. 

    I've also exposed the main console screen element to the scriptdisk via the console_element argument in main. This will help 
    you modify what's shown on the screen. Remember, however, to clear the screen to its defaults before exiting.

    UPDATE: main now needs to return a promise, execution needs to wait before calling exit_disk outside the module. the only
    way to do that is to return a promise, so I've updated the template to reflect that.
 */

const init_disk = () => {
};

const main = (console_element) => {
    return new Promise((resolve, reject) => {
        // resolve();
    });
};

const exit_disk = () => {
    alert("Goodbye, world!");
};

export { init_disk, main, exit_disk };