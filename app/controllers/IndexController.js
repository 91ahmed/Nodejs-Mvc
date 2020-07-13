const Mysql = require('../../lib/database/mysql')
const PostgreSql = require('../../lib/database/postgresql')

exports.index = (req, res) =>
{
	res.render('index', {title: 'Home'})
}

exports.send = (req, res) => 
{ 
	var name = req.body.username;

	res.send(name)
}