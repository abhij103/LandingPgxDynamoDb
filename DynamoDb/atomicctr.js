// Used for Inc/Dec count
// Not that Accurate , Shouldn't be used in banking transactn etc
// But simple use cases such as counting website visitors etc it can be used.
let AWS = require("aws-sdk");
AWS.config.update({
    accessKeyId: "fakeMyKeyId",
    secretAccessKey: "fakeSecretAccessKey",
    region: "us-west2",
    endpoint: "http://localhost:8000"
});
const docClient = new AWS.DynamoDB.DocumentClient();
docClient.update({ //CC Only for update , PK & SK reqd
    TableName: 'td-notes',
    Key: {
        user_id: 'bb',
        timestamp: 11
    },
    UpdateExpression: 'set #v = #v + :incr',
    ExpressionAttributeNames: {
        '#v': 'views'
    },
    ExpressionAttributeValues: {
        ':incr': 1
    }
}, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
})