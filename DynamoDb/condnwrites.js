let AWS = require("aws-sdk");
AWS.config.update({
    accessKeyId: "fakeMyKeyId",
    secretAccessKey: "fakeSecretAccessKey",
    region: "us-west2",
    endpoint: "http://localhost:8000"
});
const docClient = new AWS.DynamoDB.DocumentClient();
//CC put Adds / updates whole Item .
docClient.put({ 
    TableName: 'td-notes',
    Item: {
        user_id: 'bb',
        timestamp: 22,
        title: 'title 1',
        content: 'content1'
    },
    ConditionExpression: 'attribute_not_exists(#SK)',
    // It will only allow put if timestamp is unique  for a user_id
    ExpressionAttributeNames: {
        '#SK':'timestamp'
    }
}, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});