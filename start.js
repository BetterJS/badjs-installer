var process = require("child_process");
var path = require("path");

var args = ["--debug", "--project"]


console.log("========  badjs-acceptor ===========")
process.fork(path.join(__dirname, "badjs-acceptor", "app.js"), args)

setTimeout(function () {
    console.log(" ")
    console.log(" ")
    console.log(" ")
    console.log(" ")
    console.log("========== badjs-mq =========")
    process.fork(path.join(__dirname, "badjs-mq", "app.js"), args)

}, 2000)

setTimeout(function () {
    console.log(" ")
    console.log(" ")
    console.log(" ")
    console.log(" ")
    console.log("========= badjs-storage ==========")
    process.fork(path.join(__dirname, "badjs-storage", "app.js"), args)

}, 4000)

setTimeout(function () {

    console.log(" ")
    console.log(" ")
    console.log(" ")
    console.log(" ")
    console.log("========== badjs-web =========")
    process.fork(path.join(__dirname, "badjs-web", "app.js"), args)

}, 6000)