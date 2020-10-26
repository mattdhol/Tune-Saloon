const Guitar = require('../models/guitar')


function intro_page(req, res){
    res.render('intropage')
}

function song_home(req, res){
    Guitar.find({}, function(err, allsongs) {
    res.render('songhome', {allsongs})
})
}
function song_add(req, res){
    res.render('songadd')
}

function song_create(req, res){
    const guitar = new Guitar(req.body)
    // console.log(guitar)
    guitar.save(function(err){
        if (err) return res.send("this is the error" + (err))
        console.log(guitar)
        res.redirect('/songhome')
    })
}

function song_progress(req, res){
    Guitar.findById(req.params.id, function (err, songId){
    res.render("songprogress", {songId})
    })
}

function song_lesson(req, res){
    Guitar.findById(req.params.id, function(err, songId){
        songId.lesson.push(req.body)
        songId.save(function(err){
            console.log(songId)
        res.redirect(`/${songId._id}`);
        })
    })
}




module.exports= {
    song_home,
    song_add,
    song_create,
    song_progress,
    intro_page,
    song_lesson,
}