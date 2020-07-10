const Model = require('../../lib/database/model')

exports.index = (req, res) =>
{
	var id = 2;
	//res.render('index', {title: 'Home'})
	var users = new Model('users')
			.delete()
			.whereIn('id', [1,2])
			.save();
}

exports.send = (req, res) => 
{ 
	var name = req.body.username;

	res.send(name)
}