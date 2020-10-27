const Guitar = require('../models/guitar')

function intro_page(req, res){
    res.render('intropage')
}

function song_home(req, res){
    Guitar.find({}, function(err, allsongs) {
        // console.log(allsongs[0].lesson[allsongs[0].lesson.length - 1].currentSong)
        let topSong = []
        allsongs.forEach(function (song){
            console.log(song.lesson.length - 1)
        if (song.lesson[song.lesson.length - 1].currentSong == 'True'){
            topSong.unshift(song)
        } else {
            topSong.push(song)
        }

        })



    res.render('songhome', {topSong})
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
        res.redirect('/songhome')
    })
}

function song_progress(req, res){
    Guitar.findById(req.params.id, function (err, songId){
    res.render("songprogress", {songId})
    console.log(songId)
    })
}

function song_lesson(req, res){
    Guitar.findById(req.params.id, function(err, songId){
        songId.lesson.push(req.body)
        songId.save(function(err){
        res.redirect(`/${songId._id}`);
        })
    })
}

function master(req, res){
 res.send("oh hey")
}

function song_delete (req, res){
    Guitar.findByIdAndDelete(req.params.id, function(err, deleteId){
        res.redirect('/songhome');
    })
}

// 1 -for each guitar schema object... what is the current song property of the most recent addition to the lesson array. 
// 2- if the most recent addition is != true, then it no longer is at the top of the array
// 3- 


module.exports= {
    song_home,
    song_add,
    song_create,
    song_progress,
    intro_page,
    song_lesson,
    song_delete,
    master,
}