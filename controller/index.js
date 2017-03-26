const express = require('express')
, router = express.Router()
, fs = require('fs')
, nodemailer = require('nodemailer');

// Create endpoint /index/ for getting and displaying initial page ---------------------------------------------------------
exports.getIndex 		= ((req, res) => {
	const bg_image 		= ('public/images/background.jpg')
	,   profile 		= ('public/images/profile.jpg')
	,   webTechLogo 	= ('public/images/webtech.png')
	,   databaseLogo 	= ('public/images/database.png')
	,   FrameworkLogo 	= ('public/images/framework.png')
	,   resumeLogo 		= ('public/images/resume.png')
	,   aboutMe 		= ('public/images/about-me.png');

	res.render('index.ejs',{ 
		bg_image:bg_image, 
		profile:profile, 
		webTechLogo:webTechLogo, 
		databaseLogo:databaseLogo, 
		FrameworkLogo:FrameworkLogo,
		resumeLogo: resumeLogo,
		aboutMe: aboutMe,
		message: '' });    
});

// Create endpoint /index/ for getting and displaying initial page ---------------------------------------------------------
exports.sendMail 		= ((req, res) => {
	const bg_image 		= ('public/images/background.jpg')
	,   profile 		= ('public/images/profile.jpg')
	,   webTechLogo 	= ('public/images/webtech.png')
	,   databaseLogo 	= ('public/images/database.png')
	,   FrameworkLogo 	= ('public/images/framework.png')
	,   resumeLogo 		= ('public/images/resume.png')
	,   aboutMe 		= ('public/images/about-me.png');

	var	mailOptions, smtpTransport;

	//EMail SMTP Configuration
	smtpTransport = nodemailer.createTransport({
		host: "smtp.gmail.com", //Host name
		secureConnection: true, //use Secure Shell
		port: 465, //port for secure SMTP
		auth: {
			user: 'dapito.sherwin@gmail.com',
			pass: 'liolwyxvpxnmvuse'
		}
	});

	mailOptions = {
		to: 'dapito.sherwin@yahoo.com',
		from: req.body.name + ' <' + req.body.email + '>' ,
		subject: req.body.subject, 
		text: req.body.message + '\n \nFrom: ' + req.body.name  + ' \nEmail: ' + req.body.email
	}

	smtpTransport.sendMail(mailOptions, function(err, res, req){
		if(err){
			return res.render('index', {message: `Error encountered while sending email: ${err}` });
		} 
		res.render('index.ejs',{ 
			bg_image:bg_image, 
			profile:profile, 
			webTechLogo:webTechLogo, 
			databaseLogo:databaseLogo, 
			FrameworkLogo:FrameworkLogo,
			resumeLogo: resumeLogo,
			aboutMe: aboutMe,
			message: 'Email Sent' });  
	});

});

module.exports.downloadResume = ((req, res) => {
	var file = __dirname + '/../public/resumeFolder/SherwinDapito-CV.pdf';
	res.download(file);

});
