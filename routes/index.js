const express   = require("express");
const router    = express.Router();
const models    = require("../models/index")

router.get("/", function(req, res){
    models.Todo.findAll({
    })
    .then(function(data){
        res.render("index", {task:data});
    })
});

router.post("/", function(req, res){
    models.Todo.create({
        title: req.body.title,
        priority: req.body.priority,
        complete: false
    })
    .then(function(data){
        console.log(data);
        res.redirect("/");
    });

});

router.get("/complete/:id", function(req, res){

    models.Todo.update({
        completed:true
    }, {
        where: {
            id: req.params.id
        }
    })
    .then(function(data){

        res.redirect('/');
    });
});

router.post("/incomplete/:id", function(req, res){

    models.Todo.update({
        completed:false
    }, {
        where: {
            id: req.params.id
        }
    })
    .then(function(data){

        res.redirect('/');
    });
});

router.get("/delete/:id", function(req, res){
    models.Todo.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(function(data){
        console.log(data);
        res.redirect("/")
    });
});

router.get("/edit/:id", function(req, res){
    models.Todo.findById(req.params.id)
    .then(function(data){
        res.render("edit", {task:data});
    })
});

router.post("/edit/:id", function(req, res){
    models.Todo.update({
        title: req.body.title,
        priority: req.body.priority
    }, {where: {
        id: req.params.id
        }
    })
    .then(function(data){
        res.redirect("/");
    })
})


module.exports = router;
