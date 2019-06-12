// Require the node addons
var path = require("path");

// app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "./app/public/home.html"));
// })

// app.get("/survey", function(req,res) {
//     res.sendFile(path.join(__dirname, "./app/public/survey.html"));
// })


// app.get("*", function(req, res) {
//     res.redirect("/");
// })



module.exports = {
    mainPage : function(req,res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    },
    survey : function(req,res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    }
}