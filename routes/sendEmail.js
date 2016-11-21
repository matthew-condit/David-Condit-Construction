/* TODO: I should make this an AJAX call, nothing has to change here I just have to update the form */
var express = require('express');
var nodemailer = require('nodemailer');
var router = express.Router();
/* Sends new email. */
router.post('/', function (req, res) {
  var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
      user: 'conditconstruction@gmail.com',
      pass: 'eagles04'
    }
  });
  var emailForClient = '<h1>Thanks for reaching out to Condit Construction</h1><p>You should receive an email in the near future regarding our availability.  <br/> Thank you for your patience and have a nice day.</p> <p>The Message that you sent was:  </p>';
  var mailOptionsToClient = {
    from: 'conditconstruction@gmail.com', // sender address
    to: req.body.email, // list of receivers
    subject: 'Thanks, ' + req.body.name + ', for Reaching out', // Subject line
    html: emailForClient + erq.body.description //, // plaintext body
  };
  var mailOptionsToDavid = {
    from: 'conditconstruction@gmail.com', // sender address
    to: 'davidcondit1@gmail.com', // list of receivers
    subject: 'Hey David, You have a new Client Inquiry from ' + req.body.name + ' in ' + req.body.location, // Subject line
    html: 'To Respond, click here:  <a href="mailto:' + req.body.email + '">' + req.body.email + '</a> <p>' + req.body.description + '</p>' // plaintext body
  };
  var mailOptionsToMatt = {
    from: 'conditconstruction@gmail.com', // sender address
    to: 'matt.condit4@gmail.com', // list of receivers
    subject: 'Hey Matt, David has a new Client Inquiry from ' + req.body.name + ' in ' + req.body.location, // Subject line
    html: 'To Respond, click here:  <a href="mailto:' + req.body.email + '">' + req.body.email + '</a> <p>' + req.body.description + '</p>' // plaintext body
  };
  transporter.sendMail(mailOptionsToDavid, function (error, info) {
    console.log(error);
  });
  var errorBool = false;
  transporter.sendMail(mailOptionsToClient, function (error, info) {
    if (error) {
      console.log(error);
      var errorBool = true;
    }
  });
  transporter.sendMail(mailOptionsToMatt, function (error, info) {
    if (error) {
      console.log(error);
    };
  });
  res.redirect('/');
});
module.exports = router;