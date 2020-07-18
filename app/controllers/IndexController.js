const Mysql      = require('../../lib/database/mysql')
const PostgreSql = require('../../lib/database/postgresql')
const Mongo      = require('../../lib/database/mongodb')
const Validator  = require('../../lib/validator/validator')

exports.index = (req, res) =>
{
	var title = 'Home';

	// Get 2 users
	new Mysql('users').all().limit(2).get((users2) => {
		// Get 3 users
		new PostgreSql('users').customQuery('SELECT * from users LIMIT 3').get((users3) => {
			// Render view
			res.render('home', {data2: users2, data3: users3, title: title})
		});
	});
}

exports.send = (req, res) =>
{ 
	var name  = req.body.username;
	var email = req.body.email

	var valid = new Validator();
		valid.input(name, 'username').required();
		valid.input(email, 'email').required();

	var errors = valid.getErrors();


	res.send(errors);
}