import clientPromise from '../../lib/mongodb';



export default async function handler(req, res){
  if(req.method === 'POST'){
    try{
       const {senderEmail,message}=req.body;

      if (!senderEmail||!message) {
    return   res.status(400).json({ error: 'Email and message are required' });
      }

       const client=await clientPromise;
         const db=client.db('portfolioContact');
     const collection=db.collection('contactFormMessages');

      const result=await collection.insertOne({ senderEmail, message, createdAt:new Date()});

      return res.status(200).json({message:'Message received',result});
    } catch(error){
      console.error('Error inserting document:', error.message);
      return res.status(500).json({error:'Internal Server Error',details: error.message});
    }
    }
  
  else
  
  {
    return res.status(405).json({error:'Method Not Allowed'});


}
}
