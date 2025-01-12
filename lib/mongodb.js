


import {MongoClient}from'mongodb';

const uri=process.env.MONGODB_URI; 
const client = new MongoClient(uri,{useNewUrlParser:true,useUnifiedTopology:true });

let clientPromise;

if(process.env.NODE_ENV === 'development') {

  if(!global._mongoClientPromise){
    global._mongoClientPromise =client.connect();}
  clientPromise =global._mongoClientPromise;} 
else{
clientPromise = client.connect();
}

export default clientPromise;
