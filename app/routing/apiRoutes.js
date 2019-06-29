const users = require("../data/friends")

//get route with URL /api/friends to display json object of all possible friends

//post route to /api/friends to handle incoming survey results. route will also handle compatibility logic.

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(users)
    });
    app.post("/api/friends", function (req, res) {
        users.push(req.body);
        res.json(true)
    })
}