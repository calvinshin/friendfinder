// Require the node addons
var express = require("express");

// Require the other javascript files
var htmlRoutes = require("./app/routing/htmlRoutes");
var apiRoutes = require("./app/routing/apiRoutes")

// Initialize express
var app = express();
var PORT = process.argv.PORT || 3000;


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Html Routes
app.get("/", htmlRoutes.mainPage);
app.get("/survey", htmlRoutes.survey);

// app.get("/test", function(req,res) {
//     res.send("Hello");
// })

// API Routes
app.get("/api/friends", apiRoutes.apiCall)
app.post("/api/friends", apiRoutes.apiPost);

// Catch all for all other calls
app.get("*", htmlRoutes.mainPage);

app.listen(PORT, function() {
    console.log("Listening on PORT " + PORT)
})