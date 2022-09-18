let AWS = require("aws-sdk");
AWS.config.update({
    accessKeyId: "fakeMyKeyId",
    secretAccessKey: "fakeSecretAccessKey",
    region: "us-west2",
    endpoint: "http://localhost:8000"
});
const docClient = new AWS.DynamoDB.DocumentClient();
//CC put Adds / updates whole Item .
// docClient.put({ 
//     TableName: 'td-notes',
//     Item: {
//         user_id: 'bb',
//         timestamp: 11,
//         title: 'title 1',
//         content: 'content1'
//     }
// }, (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

docClient.update({ //CC Only for update , PK & SK reqd
    TableName: 'td-notes',
    Key: {
        user_id: 'bb',
        timestamp: 11
    },
    UpdateExpression: 'set #t = :t',
    ExpressionAttributeNames: {
        '#t': 'title'
    },
    ExpressionAttributeValues: {
        ':t': 'Updated Title'
    }
}, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
})
//CC similarly we have docClient.delete which requires PK & SK and deltes a ITEM

//CC Batch write , it can delete and write multiple item at same time but at max 25 items only.

docClient.batchWrite({
    RequestItems: {
        'td-notes': [
            {
                DeleteRequest: {
                    Key: {
                        user_id: 'bb',
                        timestamp: 11
                    }
                }
            },
            {
                PutRequest: {
                    Item: {
                        user_id: 'bb',
                        timestamp: 22,
                        title: 'title 2',
                        content: 'content2'
                    }
                }
            }
        ]
    }
}, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
})