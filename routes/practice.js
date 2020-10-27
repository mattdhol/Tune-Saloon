var express = require('express');
var router = express.Router();
var practiceCtrl = require('../controllers/practice');
const practice = require('../models/practice');

router.get('/practicehome', practiceCtrl.practice_home)
router.post('/practiceadd', practiceCtrl.practice_add_post_req)

router.get('/practiceadd', practiceCtrl.practice_add)

router.get('/:id', practiceCtrl.practice_progress)
router.post('/:id', practiceCtrl.chord_add_post_req)



module.exports = router;