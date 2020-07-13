const mysql = require('mysql')
const { Client } = require('pg')

class Model 
{
	mysqlConnect (connection = '')
	{
		this.mysqlConnect = mysql.createConnection({
			'host': '127.0.0.1',
			'user': 'root',
			'password': '',
			'database': 'node',
			'port': 3306,
		});

		return this.mysqlConnect;
	}

	postgresConnect (connection = '') 
	{
		this.postgresConnect = new Client({
			user: 'postgres',
			host: '127.0.0.1',
			database: 'node',
			password: '24882533',
			port: 5432,
		});
		this.postgresConnect.connect();

		return this.postgresConnect;
	}

	constructor (table = '')
	{
		this.sqlQuery = null;
		this.table = table;
	}

	select (columns) 
	{
		this.sqlQuery = 'SELECT '+columns+' FROM '+this.table;
		return this;
	}

	all () 
	{
		this.sqlQuery = 'SELECT * FROM '+this.table+'';
		return this;
	}

	where (column, operator, value)
	{
		this.sqlQuery += ' WHERE '+column+' '+operator+' '+value;

		return this;
	}

	whereIsNull (column)
	{
		this.sqlQuery += ' WHERE '+column+' IS NULL';
		return this;
	}

	whereIsNotNull (column)
	{
		this.sqlQuery += ' WHERE '+column+' IS NOT NULL';
		return this;
	}

	whereLike (column, pattern)
	{
		this.sqlQuery += " WHERE "+column+" LIKE "+"'"+pattern+"'";
		return this;
	}

	/**
	 *	@param {string} column
	 *	@param {array} value
	 */
	whereIn (column, value)
	{
		this.sqlQuery += " WHERE "+column+" IN ("+value+")";
		return this;
	}

	truncate ()
	{
		this.sqlQuery = 'TRUNCATE TABLE '+this.table+'';
		return this;
	}

	useIndex (index) 
	{
		this.sqlQuery += ' USE INDEX ('+index+')';
		return this;
	}

	forceIndex (index)
	{
		this.sqlQuery += ' FORCE INDEX ('+index+')';
		return this;
	}

	ignoreIndex (index)
	{
		this.sqlQuery += ' IGNORE INDEX ('+index+')';
		return this;
	}

	join (table, column1, operator, column2)
	{
		this.sqlQuery += ' INNER JOIN '+table+' ON '+column1+' '+operator+' '+column2+'';
		return this;
	}

	leftJoin (table, column1, operator, column2)
	{
		this.sqlQuery += ' LEFT JOIN '+table+' ON '+column1+' '+operator+' '+column2+'';
		return this;
	}

	rightJoin (table, column1, operator, column2)
	{
		this.sqlQuery += ' RIGHT JOIN '+table+' ON '+column1+' '+operator+' '+column2+'';
		return this;
	}

	crossJoin ()
	{
		this.sqlQuery += ' CROSS JOIN '+table+'';
		return this;
	}

	union (table, columns)
	{
		this.sqlQuery += ' UNION SELECT '+columns+' FROM '+table+'';
		return this;
	}

	unionAll (table, columns)
	{
		this.sqlQuery += ' UNION ALL SELECT '+columns+' FROM '+table+'';
		return this;
	}

	or (column, operator, value)
	{
		this.sqlQuery += " OR "+column+" "+operator+" '"+value+"'";
		return this;
	}

	and (column, operator, value)
	{
		this.sqlQuery += " AND "+column+" "+operator+" '"+value+"'";
		return this;
	}

	groupBy (column) 
	{
		this.sqlQuery += ' GROUP BY '+column+'';
		return this;
	}

	having (column, operator, value)
	{
		this.sqlQuery += " HAVING "+column+" "+operator+" '"+value+"'";
		return this;
	}

	orderBy (columns, order = 'DESC')
	{
		this.sqlQuery += " ORDER BY "+columns+" "+order+"";
		return this;
	}

	limit (number)
	{
		this.sqlQuery += ' LIMIT '+number+'';
		return this;
	}
}

module.exports = Model