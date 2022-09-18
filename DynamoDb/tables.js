 let AWS = require("aws-sdk");
//import AWS from "aws-sdk";
AWS.config.update({
    accessKeyId:"fakeMyKeyId",
    secretAccessKey:"fakeSecretAccessKey",
    region:"us-west2",
    endpoint:"http://localhost:8000"
});
const db =new AWS.DynamoDB();

db.createTable({
    TableName:"td-notes",
    AttributeDefinitions: [
       {
        AttributeName:"user_id",
        AttributeType:"S"
       },
       {
        AttributeName:"timestamp",
        AttributeType:"N"
       }
    ],
    KeySchema: [
        {
         AttributeName:"user_id",
         KeyType:"HASH"
        },
        {
         AttributeName:"timestamp",
         KeyType:"RANGE"
        }
     ],
     ProvisionedThroughput:{
         ReadCapacityUnits:1,
         WriteCapacityUnits:1
     }
},(err,data)=>{

    if(err){
       console.log(err);
    }else{
       console.log(JSON.stringify(data,null,2));
    }

})