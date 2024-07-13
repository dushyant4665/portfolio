// import mongoose, {Schema} from 'mongoose'

// const contactSchema = new Schema({

//     username:{
//         type:String,
//         required:[true,"Name is required."],
//         trim:true,
//         minLength:[2,'Name must be larger than 2 characters'],
//         maxLength:[50,"Name must be lesser than 50 character"],},


//         phoneNumber:{
//             type:Number,
//             required:[true,'Phone number is required',],
//             trim:true,
//             minLength:[9,'Phone number must be larger than 9 character'],
//             maxLength:[12,'phone number must be lesser than 12'],
//         },

//         email:{
//         type:String,
//         required:[true,"Email is required."],
//         match:[/^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
//             'Invalid email address'],
//         },

//             message:{
//                 type:String,
//                 required:[true,'Message is required.'],
//         },

//             date:{
//                 type:Date,
//                 default:Date.now,
//         },
// });

// const Contact= 
//       mongoose.models.Contact || mongoose.model
// ('Contact',contactSchema )

// export default Contact();