const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const Login = require('../models/login');

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  },
  function(accessToken, refreshToken, profile, cb) {
    Login.findOne({ 'googleId': profile.id }, function(err, login) {
        console.log(login)
      if (err) return cb(err);
      if (login) {
        return cb(null, login);
      } else {
        // we have a new student via OAuth!
        var newLogin = new Login({
          name: profile.displayName,
          email: profile.emails[0].value,
          googleId: profile.id
        });
        newLogin.save(function(err) {
          if (err) return cb(err);
          return cb(null, newLogin);
        });
      }
    });
  }
));
passport.serializeUser(function(login, done) {
    console.log(login)
    done(null, login.id);
});
passport.deserializeUser(function(id, done) {
    console.log(id + "id <-")
    Login.findById(id, function(err, login) {
      done(err, login);
    });
  });