const express = require('express')
const router = express.Router()
const port = 3001
const fs = require('fs')
const bodyParser = require('body-parser')
const cors = require('cors')

router.use(cors())
router.use(bodyParser.json())

router.get('/', (req, res) => {
	console.log('hello world!')
	res.send('Hello World!')
})

router.get('/importer/config', (req,res)=>{
	const rawData = fs.readFileSync(`${__dirname}/.data/importerConfig.json`)
	const config = JSON.parse(rawData)
	console.log(config)
	res.send(config)
})

router.post('/importer/config', (req,res)=>{
	const JSONconfig = req.body.config
	console.log(JSONconfig)
	const stringConfig = JSON.stringify(JSONconfig)
	fs.writeFileSync(`${__dirname}/.data/importerConfig.json`, stringConfig, (err)=>{
		if(err){
			res.json({error: err})
		}
		res.send(JSONconfig)
	})
})

router.get('*', (req,res)=>{
	res.status(404)
	res.end()
})

module.exports = router;



const app = express()
app.use('/', router)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))