var express = require('express');
var router = express.Router();
var guitarCtrl = require('../controllers/guitar')

/* GET home page. */
router.get('/', guitarCtrl.intro_page)

router.get('/songhome', guitarCtrl.song_home)
router.get('/rejected', guitarCtrl.rejected)

router.get('/songadd',isLoggedIn, guitarCtrl.song_add)
router.post('/songadd', guitarCtrl.song_create)

router.get('/:id',isLoggedIn, guitarCtrl.song_progress)
router.post('/:id', guitarCtrl.song_lesson)

router.delete('/delete/:id', guitarCtrl.song_delete)


function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/rejected');
  }

module.exports = router;
