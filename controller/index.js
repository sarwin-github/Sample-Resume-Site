var express = require('express');
var router = express.Router();
var fs = require('fs');

// Create endpoint /index/ for getting and displaying initial page ---------------------------------------------------------
exports.getIndex = ((request, response) => {
  	var bg_image = ('public/images/background.jpg');
  	var profile = ('public/images/profile.jpg');
  		var webTechLogo = ('public/images/webtech.png');
  			var databaseLogo = ('public/images/database.png');
  				var FrameworkLogo = ('public/images/framework.png');

	    response.render('index.ejs',{ 
	    	bg_image:bg_image, 
	    	profile:profile, 
	    	webTechLogo:webTechLogo, 
	    	databaseLogo:databaseLogo, 
	    	FrameworkLogo:FrameworkLogo, });    
});

