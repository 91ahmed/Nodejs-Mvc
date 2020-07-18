const path    = require('path')
const express = require('express')
const app     = express()
const port    = process.env.port || 3000
const routes  = require('./routes/routes')

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: false }))
// Parse JSON bodies (as sent by API clients)
app.use(express.json())
app.use(express.static('public'))
// Set views path
app.set('views', path.join(__dirname, 'app/views'));
// Set Template engine
app.set('view engine', 'pug');

routes(app)

/** Run Server **/
app.listen(port, () => {
	console.log('Server is running..')
})