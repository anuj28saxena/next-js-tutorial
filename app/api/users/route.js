
import { NextResponse } from "next/server";
// import { connectDB } from "../../../lib/mongodb";
import { connectDB } from "../../../lib/mongoose"; 
import User from "../../../models/User"; 

// import { ObjectId } from "mongodb";


export async function GET(){  

    try{
        await connectDB();

        const users = await User.find();

        return NextResponse.json({
            message: "User fetch Successfully",
            data: users
        })

    } catch (error) {
         return NextResponse.json({
            message: "error getting users",
        })
    }

}


export async function POST(req){
    try {
        await connectDB();
        const body = await req.json();

        const user = await User.create(body);
      
        return NextResponse.json({
            message: "USer created successfully",
            data: user
        })

    } catch (error) {
         return NextResponse.json({
            message: "error creating user",
            error: error.message
        })
    }

}



// ------------- WITH MONGODB ONLY NO USE OF MONGOOSE PACKAGE ----------------

// export async function GET(){
//     const db = await connectDB();

//     const users = await db.collection("users").find({}).toArray()
    
//     return  NextResponse.json(users);
// }


// export async function POST(req){
//     const db = await connectDB() ;

//     const body = await req.json();

//     const result =  await db.collection("users").insertOne(body)

//     return NextResponse.json({
//         message: "USer created successfully",
//         data:result
//     })
// }

// export async function PUT(req){
//     const db = await connectDB(); 
//     const body = await req.json();

//     const { id, name, email } = body ;

//     const result = await db.collection("users").updateOne(
//         {
//             _id : new ObjectId(id)
//         },
//         { $set: {
//             name,
//             email
//         } }
//     ) 

//     return NextResponse.json({
//         message: "UYSer updated using put api",
//         data: result
//     })

// }


// export async function PATCH(req){
//     const db = await connectDB(); 
//     const body = await req.json();

//     const { id, ...updatedFields } = body ;

//     if(!id){
//         return NextResponse.json(
//           {  error: "ID required"},
//           {  status: 400 },
//         )
//     }

//     const result = await db.collection("users").updateOne(
//         {
//             _id : new ObjectId(id)
//         },
//         { $set: updatedFields }
//     ) 

//     return NextResponse.json({
//         message: "UYSer updated using patch api",
//         data: result
//     })

// }


// export async function DELETE(req){
    

//     try {
//         const db = await connectDB(); 
//         const body = await req.json();

//         const {id} = body ;

//         const result = await db.collection("users").deleteOne({
//             _id : new ObjectId(id)
//         });

//         if(result.deletedCount === 0){
//             return NextResponse.json({
//                 message: "User not found",
//             })
//         }

//         return NextResponse.json({
//             message: "USer deleted successfully",
//         })

//     } catch (error) {
//         return NextResponse.json({
//             message: "error deleting user",
//             error: error.message
//         })
//     }
// }