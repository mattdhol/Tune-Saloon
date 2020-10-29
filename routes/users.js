var express = require('express');
var router = express.Router();
const passport = require('passport');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/songhome',
    failureRedirect : '/songhome'
  }
));

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/songhome');
});

module.exports = router;
