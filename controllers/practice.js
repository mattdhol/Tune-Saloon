const Practice = require('../models/practice')


function practice_home(req, res){
    Practice.find({}, function(err, allchords){
        res.render('practice/practicehome', {allchords})
    })
}

function practice_add(req, res){
    res.render('practice/practiceadd')
}

function practice_add_post_req(req, res){
    const chordadd = new Practice(req.body)
    chordadd.save(function(err){
        if (err) return res.send("this is the error" + (err))
        console.log(chordadd)
        res.redirect('/practice/practicehome')
    })
}


module.exports = {
    practice_home,
    practice_add,
    practice_add_post_req,
}