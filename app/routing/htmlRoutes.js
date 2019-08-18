const users = require("../data/friends");
const path = require("path");
//GET /survey to display the survey page

//default route to display the home page

module.exports = function (app) {
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"))
    });
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"))
    })
} 