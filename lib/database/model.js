var Connect = require('./connect')

class Model extends Connect
{
	constructor(table)
	{
		super();

		this.table = table;
	}

	select (columns) 
	{
		this.query = 'SELECT '+columns+' FROM '+this.table;
		return this;
	}

	all () 
	{
		this.query = 'SELECT * FROM '+this.table+'';
		return this;
	}

	where (column, operator, value)
	{
		this.query += ' WHERE '+column+' '+operator+' '+value;

		return this;
	}

	whereIsNull (column)
	{
		this.query += ' WHERE '+column+' IS NULL';
		return this;
	}

	whereIsNotNull (column)
	{
		this.query += ' WHERE '+column+' IS NOT NULL';
		return this;
	}

	whereLike (column, pattern)
	{
		this.query += " WHERE "+column+" LIKE "+"'"+pattern+"'";
		return this;
	}

	/**
	 *	@param {string} column
	 *	@param {array} value
	 */
	whereIn (column, value)
	{
		this.query += " WHERE "+column+" IN ("+value+")";
		return this;
	}

	truncate ()
	{
		this.query = 'TRUNCATE TABLE '+this.table+'';
		return this;
	}

	useIndex (index) 
	{
		this.query += ' USE INDEX ('+index+')';
		return this;
	}

	forceIndex (index)
	{
		this.query += ' FORCE INDEX ('+index+')';
		return this;
	}

	ignoreIndex (index)
	{
		this.query += ' IGNORE INDEX ('+index+')';
		return this;
	}

	join (table, column1, operator, column2)
	{
		this.query += ' INNER JOIN '+table+' ON '+column1+' '+operator+' '+column2+'';
		return this;
	}

	leftJoin (table, column1, operator, column2)
	{
		this.query += ' LEFT JOIN '+table+' ON '+column1+' '+operator+' '+column2+'';
		return this;
	}

	rightJoin (table, column1, operator, column2)
	{
		this.query += ' RIGHT JOIN '+table+' ON '+column1+' '+operator+' '+column2+'';
		return this;
	}

	crossJoin ()
	{
		this.query += ' CROSS JOIN '+table+'';
		return this;
	}

	union (table, columns)
	{
		this.query += ' UNION SELECT '+columns+' FROM '+table+'';
		return this;
	}

	unionAll (table, columns)
	{
		this.query += ' UNION ALL SELECT '+columns+' FROM '+table+'';
		return this;
	}

	or (column, operator, value)
	{
		this.query += " OR "+column+" "+operator+" '"+value+"'";
		return this;
	}

	and (column, operator, value)
	{
		this.query += " AND "+column+" "+operator+" '"+value+"'";
		return this;
	}

	groupBy (column) 
	{
		this.query += ' GROUP BY '+column+'';
		return this;
	}

	having (column, operator, value)
	{
		this.query += " HAVING "+column+" "+operator+" '"+value+"'";
		return this;
	}

	orderBy (columns, order = 'DESC')
	{
		this.query += " ORDER BY "+columns+" "+order+"";
		return this;
	}

	limit (number)
	{
		this.query += ' LIMIT '+number+'';
		return this;
	}

	delete (condition = '')
	{
		this.query = 'DELETE FROM '+this.table+' '+condition;
		return this;
	}

	get ()
	{
		this.connect.query(this.query, function (err, result) {
			if (err) throw err;
			return result;
		});
	}

	save ()
	{
		this.connect.query(this.query, function (err, result) {
			if (err) throw err;
		});
	}
}

module.exports = Model