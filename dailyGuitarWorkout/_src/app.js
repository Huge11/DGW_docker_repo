/* 
    Main application file bringing site components together
*/

// Public Dependencies
import express from 'express';
import cookieParser from "cookie-parser";
import bodyParser from 'body-parser';
import vhost from 'vhost';

// Local Dependencies
import Auth from './utils/serverAuth.js';



// HTML file Paths
const adminFilePath = process.cwd()+'/client/admin/';  const adminBuild = 'build_0.0.1/';
const userFilePath = process.cwd()+'/client/user/';  const userBuild = "build_0.0.4/";

const adminServer = express.Router()
adminServer.get('/',(req,res)=>{
	res.sendFile(adminFilePath+adminBuild+'index.html')
})


const legalFilePath = process.cwd()+'/client/legal/';
const publicFolder = process.cwd()+'/public/';



// create the application object
const app = express();
app.use(express.static(publicFolder));
app.use(cookieParser());
app.use(bodyParser.json());


app.use(vhost('admin.*', adminServer))


// serves user react files ::  index.html cannot be served by express.static to prevent caching
app.use(express.static(userFilePath+userBuild))

// checks if logged in and returns the appropriate index.html file
app.get('/', (req,res)=>{
	const authCookies = req.cookies.daily_guitar_workout;
	if (authCookies){
		Auth.verifySessionCookie(authCookies)
			.then(isLoggedIn=>{
				isLoggedIn ? res.sendFile(userFilePath+'index.html') : res.sendFile(process.cwd()+'/client/landing/index.html');
			})
			.catch(e=>{console.log(e); res.sendFile(process.cwd()+'/client/landing/index.html')})
	}else{
		res.sendFile(process.cwd()+'/client/landing/index.html')
	}
});

// ============== User Server ================
import userServer from './server/user/index.js';
app.use('/', userServer);


// ============= Auth Router =================
import authRouter from './client/Auth/router.js';
app.use('/', authRouter);

// ============ Admin Server ==============






// ============= Legal Pages ==============
app.get('/privacyPolicy', (req,res)=>res.sendFile(legalFilePath+'privacyPolicy_11_7_2019.html'));
app.get('/cookiePolicy', (req,res)=>res.sendFile(legalFilePath+'cookiePolicy_11_11_2019.html'));
app.get('/termsAndConditions', (req,res)=>res.sendFile(legalFilePath+'termsAndConditions_11_11_2019.html'));


// ============ 404 ===============
// send 404 if no route round
app.get("*", (req,res)=>{
    res.sendStatus(404);
});

app.listen(process.env.PORT, console.log(`app Listening on port ${process.env.PORT}`));