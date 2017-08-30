const express   = require("express");
const router    = express.Router();
const models    = require("../models/index")

router.get("/", function(req, res){
    res.render("index");
});

router.post("/", function(req, res){

    models.Todo.create({


    })
    .then(function(data){
        console.log(data);
        res.redirect("/");
    })


})



module.exports = router;
