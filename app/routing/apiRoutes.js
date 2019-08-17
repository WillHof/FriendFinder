const users = require("../data/friends")
const express = require("express")
const router = express.Router()
//get route with URL /api/friends to display json object of all possible friends

//post route to /api/friends to handle incoming survey results. route will also handle compatibility logic.
function sumArray(total, num) {
    return total + num
}
function findFriend(req) {
    let compareArray = req.body.scores;
    let compatibility = [];
    users.forEach((element, index) => {
        let otherArray = [];
        element.scores.forEach((score, scoreindex) => {
            let difference = Math.abs(score - compareArray[scoreindex]);
            otherArray.push(difference);
        });
        //
        if (index === 0) {
            compatibility.push(otherArray.reduce(sumArray), index);
        }
        else if (otherArray.reduce(sumArray) < compatibility[0]) {
            compatibility[0] = otherArray.reduce(sumArray);
            compatibility[1] = index
        }
    })
    return compatibility[1];
}
module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(users);
    });
    app.post("/api/friends", function (req, res) {

        let bestFriend = findFriend(req)
        users.push(req.body);
        res.json(users[bestFriend]);
    })
}