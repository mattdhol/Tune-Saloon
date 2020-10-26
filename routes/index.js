var express = require('express');
var router = express.Router();
var guitarCtrl = require('../controllers/guitar')

/* GET home page. */
router.get('/', guitarCtrl.intro_page)

router.get('/songhome', guitarCtrl.song_home)

router.get('/songadd', guitarCtrl.song_add)
router.post('/songadd', guitarCtrl.song_create)

router.get('/:id', guitarCtrl.song_progress)
router.post('/:id', guitarCtrl.song_lesson)


module.exports = router;
