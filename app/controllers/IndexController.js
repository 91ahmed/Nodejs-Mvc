const Mysql = require('../../lib/database/mysql')

exports.index = (req, res) =>
{
	//res.render('index', {title: 'Home'})
	new Mysql('users').select('name, id').paginate(req, 3);
}

exports.send = (req, res) => 
{ 
	var name = req.body.username;

	res.send(name)
}