let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    // try {
    //     let data = await ddb.put({
    //         TableName: "MyTable",
    //         Item: {
    //             key: event.key
    //         }
    //     }).promise();

    // } catch (err) {
    //     // error handling goes here
    // };

    // try {
    //     let data = await ddb.get({
    //         TableName: "MyTable",
    //         Key: {
    //             key: "567"
    //         }
    //     }).promise();

    // } catch (err) {
    //     // error handling goes here
    // };



    return { "message": "Successfully executed" };
};