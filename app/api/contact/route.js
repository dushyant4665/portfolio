// import connectDB from "../lib/mongodb.js";
// import Contact from "../models/schema.js";
// import { NextResponse } from "next/server";
// import mongoose from "mongoose";

// export async function POST(req){
//     const{username, email, phoneNumber, message}= await req.json();    
//  try{
//       await connectDB();
//       await Contact.create({username, email, phoneNumber ,message})
//       return NextResponse.json({
//        msg:['Message sent successfully'],
//        success: true,
//       })
//  }
//  catch(error){
//     if (error instanceof mongoose.Error.ValidationError){
//         let errorList =[];
//         for (let e in error.errors){
//             errorList.push(error.errors[e].message);
//         }
//         return NextResponse.json({msg: errorList})
//     }
//     else{
//         return NextResponse.json({msg:['Unable to send message.']});
//   }
//  }
// }