require('dotenv').config({debug: true, path: `${__dirname}/.env`})

/*
		 _______  _______ _________ _       
		(       )(  ___  )\__   __/( (    /|
		| () () || (   ) |   ) (   |  \  ( |
		| || || || (___) |   | |   |   \ | |
		| |(_)| ||  ___  |   | |   | (\ \) |
		| |   | || (   ) |   | |   | | \   |
		| )   ( || )   ( |___) (___| )  \  |
		|/     \||/     \|\_______/|/    )_)                                                             
*/

// external Dependencies
const express = require('express');
const subdomain = require('express-subdomain')
const compression = require('compression')

const fs = require('fs')
const http = require('http')
const https = require('https')
const csrf = require('csurf')
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser')
const schedule = require("node-schedule");
const mongoose = require('mongoose');

const helmet = require('helmet')
const cors = require('cors') // allow cross oragin requests


// Internal Dependencies
const {appConfig, getLocalIpAddress} = require('./helpers');
const EmailGenerator = require('./helpers/EmailGenerator')
const Emailer = require('./helpers/Emailer')

// Routes
const Router = require('./routes/index.js');
const AuthRouter = require('./routes/auth.js');
const ProtectedRouter = require('./routes/protected.js');
const AdminRouter = require('./routes/adminRoutes/admin.js');
const ScheduleRouter = require('./routes/schedule.js');
// const ApiV1 = require('./routes/api-v1.js');

// Mongoose Models
const Email = require('./models/Email.js')
const User = require('./models/User.js')



/*
 _______ _________ _______  _______ _________
(  ____ \\__   __/(  ___  )(  ____ )\__   __/
| (    \/   ) (   | (   ) || (    )|   ) (   
| (_____    | |   | (___) || (____)|   | |   
(_____  )   | |   |  ___  ||     __)   | |   
      ) |   | |   | (   ) || (\ (      | |   
/\____) |   | |   | )   ( || ) \ \__   | |   
\_______)   )_(   |/     \||/   \__/   )_(   

*/

// ============== Application Setup ==================

// console.log(appConfig)
const dev = process.env.NODE_DEV !== 'production' //true false

const app = express();
app.use(compression())
const localIp = getLocalIpAddress()
console.log(getLocalIpAddress())

mongoose.connect(appConfig.dbAddress, {  useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = Promise

app.set('view engine', 'ejs')

app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname+ '/views/onboarding/'));
app.use(express.static(__dirname+ '/views/signup/'));
app.use(express.static(__dirname+ '/views/argon-design-system-pro-html-v1.0.0/'));
app.use(express.static(__dirname+ '/views/argon-dashboard-pro-v1.1.1/'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cookieParser())


// CSRF Protection
var csrfProtection = csrf({ cookie: true })
app.use(csrfProtection)
app.use((req,res,next)=>{
	res.cookie('DGW_csrfToken', req.csrfToken()); 
	next()
})

//  xxs security and framegaurd
app.use(helmet())

// allow cross oragin requests
app.use(cors()) 

app.use(subdomain('schedule', ScheduleRouter));
app.use('admin', AdminRouter);
app.use('/', AuthRouter);
app.use('/', ProtectedRouter);
app.use('/', Router);



app.get('*', (req,res)=>{
	res.sendStatus(404)
})


// =================== Starting Server ===================
// app.listen(appConfig.port, () => console.log(`${appConfig.envName} app listening at ${localIp}:${appConfig.port}!`));
http.createServer(app).listen(appConfig.port, ()=>console.log(`${appConfig.envName} app listening at ${localIp}:${appConfig.port}!`))


// if(dev){
// 	httpsCredentials = {
// 		key: fs.readFileSync(`${__dirname}/https/local_server.key`),
// 		cert: fs.readFileSync(`${__dirname}/https/local_server.pem`),
// 	}
// }else{
	httpsCredentials= {
		key: fs.readFileSync(`${__dirname}/https/STAR_dailyguitarworkout_com_key.txt`),
		cert: fs.readFileSync(`${__dirname}/https/STAR_dailyguitarworkout_com.crt`),
		ca: fs.readFileSync(`${__dirname}/https/STAR_dailyguitarworkout_com.ca-bundle`)
	}
// }

// console.log(httpsCredentials)

const httpsServer = https.createServer(httpsCredentials, app).listen(3001, ()=>{
	console.log("https is listening on port 3001")
})//appConfig.httpsPort)
// console.log(httpsServer)