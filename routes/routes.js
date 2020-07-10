const IndexController = require('../app/controllers/IndexController')

module.exports = (app) => 
{
	app.get('/', IndexController.index)
	app.post('/send', IndexController.send)
}