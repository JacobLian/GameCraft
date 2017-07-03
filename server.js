const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
const cors = require('cors');
const session = require('express-session')
const config = require('./config.js')
const passport = require('passport')
const Auth0Strategy = require('passport-auth0')
var port = 3000;
const app = express();
app.use(cors())
app.use(bodyParser.json())


massive({
  host: config.host,
  port: config.port,
  database: config.database,
  user: config.user,
  password: config.password
}).then(function(db){
  app.set('db', db);
});

app.get('/jobs', function(req, res){
    req.app.get('db').getJobs().then(function(jobs){
        res.send(jobs);
    });
});

app.get('/jobdescrip', function(req, res){
    req.app.get('db').getJobDesc().then(function(jobDescription){
        res.send(jobDescription);
    });
});

app.post('/jobdescrip', function(req, res){
    console.log(req.body)
    var jobdescrip = [
        req.body.jobName,
        req.body.description
    ]
    req.app.get('db').createJobDesc(jobdescrip).then(function(resp){
        console.log('sent job description to postgres', resp)
    res.status(200).send(resp);
  })
})

app.get('/feedback', function(req, res){
    req.app.get('db').getFeedback().then(function(feedback){
        res.send(feedback);
    })
})

app.post('/feedback', function(req, res){
    console.log(req.body)
    var feedback = [
        req.body.subject,
        req.body.message
    ]
    req.app.get('db').createFeedback(feedback).then(function(resp){
        console.log('sent feedback to postgres', resp)
    res.status(200).send(resp);
  })
})

app.listen(port, function(){
    console.log("listening on 3000")
})

// app.get('/auth', passport.authenticate('auth0'));
// app.use(express.static(`${__dirname}/public`))

// app.get('/ffjobs', (req, res) => {
//     res.sendFile('ffjobs.html', {"root": 'views'})
// })
// app.post('/ffjobs', (req, res) => {
//     console.log('hi there')
// })


// passport.use(new Auth0Strategy({
//   domain: config.domain,
//   clientID: config.clientId,
//   clientSecret: config.clientSecret,
//   callbackURL: '/auth/callback'
// }, function(accessToken, refreshToken, extraParams, profile, done) {
//     console.log(profile)
// //   return done(null, profile);
// }));
// passport.use(strategy);