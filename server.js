var express = require("express");
var path = require('path');
var PORT = process.env.PORT || 3000;

var app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbrs = require("express-handlebars");
app.set('index', path.join(__dirname, 'views'));
app.engine("handlebars", exphbrs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use('/', routes);


app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});