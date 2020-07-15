const Mysql      = require('../../lib/database/mysql')
const PostgreSql = require('../../lib/database/postgresql')
const Mongo      = require('../../lib/database/mongodb')

exports.index = (req, res) =>
{
	new Mongo().database('application')
		       .collection('admins')
		       .findSomeFields({ _id: 1, name: 1});

	res.render('index', {title: 'Home'})
}

exports.send = (req, res) =>
{ 
	var name = req.body.username;

	res.send(name);
}