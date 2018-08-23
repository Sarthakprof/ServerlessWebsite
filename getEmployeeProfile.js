'use strict';

var AWS = require('aws-sdk'),
	mydocumentClient = new AWS.DynamoDB.DocumentClient(); 

exports.getempprofile = function(event, context, callback){
	var params = {
		TableName : process.env.TABLE_NAME
	};
	mydocumentClient.scan(params, function(err, data){
		if(err){
		    callback(err, null);
		}else{
		    callback(null, data.Items);
		}
	});
}