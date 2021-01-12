const moment = require('moment-timezone')


const localTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
function timeZoneConverter({hour = '10', minute = '00', timeZone = "America/New_York"} = {}){
	if(hour.length < 2){
		hour = "0" + hour
	}
	if(hour.length > 2){
		hour = hour.slice(-2)
	}
	if(minute.length < 2){
		minute = "0" + minute
	}
	if(minute.length > 2){
		minute = minute.slice(-2)
	}
	const formattedDate = moment().tz(timeZone).format("YYYY-MM-DD")
	const timeInUserZone = moment.tz(`${formattedDate} ${hour}:${minute}`, timeZone)

	const convertedToLocal = timeInUserZone.tz(localTimeZone)
	const convertedHours = convertedToLocal.format("HH")
	const convertedMinutes = convertedToLocal.format("mm")


	return `0 ${convertedMinutes} ${convertedHours} * * *`
}




module.exports = timeZoneConverter