const Mysql = require('../../lib/database/mysql')

exports.index = (req, res) =>
{
	//res.render('index', {title: 'Home'})
}

exports.send = (req, res) => 
{ 
	var name = req.body.username;

	res.send(name)
}