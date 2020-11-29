const express = require('express')
const bodyParser = require('body-parser')


const app = express();
const ejs = require('ejs');
const { static } = require('express');

const to = new Date();

const days = ["one", "two"]

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view-engine", "ejs")
app.use(express.static(__dirname + "public"))

app.get("/", function(req, res) {

    var option = {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        weekday: 'long',




    };
    var day1 = to.toLocaleDateString("en-US", option);

    res.render('index.ejs', { kind: day1, marker: days })

})

app.post("/", function(req, res) {
    var day = req.body.na;
    days.push(day)

    res.redirect("/")


})

app.listen(60, function() {

    console.log("started");
});