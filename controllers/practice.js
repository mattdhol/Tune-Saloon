const Practice = require('../models/practice')


function practice_home(req, res){
    Practice.find({}, function(err, allchords){
        res.render('practice/practicehome', {
            allchords,
            user: req.user,     
        })
        })
    }

function practice_add(req, res){
    res.render('practice/practiceadd', {
        user: req.user,  
    })
}
function practice_add_post_req(req, res){
    const chordadd = new Practice(req.body)
    chordadd.save(function(err){
        if (err) return res.send("this is the error" + (err))
        console.log(chordadd)
        res.redirect('/practice/practicehome')
    })
}
function practice_progress(req, res){
    Practice.findById(req.params.id, function(err, chordId){
        res.render("practice/practiceprogress", {
            chordId ,
            user: req.user,     
        })
        })
    }


function chord_add_post_req(req, res){
    Practice.findById(req.params.id, function (err, chordId){
        chordId.transitions.push(req.body)
        console.log(req.body)
        chordId.save(function(err){
            res.redirect(`/practice/${chordId._id}`)
        })
    })
}

module.exports = {
    practice_home,
    practice_add,
    practice_add_post_req,
    practice_progress,
    chord_add_post_req,
}