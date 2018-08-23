'use strict';

var AWS = require('aws-sdk'),
	mydocumentClient = new AWS.DynamoDB.DocumentClient(); 

exports.handler = function(event, context, callback){
	var params = {
		Item : {
			"empId" :event.empId,
			"empFirstName" : event.empFirstName,
			"empLastName" : event.empLastName,
			"empAge" : event.empAge
		},
		TableName : process.env.TABLE_NAME
	};
	mydocumentClient.put(params, function(err, data){
		callback(err, data);
	});
}