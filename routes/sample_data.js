var express = require('express');

var router = express.Router();

var database = require('../database');

router.get("/", function(request, response, next){

	response.render('sample_data', {title : 'Node JS PostgreSQL Ajax Application'});

});

router.post("/action", function(request, response, next){

	var action = request.body.action;

	if(action == 'fetch')
	{
		var query = 'SELECT * FROM sample_data ORDER BY id ASC';

		database.query(query, function(error, data){

			response.json({
				data: data.rows
			});

		});
	}

	if (action == 'Add') {
		var first_name = request.body.first_name;
		var last_name = request.body.last_name;
		var age = request.body.age;
		var gender = request.body.gender;
	  
		var query = `INSERT INTO sample_data 
					 (first_name, last_name, age, gender) 
					 VALUES ($1, $2, $3, $4)`;
	  
		database.query(query, [first_name, last_name, age, gender], function (error, data) {
		  response.json({
			message: 'Data Added'
		  });
		});
	  }

	if(action == 'fetch_single')
	{
		var id = request.body.id;

		var query = `SELECT * FROM sample_data WHERE id = '${id}'`;

		database.query(query, function(error, data){

			response.json(data.rows[0]);

		});
	}

	if(action == 'Edit')
	{
		var id = request.body.id;

		var first_name = request.body.first_name;

		var last_name = request.body.last_name;

		var gender = request.body.gender;

		var age = request.body.age;

		var query = `
		UPDATE sample_data 
		SET first_name = '${first_name}', 
		last_name = '${last_name}', 
		age = '${age}', 
		gender = '${gender}' 
		WHERE id = '${id}'
		`;

		database.query(query, function(error, data){
			response.json({
				message : 'Data Edited'
			});
		});
	}

	if(action == 'delete')
	{
		var id = request.body.id;

		var query = `DELETE FROM sample_data WHERE id = '${id}'`;

		database.query(query, function(error, data){

			response.json({
				message : 'Data Deleted'
			});

		});
	}


	if (action == 'search') {
        var searchValue = request.body.searchValue;
        var query = `SELECT * FROM sample_data WHERE column_name ILIKE '%${searchValue}%'`;

        database.query(query, function(error, data){
            response.json({
                data: data.rows
            });
        });
    }

});

module.exports = router;