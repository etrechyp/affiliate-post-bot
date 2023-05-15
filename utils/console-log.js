const colors = require('colors');

send = function(string) {
	currentDate = new Date().toISOString();
	console.log(colors.brightBlue("[" + currentDate + "] ") + colors.bgGreen("_Bot$:")+ " " + string);
}

info = function(string) {
    currentDate = new Date().toISOString();
    console.log(colors.brightBlue("[" + currentDate + "] ") + colors.bgYellow("_Bot$:")+ " " + string);
}

wait = function(string) {
    currentDate = new Date().toISOString();
    console.log(colors.brightBlue("[" + currentDate + "] ") + colors.bgMagenta("_Bot$:")+ " " + string + " ...");
}

primary = function(string) {
    currentDate = new Date().toISOString();
    console.log(colors.brightBlue("[" + currentDate + "] ") + colors.bgCyan("_Bot$:")+ " " + string);
}

error = function(string) {
    currentDate = new Date().toISOString();
    console.log(colors.brightBlue("[" + currentDate + "] ") + colors.bgRed("_Bot$:")+ " " + string);
    setInterval(() => {
        process.exit(0);
    }, 30000);
}

module.exports = {
    send,
    info,
    wait,
    primary,
    error
}