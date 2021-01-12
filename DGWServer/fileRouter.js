
const fileRouter = {
	'onBoarding': `${__dirname}/views/onboarding/examples/landing.html`,
	'emailTest': `${__dirname}/helpers/EmailGenerator/_baseEmailFiles/output.html`,
	// 'unsubscribe': `${__dirname}/views/unsubscribe.html`,
	// 'signupFailed': `${__dirname}/views/signupFailed.html`,
	// 'signupSuccess': `${__dirname}/views/signupSuccess.html`,
	// 'firebaseEmailAndPassword': `${__dirname}/views/firebaseEmailAndPassword.html`,
	'login': `${__dirname}/views/signup/login.html`,
	'signup': `${__dirname}/views/signup/signup.html`,
	'passwordReset': `${__dirname}/views/signup/passwordReset.html`,
	'userSettings': `${__dirname}/views/user/userSettings.ejs`,
	'emailPreferences': `${__dirname}/views/user/emailPreferences.ejs`,
	'home': `${__dirname}/views/user/index.ejs`,
	'adminDashboard': `${__dirname}/views/user/admin/index.ejs`,
	'practice': `${__dirname}/views/user/practice.ejs`,
	'privacyPolicy': `${__dirname}/views/privacyPolicy_11_7_2019.html`,
	'cookiePolicy': `${__dirname}/views/cookiePolicy_11_11_2019.html`,
	'termsAndConditions': `${__dirname}/views/termsAndConditions_11_11_2019.html`,
	'savedEmailsFolder': `${__dirname}/views/saved_emails`,
	"fullEmail": `${__dirname}/helpers/EmailGenerator/_baseEmailFiles/fullEmail.html`
}




module.exports = fileRouter