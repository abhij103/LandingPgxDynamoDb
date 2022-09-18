let AWS = require("aws-sdk");
AWS.config.update({
    accessKeyId: "fakeMyKeyId",
    secretAccessKey: "fakeSecretAccessKey",
    region: "us-west2",
    endpoint: "http://localhost:8000"
});
const docClient = new AWS.DynamoDB.DocumentClient();

docClient.get({ // get a single ITEM
    TableName:'td-notes',
    Key:{
         user_id:'bb',
         timestamp:22
    }
},
     (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
})

//Query is done for a partition , therfore PK is reqd
docClient.query({ 
    TableName:'td-notes',
    KeyConditionExpression: 'user_id = :uid',
    ExpressionAttributeValues:{
        ':uid':'bb'
    }
},
     (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
})


//cc Scan reads across partitions
docClient.scan({ // Scan reads whole table, very costly
    TableName:'td-notes',
    FilterExpression: 'title = :t',
    ExpressionAttributeValues:{
        ':t':'title 2'
    }
},
     (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
})

// THERE IS Also BatchGet using which we can get multiple items from a single/multiple table