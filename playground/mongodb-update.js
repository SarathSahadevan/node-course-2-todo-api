const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp' , (err,db)=>{

if(err){
   return console.log('unable to connect');
}
console.log('success');

db.collection('Todos').findOneAndUpdate({
    text:'abcd'
},{
    $set:{
        completed:true
    }
},{
    returnOriginal:false
}).then((result)=>{
    console.log(result)
});



// db.close();

});
