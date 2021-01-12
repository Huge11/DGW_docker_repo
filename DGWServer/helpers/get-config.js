/*
 *   Load the app configurations depending on the enviornment
 */



 // Internal Dependencies
 const enviornments = require("../config.js");


 // Determine which enviornment was passed as a command line argument
 const currentEnvironment = typeof(process.env.NODE_ENV) == 'string' ? process.env.NODE_ENV.toLowerCase() : "";


 // Check that the current enviornment is one of the enviornments created, else use stagin
 const enviornmentToExport = typeof(enviornments[currentEnvironment]) == 'object' ? enviornments[currentEnvironment] : enviornments.development;

 // console.log(enviornmentToExport)
 // Export the module
 module.exports = enviornmentToExport;