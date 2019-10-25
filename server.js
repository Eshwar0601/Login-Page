const http = require("http");
var username = document.getElementById("userN");
var password = document.getElementById("passW");
http.connectServer((req,res) => {
    res.console.log("username");
    res.console.log("password")

});