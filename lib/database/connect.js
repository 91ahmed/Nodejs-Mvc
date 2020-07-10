const mysql = require('mysql')

class Connect 
{
	constructor ()
	{
		this.connect = mysql.createConnection({
			'host': '127.0.0.1',
			'user': 'root',
			'password': '',
			'database': 'node',
		});
	}
}

module.exports = Connect